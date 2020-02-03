/* eslint-disable */

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

import Button from '@material-ui/core/Button';
import {Container} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo.png"
import Select from "@material-ui/core/Select";

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

    testValue = "MOV [100],1\n" +
        "MOV [101],2\n" +
        "MOV [102],3";

    examples = [
        ";Programa para dividir un numero de 16 bits entre uno de 8\n" +
        "A: MOV SI, 500     ;Cargar 500 en el source index register\n" +
        "\n" +
        "B: MOV DI, 600     ;Cargar 600 en el destination index register\n" +
        "\n" +
        "MOV BL, [SI]    ;Poner el numero de 8 bits de memoria en BL\n" +
        "INC SI          ;Apuntar a la siguiente direccion\n" +
        "MOV AX, [SI]    ;Tomar el numero de 16 bits de memoria a AX\n" +
        "DIV BL          ;Dividir AL entre BL\n" +
        "MOV [DI], AX    ;Guardar el resultado de 16 bits en memoria\n" +
        "HLT             ;Terminar el programa",

        ";Programa para el calcular factorial de un numero\n" +
        "MOV BX, 5\n" +
        "MOV CX, BX\n" +
        "DEC CX\n" +
        "MOV AX, 0001\n" +
        "MOV DX, 0000\n" +
        "dir:MUL BX\n" +
        "DEC BX\n" +
        "LOOP dir\n" +
        "MOV [0600], AX\n" +
        "MOV [0601], DX\n" +
        "HLT",

        ";Programa para calcular el término i-ésimo de la sucesión de fibonacci\n" +
        "MOV CX, 10     ;Termino décimo de la sucesión de fibonacci\n" +
        "MOV AX, 0;\n" +
        "MOV BX, 1;\n" +
        "lbl: NOP\n" +
        "MOV DX, BX\n" +
        "ADD BX, AX\n" +
        "MOV AX, DX\n" +
        "LOOP lbl\n" +
        "MOV DX, BX       ;Respuesta estará en DX\n" +
        "HLT"
    ];

    constructor(props){
        super(props);
        this.state = {
            codeString : this.examples[0],
            annotations : [{row: 0, column:1,type:'error',text:'Recuerda presionar check para revisar tu código'}],
            validCode:false,
            aceState:null
        };
        this.parse = this.parse.bind(this);
        this.loadExample = this.loadExample.bind(this);
    }

    componentDidUpdate(prevProps) {
        //console.log(this.state);
    }

    loadExample = (i) =>{
        let newState = {...this.state,codeString:this.examples[i.target.value]};
        this.setState(newState);
        //console.log(i.target.value);
    };


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
            //console.log({codeBuildResults});
        }catch(error){
            console.error({error});
            //todo procesar error y mostrar la anotación que pueda traer en ACE
            //console.log(error)
            return;
        }

        var codeExecutor = new CodeExecutor(codeBuildResults);
        var execResults = codeExecutor.start();

        //console.log(codeBuildResults);
        this.props.startAnim(codeBuildResults);
        //Animación
    };

    render() {
        return(
            <React.Fragment>
                <Grid container >
                    <Grid item xs={12}>
                        <AppBar position={"relative"}>
                            <Toolbar>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid xs={6} item container>
                        <Grid item>
                            <Typography variant="h3" gutterBottom>
                                Visual Assembly Code Analyzer
                            </Typography>
                        </Grid>
                        <Grid item>
                            <div ><img src={Logo} style={{margin: "auto", display: "block", width: "90%", height: "90%"}}/></div>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" gutterBottom>
                                Bienvenido a V.A.C.A.! Para empezar, escribe tu código de ASM-8086 en el editor de la parte
                                derecha. Una vez hayas acabado, presiona Check para revisar tu código en busca de errores de
                                sintaxis. Puedes pasar el mouse sobre el error para obtener más información.
                                Cuando tu código esté perfecto, presiona Start para ver la animación.

                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
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
                        <Button variant="contained" onClick={this.parse}>Check</Button>
                        <Button  variant="contained" color="primary" disabled={this.state.annotations.length>0} onClick={this.start}>Start</Button>
                        <Select
                            native
                            onChange={this.loadExample}
                            inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value={0}>División</option>
                            <option value={1}>Factorial</option>
                            <option value={2}>Fibonacci</option>
                        </Select>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default InputView;
