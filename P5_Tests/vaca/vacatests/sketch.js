
let gui //touchgui.js instance
const DATA_DYPE = 'i';

let DataFont;
let ram,registers;


function preload(){

	DataFont = loadFont('assets/TypoGraphica_demo.otf');

}







function setup() {
	createCanvas(windowWidth, windowHeight);
	//noCursor();
	ram =  new RAM(100,50,400,2**16);
    registers = new Registers(100,50,800);
	textSize(40);
	textFont(DataFont);
	ellipseMode(CORNER);


}

 let testCount = 500;
let dir = 1;
function draw() {
    background('#333333');


    //ram.display();
    registers.display()
    //drawGui();
    //ram.memorySlot(50, 880, testCount, 0);
    if (testCount >= 500) {
        dir = -1
    }
    if (testCount <= 300){
        dir = 1
    }
    testCount+=dir*2;


}


function  mousePressed() {
    //console.log(mouseX, mouseY)
}
function windowResized() {
    console.log("o")
	resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event){


	ram.scroll(mouseX, mouseY, event.delta);


}




