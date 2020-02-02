const nitems = 10;
const toHex = (i, pad) => (i).toString(16).padStart(pad,'0')
const toBin = (i, pad) => (i).toString(2).padStart(pad,'0');
let p5;
export default class RAM{

    constructor(parentP5, x , y , size, array_size, cpu){
        p5 = parentP5;
        this.cpu = cpu;
        console.log(cpu)
        this.x = x;
        this.y = y;
        this.size = size;
        this.inHex = true;
        this.slider = {
            val : 2,
            x : x + size*1.05,
            y : y,
            w : size*0.05,
            h : size*2.185

        }
        //this.slider = createSliderV("RAM-Slider",
        // x+ size + 2 + size*0.02,
        // y, 0.1*size ,
        // 2.2*size ,
        // 2, array_size - nitems*2 + 2);
        /*
        SLIDER - TOUCHGUI LIBRARY

        this.slider.isInteger = true
        this.slider.setStyle({
            rounding: 0,
            strokeWeight: 0,
            trackWidth: 0.1,

            fillBg: color('rgba(255,255,255,0)'),
            fillBgActive: color('rgba(255,255,255,0)'),
            fillBgHover: color('rgba(255,255,255,0)'),

            fillHandle: color('#58b368'),
            fillTrack: color('#275108'),

            fillHandleHover: color('#b3ff49'),
            fillTrackHover: color('#3f6038'),

            fillTrackActive: color('#aaaaaa'),
            fillHandleActive: color('#e7e7e7')

        });*/


        //setInterval(()=>{    this.slider.val+=1}, 1000)
        console.log(this.cpu.memory);
        console.log(this.cpu.memoryContent);

    }

    display (){
        p5.push();
        p5.noStroke(0); p5.colorMode(p5.HSB,100);

        let start = p5.floor(this.slider.val) ;
        let h = 2*this.size / nitems;

        let max = nitems;

        for(let j = 0; j< max; j+=1){
            let index = start + 2*j;
            //  H Register
            //console.log({index});
            this.memorySlot(this.x, this.y + (max- j-1)*(h + this.size*0.02) , this.size, index-2);
            this.memorySlot(this.x + this.size/2 +this.size*0.02 , this.y + (max-j-1)*(h + this.size*0.02) , this.size, index -1);

            //  L Register
            p5.push(); p5.stroke(0); p5.strokeWeight(2); p5.fill(255); p5.textSize(this.size/25);

            //console.log(this.cpu.memory[index].address)
            p5.pop();
        }
        p5.fill(0); p5.stroke(0);
        p5.pop();
        this.displayScrollbar();
    }

    memorySlot(x,y,size, index){
        p5.push();

        //fill(this.cpu.memory[index] !== undefined ? this.cpu.memory[index].color : '#ffffff');
        p5.strokeWeight(size*0.01);
        let h = 2 * size / nitems;
        p5.stroke('#007065');
        p5.noFill();
        p5.rect(x,
            y ,
            size/2,
            h);


        p5.textAlign(p5.CENTER, p5.CENTER); p5.textSize(size/20 );

        let bin = toBin(this.cpu.memoryContent[index], 8).split('');
        p5.rectMode(p5.CORNER);
        p5.fill('#007065');
        p5.rect(x,y, size*0.15, h*0.25);
        p5.rect(
            x,y + h*0.7,
            size/2, 0.3*h
        );
        p5.rect(
            x,y,
            size*0.5,
            h*0.05);

        p5.rect(
            x,y,
            0.05*h, h
        );
        p5.rect(
            x + size*0.5 ,y,
            -0.05*h, h
        );
        for (let i = 0; i < 8 ; i++) {
            p5.stroke('#007065');
            p5.line(2 + x + i * (size-8) / 16,
                -2 + y + 0.9 * h,
                2 + x  + i * (size-8) / 16,
                -2 + y + h);
            let back = p5.color(p5.BACKGROUND_COLOR);
            if( bin[i] === '0' ){
                back.setAlpha(55);
            }
            p5.fill( back );
            p5.noStroke(); p5.textSize(size*0.045);
            p5.text(
                bin[i],
                x + i * (size) / 16,
                y + h*0.7,
                (size) / 16,
                0.3*h);
        }

        p5.line(2 + x ,
            -2 + y + h,
            2 + x ,
            -2 + y + 0.9 * h);
        p5.line(2 + x + 8 * (size-8) / 16,
            -2 + y + h,
            2 + x  + 8 * (size-8) / 16,
            -2 + y + 0.9 * h);

        p5.textSize(size*0.04 ); p5.fill(p5.BACKGROUND_COLOR); p5.noStroke();
        p5.text(
            '0x' + this.cpu.memory[index].address,
            x,
            y ,
            size*0.16,
            h*0.25
        );
        p5.textSize(size*0.08 );   p5.fill('#58b368');

        p5.text(
            this.inHex ? '0x' + toHex(this.cpu.memoryContent[index],2) : this.cpu.memoryContent[index],
            x ,
            y ,
            size*0.5,
            h*0.75
        );

        p5.pop();
    }

    scroll(x,y,delta){

        let d =-delta
        if(x > this.x && x < this.x + this.size && y > this.y && y < this.size*2.2 ){

            let newval = p5.floor(this.slider.val + Math.sign(d)*nitems);
            newval-= newval % 2;

            newval = newval < 0 ? 2: newval;
            newval = newval > this.cpu.memoryContent.length - 2 * (nitems-1) ? this.cpu.memoryContent.length - 2*(nitems-1): newval;
            this.slider.val = newval;


        }
    }
    displayScrollbar(){

        let {x,y,w,h,val} = this.slider;

        p5.push();
        p5.noStroke();
        p5.fill('rgba(124,124,124,0.11)')
        p5.rect(
            x,
            y ,
            w,
            h
        );

        let scrollY = p5.map(val ,
            this.cpu.memoryContent.length - nitems*2 + 2, 2,
            y,
            y + h
            );
        p5.fill('rgba(255,170,102,0.91)');
        p5.triangle(x- w*0.5, scrollY,
            x + w, scrollY + 0.6*w, x + w, scrollY - 0.6*w);


        p5.push();
    }

    onClick(ex,ey){

        let {x,y,w,h,val} = this.slider;
        if( ex > x && ex < x + w && ey > y && ey < y + h){

            this.slider.val = p5.map(
                ey,
                y,
                y + h,
                this.cpu.memoryContent.length - nitems*2 + 2 ,2
            );

        }
    }
}
