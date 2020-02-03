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
        let animations =
            {
                'MOV': function(source, destination)
                {
                    let queue = [
                        () => { console.log({source,destination}); this.active = false}
                    ]
                    console.log(source);
                    console.log(destination);
                    //p5.text();
                    return queue;
                }
            };
        this.lastInstruction = () =>{};
        this.queue = [
             () => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.125, value: 15000, col: '#e99aff' , size : w/2} , 'byte')}
            ,() => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.225, value: 15000, col: '#e99aff' , size : w/2} , 'byte')}
            ,() => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.325, value: 15000, col: '#e99aff' , size : w/2} , 'byte')}
            ,() => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.425, value: 15000, col: '#e99aff' , size : w/2} , 'byte')}
            ,() => {this.byteDisplay( {x: x +w*0.25, y: y+h*0.525, value: 15000, col: '#e99aff' , size : w/2} , 'byte');this.active = false;},
            () => {this.byteDisplay( {x: x -w*0.125, y: y+h*0.125, value: 15000, col: '#e99aff' , size : w/2} , 'word')}
            ,() => {this.byteDisplay( {x: x -w*0.125, y: y+h*0.225, value: 15000, col: '#e99aff' , size : w/2} , 'word')}
            ,() => {this.byteDisplay( {x: x -w*0.125, y: y+h*0.325, value: 15000, col: '#e99aff' , size : w/2} , 'word')}
            ,() => {this.byteDisplay( {x: x -w*0.125, y: y+h*0.425, value: 15000, col: '#e99aff' , size : w/2} , 'word')}
            ,() => {this.byteDisplay( {x: x -w*0.125, y: y+h*0.525, value: 15000, col: '#e99aff' , size : w/2} , 'word');this.active = false;}
        ];
        let inst = animations['MOV'](
            { type: 'register', id: 'AX'

            }, {
                type: 'memory', index: 50


            }

        );
        this.queue = this.queue.concat(inst);
        this.active = false;
        this.button =
        {
            x : x + w/12, y: y + h*1.09,
            buttonDisplay : (l,x,y)=>{


                p5.fill(p5.BACKGROUND_COLOR);
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

        p5.fill(p5.BACKGROUND_COLOR);


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
            this.active = !this.active;
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
            p5.text(bin[i],x + bw*i ,y, bw/0.6, size*0.125);
        }
    }





}
