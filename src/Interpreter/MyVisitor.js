import asm8086Visitor from '../out/asm8086Visitor';

class MyVisitor extends asm8086Visitor.asm8086Visitor{
    start(ctx){
        return this.visitProg(ctx);
    }

    visitLine(ctx){
        //Obtener de aquí la instrucción para la animación?

        //Guardar par etiqueta/contexto
        if(ctx.lbl()){

        }
        //Directiva vs Instrucción
        if(ctx.instruction()){
            this.visitInstruction(ctx.instruction());
        }else if(ctx.assemblerdirective()){
            this.visitAssemblerDirective(ctx.assemblerdirective());
        }

        //this.visitChildren(ctx);
    }

    visitInstruction(ctx){
        console.log(ctx.opcode().getText());
        if(ctx.expressionlist()){
            this.visitExpressionList(ctx.expressionlist());
        }
    }

    visitExpressionList(ctx){
        console.log(ctx.expression(null));
        var expressions = ctx.expression(null);
    }
}

export default MyVisitor;