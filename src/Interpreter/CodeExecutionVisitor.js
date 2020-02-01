import asm8086Visitor from '../out/asm8086Visitor';
import RAMContent from './RAMContent';

class CodeExecutionVisitor extends asm8086Visitor.asm8086Visitor{


    labelContents = {};
    ramContent = new RAMContent();
    memoryPos = 0;

    constructor(state){
        super();
        this.labelContents = state.labelContents;
        this.ramContent = state.labelContents;
        this.memoryPos = state.memoryPos;
    }

    start(ctx){
        var res = this.visitProg(ctx);
        return res;
    }

    visitLine(ctx){
        //Obtener de aquí la instrucción para la animación?

        //Directiva vs Instrucción
        if(ctx.instruction()){
            //Guardar par etiqueta/contexto
            this.visitInstruction(ctx.instruction());
        }else if(ctx.assemblerdirective()){
            this.visitAssemblerDirective(ctx.assemblerdirective());
        }

        //this.visitChildren(ctx);
    }

    visitInstruction(ctx){
        //console.log(ctx.opcode().getText());
        if(ctx.expressionlist()){
            this.visitExpressionList(ctx.expressionlist());
        }
    }

    visitExpressionList(ctx){
        //console.log(ctx.expression(null));
        var expressions = ctx.expression(null);
    }
}

export default CodeExecutionVisitor;