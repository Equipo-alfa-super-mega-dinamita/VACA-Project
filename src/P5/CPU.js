let p5,x,y,w,h,eu;
const toBin = (i, pad) => (i).toString(2).padStart(pad,'0');

export default class CPU{



    constructor(p5Parent, nx,ny,nw,nh, neu){
        p5 = p5Parent;
        x = nx;
        y = ny;
        w = nw;
        h = nh;
        eu = neu;

        this.lastInstruction = () =>{};
        this.queue = [
            () => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.125, value: 15000, col: '#e99aff' , size : w/2} , 'byte')}
            ,() => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.225, value: 15000, col: '#e99aff' , size : w/2} , 'byte')}
            ,() => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.325, value: 15000, col: '#e99aff' , size : w/2} , 'byte')}
            ,() => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.425, value: 15000, col: '#e99aff' , size : w/2} , 'byte')}
            ,() => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.525, value: 15000, col: '#e99aff' , size : w/2} , 'byte');this.active = false;},
        ];
        let inst = this.instructionAnimation('SUB',
            {
                a: 9, b: 50,
                    destination:{ type: 'register', id: 'AX'},
                    source:{type: 'number', value: 5}
                }
        );
        let inst2 = this.instructionAnimation('MOV',
            {
                a: 9, b: 50,
                destination:{ type: 'register', id: 'BX'},
                source:{type: 'memory', index: 5}
            }
        );
        this.queue = this.queue.concat(inst).concat(inst2);
        this.active = false;
        this.button =
        {
            x : x + w/12, y: y + h*1.09,
            buttonDisplay : (l,x,y)=>{


                p5.fill('#2B2B2B');
                p5.ellipse(x, y, l*1.75,l*1.75);

                p5.fill(!this.active ? '#fcc169' : '#ff9979');

                p5.triangle(
                    x - l*0.5 , y - l*0.6,
                    x - l*0.5 , y + l*0.6,
                    x + l*0.5,  y
                );
                p5.rect(
                    x + l*0.25 , y - l*0.5,
                    l*0.3, l*1
                );


            }
        }
    }


    display(){


        p5.fill('rgb(43,43,43)');
        p5.rect(x,y,w,h*1.18);
        this.actionbarDisplay();
        if(!this.active)this.lastInstruction();
        //this.byteDisplay( {x: p5.mouseX, y: p5.mouseY, value: 15000, col: '#e99aff' , size : w/2} , 'byte');

    }
    actionbarDisplay(){
        p5.push();
        p5.fill('#fdd365');
        p5.rect(x,y + h,w,h*0.18);


            //p5.ellipse(this.buttons[i].x, this.buttons[i].y, h*0.135, h*0.135);
            //p5.rect(this.buttons[i].x, this.buttons[i].y);
        this.button.buttonDisplay(h * 0.0875, this.button.x, this.button.y);


        p5.pop();
    }


    cpuCycle(){
        //this.lastInstruction();
        this.button.buttonDisplay(h * 0.0875, this.button.x, this.button.y);
        if(this.active){
            this.display();
            if(this.queue.length > 0){
                let f = this.queue.shift();
                f();
                this.queue.push(f);
                this.lastInstruction = f;
            }
        }
    }
    onClick(ex,ey){

        let bx = this.button.x;
        let by = this.button.y;
        let r = h * 0.0875;
        if( (ex - bx)**2 + (ey - by)**2 < (r)*(r)){
            if(!this.active) this.active = true;
        }
        this.display();
    }

    byteDisplay({x,y,col,value, size}, type){
        let c = p5.color(col);
        let pad = 1;
        if (type === 'byte'){
            pad = 8
        }
        else if (type === 'word'){
            pad = 16
        }

        p5.textSize(size*0.6/pad);
        p5.textAlign(p5.CENTER);
        //p5.rect(x,y, size, size*0.125);
        let bin = toBin(value, pad);
        let bw = size / bin.length;
        for (let i = 0; i< bin.length; i++){
//          p5.rect(x + bw*i ,y, bw, size*0.125);
            if(bin[i] === '0'){
                c.setAlpha(45);
            }else c.setAlpha(100);
            p5.fill(c);
            p5.text(bin[i],x + bw*i ,y, bw, size*0.125);
        }
    }


    instructionAnimation(opcode, data) {
        let queue = [];
        let opfunc;
        let a,b;
        switch(opcode.toUpperCase()){

            case('MOV'):
                let {source, destination} = data;
                console.log({source, destination});
                let sourceData, destinationData;
                let sourceDisplay = () => {}
                let destinationDisplay = () => {}
                let sourceContent;
                switch (source.type) {
                    case "register":

                        sourceData = {...eu.registersComponent.registers[source.id],x:x + w*0.5,y:y + h*0.1};
                        sourceContent = eu.registersComponent.registers[source.id].content;
                        sourceDisplay = this.registerDisplay;
                        break;
                    case "memory":
                        sourceData = {index: source.index,x:x + w*0.5,y:y + h*0.1};
                        sourceDisplay = this.memoryDisplay;
                        sourceContent = eu.memoryContent[source.index];
                        break;
                    case "number":
                        sourceData = {value: source.value, x:x + w*0.5, y:y + h*0.1};
                        sourceDisplay = this.rawDisplay;
                        sourceContent = source.value;
                        break;
                }
                switch (destination.type) {
                    case "register":

                        destinationData = {...eu.registersComponent.registers[destination.id],x:x + w*0.5,y:y + h*0.7};
                        destinationDisplay = this.registerDisplay;
                        break;
                    case "memory":
                        destinationData = {index:destination.index,x:x + w*0.5,y:y + h*0.7};
                        destinationDisplay = this.memoryDisplay;
                        break;

                    case "number":
                        destinationData = {value: source.value, x:x + w*0.5,y:y + h*0.7};
                        destinationDisplay = this.rawDisplay;

                        break;
                }


                for(let i = 0; i< 20;i++){
                            queue.push(
                            ()=>{


                                if(sourceData) sourceDisplay(sourceData
                                    //{...eu.registersComponent.registers[source.id],x:x + w*0.5,y:y + h*0.1}
                                    );
                                if(destinationData) destinationDisplay(destinationData
                                    //{...eu.registersComponent.registers['DX'],x:x + w*0.5,y:y + h*0.7}
                                    );
                                this.byteDisplay({x: x + w*0.2,y: y + w*0.15 + i*h*0.6/20, col: '#ffffff', value:sourceContent, size: w*0.6 }, 'word');
                                if( i === 19)  this.active = false;
                            });
                        }
                break;


            case('INC'):
                a = data.a;
                for(let i = 0; i< 20;i++){
                    queue.push(
                        ()=>{this.ALUDisplay(a,1, opcode, (a,b) => a + b ,i);
                            if( i === 19)  this.active = false;});
                }
                break;
            case('DEC'):
                a = data.a;
                for(let i = 0; i< 20;i++){
                    queue.push(
                        ()=>{this.ALUDisplay(a,1, opcode, (a,b) => a - b ,i);
                            if( i === 19)  this.active = false;});
                }
                break;
            case('ADD'):
                a = data.a;
                b = data.b;
                for(let i = 0; i< 20;i++){
                    queue.push(
                        ()=>{this.ALUDisplay(a,b, opcode, (a,b) => a + b ,i);
                            if( i === 19)  this.active = false;});
                }
                break;
            case('SUB'):
                a = data.a;
                b = data.b;
                for(let i = 0; i< 20;i++){
                    queue.push(
                        ()=>{this.ALUDisplay(a,b, opcode, (a,b) => a - b ,i);
                            if( i === 19)  this.active = false;});
                }
                break;
            case('DIV'):
                a = data.a;
                b = data.b;
                for(let i = 0; i< 20;i++){
                    queue.push(
                        ()=>{this.ALUDisplay(a,b, opcode, (a,b) => a / b ,i);
                            if( i === 19)  this.active = false;});
                }
                break;
            case('MUL'):
                for(let i = 0; i< 20;i++){
                    queue.push(
                        ()=>{this.ALUDisplay(a,b, opcode, (a,b) => a * b ,i);
                            if( i === 19)  this.active = false;});
                }
                break;
            case('IDIV'):
                for(let i = 0; i< 20;i++){
                    queue.push(
                        ()=>{this.ALUDisplay(a,b, opcode, (a,b) => Math.floor(a / b),i);
                            if( i === 19)  this.active = false;});
                }
                break;
            case('IMUL'):
                for(let i = 0; i< 20;i++){
                    queue.push(
                        ()=>{this.ALUDisplay(a,b, opcode, (a,b) => Math.floor(a * b),i);
                            if( i === 19)  this.active = false;});
                }
                break;


            case('JMP'):

                break;

            case('LOOP'):

                break;

            default: break;
        }
        console.log(queue);
        return queue;
    }

    genericDisplay(opcode){



    }
    ALUDisplay(a,b, opcode, opfunc, i){

        p5.push();
        p5.textAlign(p5.CENTER, p5.TOP);
        p5.fill('#447dbe');
        p5.textSize(w*0.045);


        p5.text('0x' + opfunc(a,b).toString(16).padStart(2,'0'),
            x + w*0.4,
            y + h*0.55 + i*h*(0.30/20) ,// + (0-20  ,
            w*0.2,
            h*0.5);

        p5.beginShape();
        p5.fill(
            'rgb(255,184,57)'
        );
        p5.noStroke();
        p5.vertex(x + w*0.15, y + h*0.2);
        p5.vertex(x + w*0.35, y + h*0.2);
        p5.vertex(x + w*0.5, y + h*0.55);
        p5.vertex(x + w*0.65, y + h*0.2);
        p5.vertex(x + w*0.85, y + h*0.2);
        p5.vertex(x + w*0.6, y + h*0.8);
        p5.vertex(x + w*0.4, y + h*0.8);
        p5.endShape(p5.CLOSE);
        p5.fill('#2B2B2B');
        console.log(w);
        p5.textSize(w*0.085);
        p5.textAlign(p5.CENTER, p5.TOP);
        p5.text('ALU',
            x + w*0.25,
            y + h*0.55,
            w*0.5,
            h*0.5);
        p5.fill('#be7957');
        p5.textSize(w*0.065);
        p5.textAlign(p5.LEFT, p5.TOP);
        p5.text(opcode,
            x + w*0.15,
            y + h*0.55,
            w*0.5,
            h*0.5);
        p5.textAlign(p5.CENTER, p5.TOP);
        p5.fill('#92be05');
        p5.textSize(w*0.045);
        p5.text('0x' + a.toString(16).padStart(2,'0'),
            x + w*0.15,
            y + h*0.05,
            w*0.2,
            h*0.5);
        p5.fill('#be2f30');
        p5.text('0x' + b.toString(16).padStart(2,'0'),
            x + w*0.65,
            y + h*0.05,
            w*0.2,
            h*0.5);

        p5.pop();

    }
    registerDisplay({x,y,col,id,content}){
        p5.push();
        p5.strokeWeight(w*0.0075);
        p5.stroke(col);
        p5.noFill();
        p5.rect(x- w*0.3,y,w*0.6, w*0.125,
            w*0.0625,w*0.0625,w*0.0325,w*0.0325);
        p5.fill(col);
        p5.noStroke();
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(w*0.05);
        p5.text( id , x- w*0.3,y,w*0.15, w*0.075);
        p5.pop();
    }

    memoryDisplay({x,y,index}){
        p5.push();
        p5.strokeWeight(w*0.0075);
        p5.stroke('#007065');
        p5.noFill();
        p5.rect(x- w*0.3,y,w*0.6, w*0.125,
            w*0.0625,w*0.0625,w*0.0325,w*0.0325

        );
        p5.fill('rgba(255,170,102,0.91)');
        p5.noStroke();
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(w*0.025);

        let address = '0x' + index.toString(16).padStart(5,'0');
        p5.text( address , x- w*0.3,y,w*0.15, w*0.075);
        p5.pop();
    }

    rawDisplay({x,y,value}){
        p5.push();
        p5.strokeWeight(w*0.00375);
        p5.stroke('rgba(255,255,255,0.3)');
        p5.noFill();
        p5.rect(x- w*0.3,y,w*0.6, w*0.125,
            w*0.0625,w*0.0625,w*0.0325,w*0.0325);
        p5.fill('rgba(255,255,255,0.3)');
        p5.noStroke();
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(w*0.035);

        p5.text( 'raw_data: ' + value , x- w*0.2,y,w*0.25, w*0.075);
        p5.pop();
    }
}
