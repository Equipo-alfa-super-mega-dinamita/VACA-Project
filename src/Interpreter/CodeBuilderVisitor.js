import asm8086Visitor from '../out/asm8086Visitor';
import RAMContent from './RAMContent';

class CodeBuilderVisitor extends asm8086Visitor.asm8086Visitor{


    labelContents = {};
    ramContent = new RAMContent();
    memoryPos = 0;


    storeInstructionInMemory(instTxt){
        this.ramContent.memoryContent[this.memoryPos] = this.memoryPos;
        this.memoryPos++;
    }

    start(ctx){
        var res = this.visitProg(ctx);
        //console.log(this.ramContent);
        //console.log(this.labelContents);
        return {labelContents: this.labelContents,ramContent:this.ramContent,memoryPos :this.memoryPos};
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
            this.visitAssemblerDirective(ctx.assemblerdirective());
        }

        //this.visitChildren(ctx);
    }

    visitInstruction(ctx){
        //console.log(ctx.opcode().getText());
        //Guardar instrucción en memoria
        this.storeInstructionInMemory(ctx.opcode().getText());
        //console.log(ctx.start.line); //OBTENER LINEA Y COLUMNA DEL CTX
        if(ctx.expressionlist()){
            this.visitExpressionList(ctx.expressionlist());
        }
    }

    visitExpressionList(ctx){
        //console.log(ctx.expression(null));
        var expressions = ctx.expression(null);
    }
}

export default CodeBuilderVisitor;