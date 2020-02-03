/* eslint-disable */
//import 'react-p5-wrapper/node_modules/p5/lib/addons/p5.sound';
import RAM from "./RAM";
import Registers from "./Registers";
import InstructionQueue from "./InstructionQueue";
import ExecutionUnit from "./ExecutionUnit";
export default function sketch(p5){

    let canvas = null
    let executionUnit;
    let za;
    let gui; //touchgui.js instance
    const DATA_DYPE = 'i';
    let BACKGROUND_COLOR = '#fffbe4';
    //let BACKGROUND_COLOR = '#ffffff';
    let backgroundTest = 0;
    let ram,registers,instructions;

    p5.preload = function(){
        p5.DataFont = p5.loadFont('./assets/TypoGraphica_demo.otf');
        p5.InstructionsFont = p5.loadFont('./assets/KGSecondChancesSolid.ttf');

    }

    p5.setup = function(){
        console.log(p5);
        p5.BACKGROUND_COLOR = BACKGROUND_COLOR
        canvas = p5.createCanvas(p5.windowWidth, 0.5*p5.windowWidth)
        console.log(canvas);
        p5.textFont(p5.DataFont);

        let siiiize = p5.width*0.2;


        executionUnit = new ExecutionUnit(
            p5,
            p5.width*0.015,
            p5.width*0.015,
            p5.width*0.2

        );
        /*ram =  new RAM(p5,p5.width*0.72 ,20,siiiize,2**8);
        registers = new Registers(p5,70,20,siiiize);
        instructions = new InstructionQueue(p5,p5.width/2 - siiiize*0.9, 20, siiiize );*/
        za = p5.createAudio('./assets/Za Warudo.mp3');
        executionUnit.display();
        //za.autoplay(true);
        //p5.noLoop();

    }
    let testCount = 0;
    let dir = 1;

    p5.draw = function() {

        executionUnit.cpuCycle();
        /*

        ram.display();
        instructions.display();
        registers.display();
        */
        //


        //drawGui();
        //ram.memorySlot(p5.mouseX, p5.mouseY,testCount, 0);

    };

      p5.mousePressed = function() {
        //console.log(p5.mouseX, p5.mouseY);
    };


    p5.mouseClicked = function() {
        //console.log(p5.mouseX, p5.mouseY);
        executionUnit.onClick(p5.mouseX, p5.mouseY);
    };

    p5.windowResized =function() {
        p5.resizeCanvas(p5.windowWidth, 0.5*p5.windowWidth);
    }

    p5.mouseWheel = function(event){
        executionUnit.scroll(p5.mouseX, p5.mouseY, event.delta);
    }
    p5.keyPressed = function(){

        if(p5.key === 'r'){
            p5.BACKGROUND_COLOR = p5.BACKGROUND_COLOR === '#fffbe4' ? '#1c1c34':'#fffbe4'
            executionUnit.display();

        }
    }

}
