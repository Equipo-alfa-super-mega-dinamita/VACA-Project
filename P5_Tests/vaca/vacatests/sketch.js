
let gui //touchgui.js instance
const DATA_DYPE = 'i';
let BACKGROUND_COLOR = '#ffffff'
let DataFont;
let ram,registers;


function preload(){

	DataFont = loadFont('assets/TypoGraphica_demo.otf');


}







function setup() {
	createCanvas(windowWidth, windowHeight);
	//noCursor();
    let siiiize = width*0.2
	ram =  new RAM(width*0.7 ,80,siiiize,2**20);
    registers = new Registers(100,80,siiiize);
	textSize(40);
	textFont(DataFont);
	ellipseMode(CORNER);
    za = createAudio('assets/Za Warudo.mp3');
    //za.autoplay(true);
    strokeWeight(2);

}

 let testCount = 500;
let dir = 1;
function draw() {
    background(BACKGROUND_COLOR);


    ram.display();
    registers.display()

    drawGui();
    ram.memorySlot(mouseX, mouseY,testCount, 0);
    if (testCount >= 800) {
        dir = -1
    }
    if (testCount <= 600){
        dir = 1
    }
    testCount+=dir*2;



}


function  mousePressed() {
    console.log(mouseX, mouseY)
}
function windowResized() {
	resizeCanvas(windowWidth, 16/9 *windowWidth);
}

function mouseWheel(event){


	ram.scroll(mouseX, mouseY, event.delta);


}




