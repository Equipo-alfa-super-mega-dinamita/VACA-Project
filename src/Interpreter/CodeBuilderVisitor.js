import asm8086Visitor from '../out/asm8086Visitor';
import RAMContent from './RAMContent';

class CodeBuilderVisitor extends asm8086Visitor.asm8086Visitor{


    labelContents = {};
    ramContent = new RAMContent();
    memoryPos = 0;
    codeArray = [];


    storeInstructionInMemory(instTxt){
        this.ramContent.memoryContent[this.memoryPos] = this.memoryPos;
        this.memoryPos++;
    }

    start(ctx){
        var res = this.visitProg(ctx);
        //console.log(this.ramContent);
        //console.log(this.labelContents);
        return {labelContents: this.labelContents,ramContent:this.ramContent,memoryPos :this.memoryPos,codeArray: this.codeArray};
    }

    visitLine(ctx){
        //Obtener de aquí la instrucción para la animación?

        //Directiva vs Instrucción
        if(ctx.instruction()){
            //Guardar par etiqueta/contexto
            if(ctx.lbl()){
                var labelText = ctx.lbl().label().getText();
                //Existe la columna?
                if(!this.labelContents.hasOwnProperty(labelText)){
                    this.labelContents[labelText] = this.memoryPos;
                }else{
                    throw new Error("Duplicated Label,"+ctx.start.line+","+ctx.start.column);
                }
            }
            this.visitInstruction(ctx.instruction());
        }else if(ctx.assemblerdirective()){
            //todo Visitar directivas, generar su código y usarlas de algún modo
            this.visitAssemblerDirective(ctx.assemblerdirective());
        }

    }

    visitInstruction(ctx){
        var codeObj = {};
        //console.log(ctx.start.line); //OBTENER LINEA Y COLUMNA DEL CTX para generar errores
        //todo errores de cantidad de argumentos
        var opStr = ctx.opcode().getText();
        var argsStr = "";
        var args;

        if (ctx.expressionlist()) {
            args = this.visitExpressionList(ctx.expressionlist());
            argsStr = " "+ctx.expressionlist().getText();
        }
        //console.log(opStr);
        //console.log(args);
        codeObj.instrText = opStr+argsStr;
        codeObj.opCode = opStr.toUpperCase();
        codeObj.args = args;
        //Guardar instrucción en memoria
        this.storeInstructionInMemory(opStr,args);
        this.codeArray.push(codeObj);
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
        let multiplyingExpressions = ctx.multiplyingExpression(null).length;
        if(multiplyingExpressions>1){
            //Para sumar las expresiones y regresar el valor numerico total (implementar getRawVal para que sirva)
            //Las sumas no se hacen en la construccion de codigo, sino en ejecución
            var returnValue = {type:"sum", value:{operands:[],signs:""}};
            for(var iter = 0;iter<multiplyingExpressions-1;iter++){
                returnValue.value.signs+=ctx.SIGN(iter).getText();
                returnValue.value.operands.push(this.visitMultiplyingExpression(ctx.multiplyingExpression(iter)));
                /*if(ctx.SIGN(iter-1).getText() === "-"){
                    returnValue.value -= this.getRawVal(this.visitMultiplyingExpression(ctx.multiplyingExpression(iter)));
                }else{
                    returnValue.value += this.getRawVal(this.visitMultiplyingExpression(ctx.multiplyingExpression(iter)));
                }*/
            }
            returnValue.value.operands.push(this.visitMultiplyingExpression(ctx.multiplyingExpression(multiplyingExpressions-1)));
            return returnValue;
            //return {type:"sum",value:ctx.getText()};
        }else{
            return firstVal;
        }
    }

    visitMultiplyingExpression(ctx){
        //SOLO SE VISITA EL PRIMERO! no soporta multiplicaciones inline (debería???)
        //todo ?
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
            //todo ---- ni idea que son xd
            argObj.type = "ptr";
            argObj.value = ctx.ptr().getText();
        }else{
            var txt = ctx.getText();
            var checkChar = txt.charAt(txt.length-1);
            if(checkChar===']'){
                var exprContent = this.visitExpression(ctx.expression());
                argObj.type = "memory";
                argObj.value = exprContent.value;
                argObj.valueType = exprContent.type;
            }else if(checkChar === ')'){
                //todo ---- que es esto? ----
            }
        }
        return argObj;
    }
}

export default CodeBuilderVisitor;