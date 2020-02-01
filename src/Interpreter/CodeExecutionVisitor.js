import asm8086Visitor from '../out/asm8086Visitor';
import RAMContent from './RAMContent';


class CodeExecutionVisitor extends asm8086Visitor.asm8086Visitor {
    /*
    1 -> reg
    2 -> sReg
    3 -> mem
    4 -> immediate
    */

    labelContents = {};
    ramContent = new RAMContent();
    memoryPos = 0;

    constructor(state) {
        super();
        this.labelContents = state.labelContents;
        this.ramContent = state.labelContents;
        this.memoryPos = state.memoryPos;
        this.registers = {
            AX: 0,
            BX: 0,
            CX: 0,
            DX: 0,
            SP: 0,
            BP: 0,
            SI: 0,
            DI: 0
        };
        this.SRegisters = {
            CS: 0,
            DS: 0,
            SS: 0,
            ES: 0
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

     setReg(value, type) {
        switch (type) {
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
    };

    getReg() {
        let ans = 0;
        switch (type) {
            case 1:
                ans = this.registers.AX;
                break;
            case 2:
                ans = this.registers.BX = value;
                break;
            case 3:
                ans = this.registers.CX = value;
                break;
            case 4:
                ans = this.registers.DX = value;
                break;
            case 5:
                ans = this.registers.SP = value;
                break;
            case 6:
                ans = this.registers.BP = value;
                break;
            case 7:
                ans = this.registers.SI = value;
                break;
            case 8:
                ans = this.registers.DI = value;
                break;
            case 9:
                ans = this.SRegisters.CS = value;
                break;
            case 10:
                ans = this.SRegisters.DS = value;
                break;
            case 11:
                ans = this.SRegisters.SS = value;
                break;
            case 12:
                ans = this.SRegisters.ES = value;
                break;
        }
        return ans;
    };

     codReg(reg) {
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

    start(ctx) {
        let res = this.visitProg(ctx);
        return res;
    }

    push(value) {
        this.registers.SP -= 2;
        this.ramContent.memoryContent[this.registers.SP] = value;
        this.setStackPos(this.registers.SP,value);
    }

    pop(type) {
         //falta
        this.setReg(this.ramContent.memoryContent[this.registers.SP],this.codReg(type));
    }

    visitLine(ctx) {
        //Obtener de aquí la instrucción para la animación?

        //Directiva vs Instrucción
        if (ctx.instruction()) {
            //Guardar par etiqueta/contexto
            this.visitInstruction(ctx.instruction());
        } else if (ctx.assemblerdirective()) {
            this.visitAssemblerDirective(ctx.assemblerdirective());
        }

        //this.visitChildren(ctx);
    }

    visitOpcode(ctx) {
        return ctx.OPCODE().getText();
    }

    visitInstruction(ctx) {
        //console.log(ctx.opcode().getText());
        if (ctx.expressionlist()) {
            this.visitExpressionList(ctx.expressionlist());
        }
    }

    visitExpressionList(ctx) {
        //console.log(ctx.expression(null));
        let expressions = ctx.expression(null);
    }
}

export default CodeExecutionVisitor;