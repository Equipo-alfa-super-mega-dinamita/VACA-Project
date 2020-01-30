import React from 'react';
import asm8086Lexer from "../../out/asm8086Lexer"
import asm8086Parser from "../../out/asm8086Parser"
import antlr4 from 'antlr4';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-assembly_x86";
//import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import MyVisitor from '../../Interpreter/MyVisitor';

class InputView extends React.Component{

    initialValue = ";Programa para dividir un numero de 16 bits entre uno de 8\n" +
        "MOV SI, 500     ;Cargar 500 en el source index register\n" +
        "\n" +
        "MOV DI, 600     ;Cargar 600 en el destination index register\n" +
        "\n" +
        "MOV BL, [SI]    ;Poner el numero de 8 bits de memoria en BL\n" +
        "INC SI          ;Apuntar a la siguiente direccion\n" +
        "MOV AX, [SI]    ;Tomar el numero de 16 bits de memoria a AX\n" +
        "DIV BL          ;Dividir AL entre BL\n" +
        "MOV [DI], AX    ;Guardar el resultado de 16 bits en memoria\n" +
        "HLT             ;Terminar el programa";

    constructor(props){
        super(props);
        this.state = {codeString : ""};
        this.parse = this.parse.bind(this)
    }

    parse = () =>{
        const editor = this.refs.reactAceComponent.editor;
        let codeString = editor.getValue()+'\n';
        var chars = new antlr4.InputStream(codeString);
        var lexer = new asm8086Lexer.asm8086Lexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new asm8086Parser.asm8086Parser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.prog();
        console.log(tree.toStringTree(parser.ruleNames));

        //Interpretado del código
        var myVisitor = new MyVisitor();
        myVisitor.start(tree)
    };

    render() {
        return(
            <React.Fragment>

                <AceEditor
                    defaultValue={this.initialValue}
                    ref="reactAceComponent"
                    mode="assembly_x86"
                    theme="monokai"
                    setOptions={{
                        showLineNumbers: true,
                        tabSize: 5,
                    }}
                    placeHolder="Inserte su código aquí"
                />

                <button onClick={this.parse}>Start</button>
            </React.Fragment>
        );
    }
}

export default InputView;