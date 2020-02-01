import React from 'react';
import asm8086Lexer from "../../out/asm8086Lexer"
import asm8086Parser from "../../out/asm8086Parser"
import antlr4 from 'antlr4';
import AnnotatingErrorListener from "../../Ace/AnnotatingErrorListener";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-monokai";
import CodeVisitor from '../../Interpreter/CodeBuilderVisitor';
import CodeExecutor from '../../Interpreter/CodeExecutor';

class InputView extends React.Component{

    initialValue = ";Programa para dividir un numero de 16 bits entre uno de 8\n" +
        "A: MOV SI, 500     ;Cargar 500 en el source index register\n" +
        "\n" +
        "B: MOV DI, 600     ;Cargar 600 en el destination index register\n" +
        "\n" +
        "MOV BL, [SI]    ;Poner el numero de 8 bits de memoria en BL\n" +
        "INC SI          ;Apuntar a la siguiente direccion\n" +
        "MOV AX, [SI]    ;Tomar el numero de 16 bits de memoria a AX\n" +
        "DIV BL          ;Dividir AL entre BL\n" +
        "MOV [DI], AX    ;Guardar el resultado de 16 bits en memoria\n" +
        "HLT             ;Terminar el programa";

    constructor(props){
        super(props);
        this.state = {
            codeString : this.initialValue,
            annotations : [{row: 1, column:1,type:'error',text:'Check your code for errors before executing it'}],
            validCode:false,
            aceState:null
        };
        this.parse = this.parse.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidUpdate(prevProps) {
        //console.log(this.state);
    }

    parse = () =>{
        var newState = {...this.state}; //Nuevo estado para modificar y sustituir al anterior, setState re-renderiza todo

        //Obtener el texto del editor, reiniciar anotaciones
        const editor = this.refs.reactAceComponent.editor;
        var codeStr = editor.getValue();
        newState.codeString = codeStr; //será usado para re-renderizar el editor conservando los cambios
        newState.annotations = [];

        //Proceso de parseo del código en busca de errores
        var chars = new antlr4.InputStream(codeStr+'\n');
        var lexer = new asm8086Lexer.asm8086Lexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new asm8086Parser.asm8086Parser(tokens);
        var listener = new AnnotatingErrorListener(newState.annotations);
        parser.addErrorListener(listener);
        parser.buildParseTrees = true;
        var tree = parser.prog();


        this.setState(newState); //setState re-renderizará el componente basado en los cambios del proceso
    };

    validate = () =>{

    };

    start = () => {
        //Proceso de parseo del código en busca de errores
        var chars = new antlr4.InputStream(this.state.codeString+'\n');
        var lexer = new asm8086Lexer.asm8086Lexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new asm8086Parser.asm8086Parser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.prog();
        var codeBuildResults;


        //Build del código
        try {
            var codeBuilderVisitor = new CodeVisitor();
            codeBuildResults = codeBuilderVisitor.start(tree);
            console.log({codeBuildResults});
        }catch(error){
            console.error({error});
            //todo procesar error y mostrar la anotación que pueda traer en ACE
            //console.log(error)
            return;
        }
        var codeExecutionVisitor = new CodeExecutor(codeBuildResults);
        var execResults = codeExecutionVisitor.start();

        //Animación
    };

    render() {
        return(
            <React.Fragment>

                <AceEditor
                    value={this.state.codeString}
                    ref="reactAceComponent"
                    mode="assembly_x86"
                    theme="monokai"
                    setOptions={{
                        showLineNumbers: true,
                        tabSize: 5,
                    }}
                    placeHolder="Inserte su código aquí"
                    annotations={this.state.annotations}
                    onValidate={this.validate}
                />

                <button onClick={this.parse}>Check</button>
                <button  disabled={this.state.annotations.length>0} onClick={this.start}>Start</button>
            </React.Fragment>
        );
    }
}

export default InputView;