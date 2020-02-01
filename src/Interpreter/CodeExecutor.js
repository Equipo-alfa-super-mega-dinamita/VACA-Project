import asm8086Visitor from '../out/asm8086Visitor';
import RAMContent from './RAMContent';


class CodeExecutor{
    /*
    1 -> reg
    2 -> sReg
    3 -> mem
    4 -> immediate
    */

    labelContents = {};
    ramContent = new RAMContent();
    memoryPos = 0;
    execute = true;
    codeArray;

    constructor(state) {
        this.labelContents = state.labelContents;
        this.ramContent = state.ramContent;
        this.memoryPos = state.memoryPos;
        this.codeArray = state.codeArray;
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
        this.SRegisters = {
            CS: 0,
            DS: this.memoryPos,
            SS: 32768,
            ES: 49152
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

    setReg(value,type){
        switch(type){
        case 1:
        this.registers.AX = value;
        break;
        case 2:
        this.registers.BX = value;
        break;
        case 3:
        this.registers.CX = value;
        break;
        case 4:
        this.registers.DX = value;
        break;
        case 5:
        this.registers.SP = value;
        break;
        case 6:
        this.registers.BP = value;
        break;
        case 7:
        this.registers.SI = value;
        break;
        case 8:
        this.registers.DI = value;
        break;
        case 9:
        this.SRegisters.CS = value;
        break;
        case 10:
        this.SRegisters.DS = value;
        break;
        case 11:
        this.SRegisters.SS = value;
        break;
        case 12:
        this.SRegisters.ES = value;
        break;
        }
        this.SRegisters.AX = value
    }

    getReg(type) {
        let ans = 0;
        switch (type) {
            case 1:
                ans = this.registers.AX;
                break;
            case 2:
                ans = this.registers.BX;
                break;
            case 3:
                ans = this.registers.CX;
                break;
            case 4:
                ans = this.registers.DX;
                break;
            case 5:
                ans = this.registers.SP;
                break;
            case 6:
                ans = this.registers.BP;
                break;
            case 7:
                ans = this.registers.SI;
                break;
            case 8:
                ans = this.registers.DI;
                break;
            case 9:
                ans = this.SRegisters.CS;
                break;
            case 10:
                ans = this.SRegisters.DS;
                break;
            case 11:
                ans = this.SRegisters.SS;
                break;
            case 12:
                ans = this.SRegisters.ES;
                break;
        }
        return ans;
    }

    codReg(reg){
         let ans = 0;
         switch (reg) {
            case 'AX':
                ans = 1;
                break;
            case 'BX':
                ans = 2;
                break;
            case 'CX':
                ans = 3;
                break;
            case 'DX':
                ans = 4;
                break;
            case 'SP':
                ans = 5;
                break;
            case 'BP':
                ans = 6;
                break;
            case 'SI':
                ans = 7;
                break;
            case 'DI':
                ans = 8;
                break;
            case 'CS':
                ans = 9;
                break;
            case 'DS':
                ans = 10;
                break;
            case 'SS':
                ans = 11;
                break;
            case 'ES':
                ans = 12;
                break;
        }
        return ans;
    }

    setStackPos(index,value){
        this.ramContent.memoryContent[index] = value;
    }

    start(){
        while(this.execute && this.registers.IP<this.SRegisters.DS){
            var instruction = this.codeArray[this.registers.IP];
            //todo ejecutar instruccion
            console.log(instruction);
            //dentro de la ejecución se modificaría el IP, aumentandolo o usandolo para los JMP, borrar siguiente linea cuando esté
            this.registers.IP++;
        }
    }

    push(value) {
        this.registers.SP -= 2;
        this.ramContent.memoryContent[this.registers.SP] = value;
        this.setStackPos(this.registers.SP,value);
    }

    pop(type){
        if (type === 1){

        }else if(type === 2){

        }else if(type === 3){

        }
        return this.ramContent.memoryContent[this.registers.SP]
    }

    getRawVal(argObj){
        if(argObj.type === "number"){
            return argObj.value;
        }else if(argObj.type === "pointer"||argObj.type === "register"){
            return this.getReg(this.codReg(argObj.value)); //Pointers no representan offset, sino direcciones absolutas. TO DO?
        }else if(argObj.type === "name"){
            if(this.labelContents[argObj.value]){
                return this.labelContents[argObj.value]; //Etiqueta del codigo (no debería hacer falta usar esto)
            }
            //todo Obtener valor de variable (aun no definimos variables xd)
            return null;
        }else if(argObj.type === "memory"){
            return this.ramContent[this.getRawVal({type: argObj.valueType, value:argObj.value})]; //puede estar sirviendo mal
        }else if(argObj.type === "string"){
            // ????
            return null;
        }else if(argObj.type === "sum"){
            //todo sumar cosas
        }
    }

}

export default CodeExecutor;