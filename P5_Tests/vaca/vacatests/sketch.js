
let gui; //touchgui.js instance
const DATA_DYPE = 'i';
let BACKGROUND_COLOR = '#1d1d3b';
//let BACKGROUND_COLOR = '#ffffff';
let backgroundTest = 0;
let DataFont;
let InstructionsFont;
let ram,registers,instructions;


function preload(){

	DataFont = loadFont('assets/TypoGraphica_demo.otf');
    InstructionsFont = loadFont('assets/KGSecondChancesSolid.ttf');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//noCursor();
    uxNoStroke();
    uxEllipseMode('center');
    let siiiize = width*0.2;
    ram =  new RAM(width*0.72 ,20,siiiize,2**16);
    registers = new Registers(70,20,siiiize);
	instructions = new InstructionQueue(width/2 - siiiize*0.9, 20, siiiize );

	textFont(DataFont);

    za = createAudio('assets/Za Warudo.mp3');
    za.volume(0.1);
    za.autoplay(true);
}

 let testCount = 0;
let dir = 1;
function draw() {
    background(BACKGROUND_COLOR);

    ram.display();
    instructions.display();

    registers.display();


    drawGui();
    //ram.memorySlot(mouseX, mouseY,testCount, 0);

    testCount+=dir*3;
    if (testCount >= 253) {
        dir = -1;
    }

    if (testCount <= 50){
        dir = 1;
    }

}

function  mousePressed() {
    console.log(mouseX, mouseY);
}
function windowResized() {
	resizeCanvas(windowWidth, 16/9 *windowWidth);
}

function mouseWheel(event){
	ram.scroll(mouseX, mouseY, event.delta);
    instructions.scroll(mouseX, mouseY, event.delta);
}




