/* eslint-disable */

import asm8086Visitor from '../out/asm8086Visitor';
import RAMContent from './RAMContent';


class CodeExecutor {
    /*
    1 -> reg
    2 -> sReg
    3 -> mem
    4 -> immediate
    */

    /*
    instr = {
        instrText: Texto de la instruccion y argumentos (para mostrar en la animacion solamente)
        opCode: String con el opCode de la instruccion
        args : [] Arreglo con los argumentos de la instruccion
    }

    argObj = {
        type: tipo del argumento { number|dollar|register|pointer|name|string|ptr|sum|memory}
        value: valor del argumento
        valueType: solo para type = memory, tipo de dato que es value : [value]
    }
     */

    labelContents = {};
    ramContent = new RAMContent();
    memoryPos = 0;
    execute = true;
    codeArray;

    constructor(state) {
        this.labelContents = state.labelContents;
        this.ramContent = state.ramContent.memoryContent;
        this.memoryPos = state.memoryPos;
        this.codeArray = state.codeArray;
        this.SRegisters = {
            CS: 0,
            DS: this.memoryPos,
            SS: 32768,
            ES: 49152
        };
        this.registers = {
            AX: 0,
            BX: 0,
            CX: 0,
            DX: 0,
            SP: 0,
            BP: 0,
            SI: 0,
            DI: 0,
            IP: 0,
        };
        this.flags = {
            TF: 0,
            DF: 0,
            IF: 0,
            OF: 0,
            SF: 0,
            ZF: 0,
            AF: 0,
            PF: 0,
            CF: 0
        };
    }

    setReg(value, reg) {

        switch (reg) {
            case "AX":
                this.registers.AX = value;
                break;
            case "BX":
                this.registers.BX = value;
                break;
            case "CX":
                this.registers.CX = value;
                break;
            case "DX":
                this.registers.DX = value;
                break;
            case "SP":
                this.registers.SP = value;
                break;
            case "BP":
                this.registers.BP = value;
                break;
            case "SI":
                this.registers.SI = value;
                break;
            case "DI":
                this.registers.DI = value;
                break;
            case "CS":
                this.SRegisters.CS = value;
                break;
            case "DS":
                this.SRegisters.DS = value;
                break;
            case "SS":
                this.SRegisters.SS = value;
                break;
            case "ES":
                this.SRegisters.ES = value;
                break;
        }
        this.SRegisters.AX = value
    }

    getReg(reg) {
        let ans = 0;
        switch (reg) {
            case "AX":
                ans = this.registers.AX;
                break;
            case "BX":
                ans = this.registers.BX;
                break;
            case "CX":
                ans = this.registers.CX;
                break;
            case "DX":
                ans = this.registers.DX;
                break;
            case "SP":
                ans = this.registers.SP;
                break;
            case "BP":
                ans = this.registers.BP;
                break;
            case "SI":
                ans = this.registers.SI;
                break;
            case "DI":
                ans = this.registers.DI;
                break;
            case "CS":
                ans = this.SRegisters.CS;
                break;
            case "DS":
                ans = this.SRegisters.DS;
                break;
            case "SS":
                ans = this.SRegisters.SS;
                break;
            case "ES":
                ans = this.SRegisters.ES;
                break;
        }
        return ans;
    }


    setStackPos(index, value) {
        this.ramContent[index] = value;
    }

    start() {
        while (this.execute && this.registers.IP < this.SRegisters.DS) {
            let instruction = this.codeArray[this.registers.IP];
            //todo ejecutar instruccion
            this.execInstruction(instruction);
            console.log(this.registers);
            console.log(this.ramContent)
        }
    }

    splitNumber(number) {
        let lsb = (number & 0xFF), msb = (number >> 8) & 0xff;
        return [msb, lsb];
    }

    rebuildNumber(block1, block2) {
        let ans = block2 << 8;
        ans += block1;
        return ans;
    }

    rebuildNumber16(block1, block2) {
        let ans = block2 << 16;
        ans += block1;
        return ans;
    }
    stringBitsNum(num){
        return (num).toString(2).padStart(8,'0');
    }


    getRawVal(argObj) {
        if (argObj.type === "number") {
            return argObj.value;
        } else if (argObj.type === "pointer" || argObj.type === "register") {
            return this.getReg(argObj.value); //Pointers no representan offset, sino direcciones absolutas.
        } else if (argObj.type === "name") {
            if (this.labelContents[argObj.value]) {
                return this.labelContents[argObj.value]; //Etiqueta del codigo (no debería hacer falta usar esto)
            }
            //todo Obtener valor de variable (aun no definimos variables xd)
            return null;
        } else if (argObj.type === "memory") {
            return this.ramContent[this.getLogMemoryDir(argObj)]; //Traer contenido del argObj de tipo memory
        } else if (argObj.type === "string") {
            // ????
            return null;
        } else if (argObj.type === "sum") {
            //todo sumar cosas
            let operands = argObj.value.operands;
            let signs = argObj.value.signs;
            let rawSum = this.getRawVal(argObj.value.operands[0]);
            for (let i = 0; i < operands.length - 1; i++) {
                if (signs.charAt(i) === '-') {
                    rawSum -= this.getRawVal(operands[i + 1])
                } else {
                    rawSum += this.getRawVal(operands[i + 1])
                }
            }
            return rawSum;
        }
    }

