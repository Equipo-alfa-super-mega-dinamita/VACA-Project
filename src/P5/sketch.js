/* eslint-disable */
//import 'react-p5-wrapper/node_modules/p5/lib/addons/p5.sound';
import RAM from "./RAM";
import Registers from "./Registers";
import InstructionQueue from "./InstructionQueue";
export default function sketch(p5){

    let canvas = null
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
        ram =  new RAM(p5,p5.width*0.72 ,20,siiiize,2**16);
        registers = new Registers(p5,70,20,siiiize);
        instructions = new InstructionQueue(p5,p5.width/2 - siiiize*0.9, 20, siiiize );
        za = p5.createAudio('./assets/Za Warudo.mp3');
        za.autoplay(true);


    }
    let testCount = 0;
    let dir = 1;

    p5.draw = function() {

        p5.background(BACKGROUND_COLOR);

        ram.display();
        instructions.display();
        registers.display();


        //drawGui();
        //ram.memorySlot(p5.mouseX, p5.mouseY,testCount, 0);
        p5.text(
            p5.frameRate(),
            p5.mouseX,
            p5.mouseY

        );

    }

      p5.mousePressed = function() {
        console.log(p5.mouseX, p5.mouseY);
    }
    p5.windowResized =function() {
        p5.resizeCanvas(p5.windowWidth, 0.5*p5.windowWidth);
    }

    p5.mouseWheel = function(event){
        ram.scroll(p5.mouseX, p5.mouseY, event.delta);
        instructions.scroll(p5.mouseX, p5.mouseY, event.delta);
    }

}
