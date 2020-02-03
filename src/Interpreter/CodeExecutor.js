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
    ramContent;
    memoryPos = 0;
    execute = true;
    codeArray;
    processed = [];
    procInstr;

    constructor(state) {
        this.labelContents = state.labelContents;
        this.ramContent = state.ramContent.memoryContent;
        this.buffer     = state.ramContent.buffer;
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

    start() {
        while (this.execute && this.registers.IP < this.SRegisters.DS) {
            let instruction = this.codeArray[this.registers.IP];
            let procState = this.buildState();
            this.execInstruction(instruction);
            let procInstr = this.buildInstr(instruction);
            console.log(instruction.instrText);
            console.log(this.registers);
            console.log(this.ramContent)
            this.processed.push({state: procState,instruction:procInstr});
        }
        return this.processed;
    }

    doInstr(){
        let instruction = null;
        let procState = null;
        this.procInstr = null;
        if(this.execute && this.registers.IP < this.SRegisters.DS){
            instruction = this.codeArray[this.registers.IP];
            procState = this.buildState();
            this.execInstruction(instruction);
            let procInstr = this.buildInstr(instruction);
            console.log(instruction.instrText);
            //console.log(this.registers);
            //console.log(this.ramContent)
            this.processed.push({state: procState,instruction:procInstr});
        }
        return {state: procState,instruction:this.procInstr}
    }

    buildInstr(instruction){
        return instruction.instrText;
    }

    buildState(){
        let st = {
            Registers: {
                flags: {
                    control : {
                        TF:this.flags.TF,
                        DF:this.flags.DF,
                        IF:this.flags.IF,
                    },
                    status : {
                        OF: this.flags.OF,
                        SF: this.flags.SF,
                        ZF: this.flags.ZF,
                        AF: this.flags.AF,
                        PF: this.flags.PF,
                        CF: this.flags.CF,
                    }
                },
                registers: {
                    general:{
                        AX:this.registers.AX,
                        BX:this.registers.BX,
                        CX:this.registers.CX,
                        DX:this.registers.DX,
                    },
                    pointer:{
                        SP:this.registers.SP,
                        BP:this.registers.BP,
                    },
                    index:{
                        SI:this.registers.SI,
                        DI:this.registers.DI,
                    },
                    segment:{
                        CS:this.SRegisters.CS,
                        ES:this.SRegisters.ES,
                        DS:this.SRegisters.DS,
                        SS:this.SRegisters.SS,
                    },
                    instruction:{
                        IP:this.registers.IP,
                    },
                }
            },
            memory: new Uint8Array(this.buffer.slice(0))
        };
        return st;
    }

    setReg(value, reg) {
        if(reg.charAt(1)==='L'||reg.charAt(1)==='H'){
            this.setRegHalf(value,reg);
        }
        let valMod = value % 65536;
        switch (reg) {
            case "AX":
                this.registers.AX = valMod;
                break;
            case "BX":
                this.registers.BX = valMod;
                break;
            case "CX":
                this.registers.CX = valMod;
                break;
            case "DX":
                this.registers.DX = valMod;
                break;
            case "SP":
                this.registers.SP = valMod;
                break;
            case "BP":
                this.registers.BP = valMod;
                break;
            case "SI":
                this.registers.SI = valMod;
                break;
            case "DI":
                this.registers.DI = valMod;
                break;
            case "CS":
                this.SRegisters.CS = valMod;
                break;
            case "DS":
                this.SRegisters.DS = valMod;
                break;
            case "SS":
                this.SRegisters.SS = valMod;
                break;
            case "ES":
                this.SRegisters.ES = valMod;
                break;
        }
        this.SRegisters.AX = valMod
    }

    setRegHalf(value,reg){
        let custVal = 0;
        let firstChar = reg.charAt(0);
        let [msb,lsb] = this.splitNumber(this.getReg(firstChar+'X'));
        if(reg.charAt(1)==='L'){
            custVal = this.rebuildNumber(value,msb);
        }else{
            custVal = this.rebuildNumber(lsb,value);
        }
        this.setReg(custVal,firstChar+'X');
    }

    getReg(reg) {
        let ans = 0;
        let c =reg.charAt(0);
        let val;
        switch (reg) {
            case "AX":
            case "AL":
            case "AH":
                ans = this.registers.AX;
                break;
            case "BX":
            case "BL":
            case "BH":
                ans = this.registers.BX;
                break;
            case "CX":
            case "CL":
            case "CH":
                ans = this.registers.CX;
                break;
            case "DX":
            case "DL":
            case "DH":
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
        if(reg.charAt(1) === 'L'){
            return this.splitNumber(ans)[1];
        }else if(reg.charAt(1) === 'H'){
            return this.splitNumber(ans)[0];
        }else {
            return ans;
        }
    }



    setStackPos(index, value) {
        this.ramContent[index] = value;
    }

    splitNumber(number) {
        let lsb = (number & 0xFF), msb = (number >> 8) & 0xff;
        return [msb, lsb];
    }

    splitNumber16(number) {
        let lsb = (number & 0xFFFF), msb = (number >> 16) & 0xffff;
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

    getIntFromBitsString(str){
        return parseInt(str, 2);
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
                if((this.SRegisters.SS - this.registers.SP)<0) return this.SRegisters.SS;
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
            //--- Data movement operations ---
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

            case "LEA":
                if(args[0].type === "register" && args[1].type === "memory"){
                    this.setReg(this.getLogMemoryDir(args[1]), args[0].value);
                }
                this.registers.IP++;
                break;

            case "INC":
                    if(args[0].type === "register"){
                        this.setReg(this.getReg(args[0].value)+1,args[0].value);
                    }else if(args[0].type === "memory"){
                        let incDir = this.getLogMemoryDir(args[0]);
                        this.ramContent[incDir]++;
                    }else{
                        //TODO error
                    }
                this.registers.IP++;
                break;

            case "DEC":
                if(args[0].type === "register"){
                    this.setReg(this.getReg(args[0].value)-1,args[0].value);
                }else if(args[0].type === "memory"){
                    let incDir = this.getLogMemoryDir(args[0]);
                    this.ramContent[incDir]--;
                }else{
                    //TODO error
                }
                this.registers.IP++;
                break;

            case "ADD":
                let addResult = this.getRawVal(args[0]) + this.getRawVal(args[1]);
                if(addResult === 0){
                    this.flags.ZF = 1;
                }
                if(addResult){

                }
                switch(args[0].type){
                    case "register":
                        //this.setReg(addResult, args[0].value);
                        if(args[1].type === "register"){
                            //16 bits ambos operandos
                            this.setReg(addResult,args[0].value);
                        }else if(args[1].type === "memory"){
                            //16 + 8 bits
                            this.setReg(addResult,args[0].value);
                        }else if(args[1].type === "number"){
                            this.setReg(addResult,args[0].value);
                        }
                        break;

                    case "memory":
                        this.ramContent[this.getLogMemoryDir(args[0])] = addResult;
                        break;
                }
                this.registers.IP++;
                break;

            case "SUB":
                let subResult = this.getRawVal(args[0]) - this.getRawVal(args[1]);
                if(subResult === 0){
                    this.flags.ZF = 1;
                }
                if(subResult){

                }
                switch(args[0].type){
                    case "register":
                        //this.setReg(addResult, args[0].value);
                        if(args[1].type === "register"){
                            //16 bits ambos operandos
                            this.setReg(subResult,args[0].value);
                        }else if(args[1].type === "memory"){
                            //16 + 8 bits
                            this.setReg(subResult,args[0].value);
                        }else if(args[1].type === "number"){
                            this.setReg(subResult,args[0].value);
                        }
                        break;

                    case "memory":
                        this.ramContent[this.getLogMemoryDir(args[0])] = subResult;
                        break;
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

            case "MUL":
                let mulValue;
                if(args[0].type === "register"){
                    if(args[0].value.charAt(1) === 'L' || args[0].value.charAt(1) === 'H'){ //byte
                        this.setReg(this.getRawVal(args[0])*this.getReg("AL"),"AX");
                    }else{  //word
                        mulValue = this.splitNumber16(this.getRawVal(args[0])*this.getReg("AX"));
                        this.setReg(mulValue[0],"DX");
                        this.setReg(mulValue[1],"AX");
                    }
                }else if(args[0].type === "memory"){
                    //siempre byte
                    this.setReg(this.getRawVal(args[0])*this.getReg("AL"),"AX");
                }
                this.registers.IP++;
                break;

            case "LOOP":
                if(this.getReg("CX")>0){
                    this.setReg(this.getReg("CX")-1,"CX");
                    this.registers.IP = this.labelContents[args[0].value];
                }else{
                    this.registers.IP++;
                }
                break;

            case "NOP":
                this.registers.IP++;
                break;

            case "HLT":
                this.execute = false;
                break;

            default:
                this.registers.IP++;
        }
        //Algo que se haga al final de todas las instrucciones
    }
}

export default CodeExecutor;