    getLogMemoryDir(argObj) { //argObj debe ser de tipo memory this.ramContent[getLogMemoryDir(argObj)] => referencia de la memoria a la que apunta argObj
        if (argObj.valueType === "register") {
            return this.getReg(argObj.value);
        } else if (argObj.valueType === "number") {
            return argObj.value;
        } else if (argObj.valueType === "pointer") {
            //TODO offsets completo?
            if (argObj.value === "SP") {
                return this.SRegisters.SS - this.registers.SP;
            } else if (argObj.value === "BP") {
                return this.getReg("BP");
            } else if (argObj.value === "SI") {
                return this.SRegisters.DS + this.registers.SI;
            } else {
                return this.SRegisters.ES + this.registers.DI;
            }

        } else if (argObj.valueType === "sum") {
            let firstOp = argObj.value.operands[0];
            let sumVal = this.getRawVal({type: "sum", value: argObj.value});
            if (firstOp.type === "pointer") {
                if (firstOp.value === "SP") {
                    return this.SRegisters.SS - sumVal;
                } else if (firstOp.value === "BP") {
                    return sumVal;
                } else if (firstOp.value === "SI") {
                    return this.SRegisters.DS + sumVal;
                } else {
                    return this.SRegisters.ES + sumVal;
                }
            } else {
                return sumVal;
            }
        }
    }

    execInstruction(instr) {
        //little endian: primero menos y luego más
        let args = instr.args;
        let [msb, lsb] = [-1, -1];
        switch (instr.opCode) {
            case "MOV":
                let arg1 = instr.args[0];
                let arg2 = instr.args[1];
                switch (arg1.type) {
                    case "register":
                        if (arg2.type === "register") {
                            this.setReg(this.getReg(arg2.value), arg1.value);
                        } else if (arg2.type === "memory") {
                            this.setReg(this.getRawVal(arg2), arg1.value);
                        } else {
                            this.setReg(this.getRawVal(arg2), arg1.value);
                        }
                        break;
                    case "memory":
                        //this.ramContent[this.getRawVal(arg1)] = this.getRawVal(arg2); //MOV [100],20  ram[[100]] = 20
                        this.ramContent[this.getLogMemoryDir(arg1)] = this.getRawVal(arg2); //ram[100] = 20
                        break;
                }
                this.registers.IP++;
                break;

            case "PUSH":
                this.registers.SP += 1;
                if (args[0].type === "register") {
                    let myVarAux = this.getRawVal(args[0]);
                    [msb, lsb] = this.splitNumber(myVarAux);
                    this.ramContent[this.getLogMemoryDir({value: "SP", valueType: "pointer"})] = msb;
                    this.registers.SP += 1;
                    this.ramContent[this.getLogMemoryDir({value: "SP", valueType: "pointer"})] = lsb;

                } else if (args[0].type === "memory") {
                    this.ramContent[this.getLogMemoryDir({
                        value: "SP",
                        valueType: "pointer"
                    })] = this.getRawVal(args[0]);
                    this.registers.SP += 1;
                    this.ramContent[this.getLogMemoryDir({value: "SP", valueType: "pointer"})] = 0;
                } else {
                    //TODO Error generator wrong data type
                }
                this.registers.IP++;
                break;

            case "POP":
                //TODO Error generator SP neg & wrong data type
                let block1 = this.ramContent[this.getLogMemoryDir({value: "SP", valueType: "pointer"})];
                this.registers.SP -= 1;
                let block2 = this.ramContent[this.getLogMemoryDir({value: "SP", valueType: "pointer"})];
                this.registers.SP -= 1;
                if (args[0].type === "register") {
                    this.setReg(this.rebuildNumber(block1, block2), args[0].value);
                } else if (args[0].type === "memory") {
                    this.ramContent[this.getLogMemoryDir(args[0])] = block1;
                    this.ramContent[this.getLogMemoryDir(args[0]) + 1] = block2;
                } else {
                    //TODO Error generator
                }
                this.registers.IP++;
                break;

            case "DIV":
                let myVarAux = this.getRawVal(args[0]);
                if (myVarAux < 256) {
                    //byte
                    lsb = Math.abs(this.getReg("AX") / this.getRawVal(args[0])>>0); //AL
                    msb = Math.abs(this.getReg("AX") % this.getRawVal(args[0])); //AH
                    this.setReg(this.rebuildNumber(lsb,msb), "AX");

                } else {
                    //word
                    let num = this.rebuildNumber16(this.getReg("AX"), this.getReg("DX"));
                    this.setReg(Math.abs(num / this.getRawVal(args[0])>>0), "AX");
                    this.setReg(Math.abs(num % this.getRawVal(args[0])), "DX");
                }
                this.registers.IP++;
                break;
            case "INC":
                this.registers.IP++;
                break;

            case "HLT":
                this.execute = false;
                break;
        }
        //Algo que se haga al final de todas las instrucciones

    }

}

export default CodeExecutor;
