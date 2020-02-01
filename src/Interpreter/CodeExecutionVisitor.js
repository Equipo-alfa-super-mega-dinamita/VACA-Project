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
            DS: 16384,
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

    start(ctx) {
        let res = this.visitProg(ctx);
        return res;
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
            //--- TO DO --- Obtener valor de variable (aun no definimos variables xd)
            return null;
        }else if(argObj.type === "memory"){
            return this.ramContent[argObj.value];
        }else if(argObj.type === "string"){
            // ????
            return null;
        }
    }

    visitLine(ctx) {
        //Directiva vs Instrucción
        if (ctx.instruction()) {
            this.visitInstruction(ctx.instruction());
        } else if (ctx.assemblerdirective()) {
            this.visitAssemblerDirective(ctx.assemblerdirective()); //to do
        }
    }

    visitOpcode(ctx) {
        return ctx.OPCODE().getText();
    }

    visitInstruction(ctx) {
        var opStr = ctx.opcode().getText();
        var args;
        if (ctx.expressionlist()) {
            args = this.visitExpressionList(ctx.expressionlist());
        }
        console.log(opStr);
        console.log(args);
        //Aquí se harían las operaciones (y se guardarían los estados y la manera en que cambian, pero eso después xd)

    }

    visitExpressionList(ctx) {
        //console.log(ctx.expression(null));
        var args = [];
        let expressions = ctx.expression(null);
        expressions.forEach((expr) => {
            args.push(this.visitExpression(expr));
        });
        return args;
    }

    visitExpression(ctx){
        var firstVal = this.visitMultiplyingExpression(ctx.multiplyingExpression(0));
        if(ctx.multiplyingExpression(null).length>1){
            var returnValue = firstVal;
            returnValue.value = this.getRawVal(firstVal);
            for(var iter = 1;iter<ctx.multiplyingExpression(null).length;iter++){
                if(ctx.SIGN(iter-1).getText() === "-"){
                    returnValue.value -= this.getRawVal(this.visitMultiplyingExpression(ctx.multiplyingExpression(iter)));
                }else{
                    returnValue.value += this.getRawVal(this.visitMultiplyingExpression(ctx.multiplyingExpression(iter)));
                }
            }
            return returnValue;
        }else{
            return firstVal;
        }
    }

    visitMultiplyingExpression(ctx){
        //SOLO SE VISITA EL PRIMERO! no soporta multiplicaciones inline (debería???)
        return this.visitArgument(ctx.argument(0));
    }

    visitArgument(ctx){
        var argObj = {};
        if(ctx.number()){
            argObj.type = "number";
            argObj.value = parseInt(ctx.number().getText());
        }else if(ctx.dollar()){
            argObj.type = "dollar";
        }else if(ctx.register_()){
            argObj.type = "register";
            argObj.value = ctx.register_().getText();
        }else if(ctx.pointer_()){
            argObj.type = "pointer";
            argObj.value = ctx.pointer_().getText();
        }else if(ctx.name()){
            argObj.type = "name";
            argObj.value = ctx.name().getText();
        }else if(ctx.string()){
            argObj.type = "string";
            argObj.value = ctx.string().getText();
        }else if(ctx.ptr()){
            //----------TO DO----------- ni idea que son xd
            argObj.type = "ptr"
            argObj.value = ctx.ptr().getText();
        }else{
            var txt = ctx.getText();
            var checkChar = txt.charAt(txt.length-1);
            if(checkChar===']'){
                argObj.type = "memory";
                argObj.value = this.visitExpression(ctx.expression()).value;
            }else if(checkChar === ')'){
                //Que es esto? --- TO DO? ---
            }
        }
        return argObj;
    }

}

export default CodeExecutionVisitor;