const nitems = 10;
const toHex = (i, pad) => (i).toString(16).padStart(pad,'0')
const toBin = (i, pad) => (i).toString(2).padStart(pad,'0');
class RAM {

    constructor(x , y , size, array_size){

        this.x = x;
        this.y = y;
        this.size = size;
        this.inHex = true;
        this.gui = createGui();
        this.buffer = new ArrayBuffer(array_size);
        this.memory = new Array(array_size);
        this.memoryContent = new Uint8Array(this.buffer);
        let n = this.memory.length;
        for (let i = 0; i <  n; i++) {
            this.memory[i] = {
                address:  toHex(i,4),
                color: color('#111111')
            }
            this.memoryContent[i] = floor(random(2**8));
        }

        this.slider = createSliderV("RAM-Slider", x+ size + 2 + size*0.02, y, 0.1*size , 2.2*size , 2, array_size - nitems*2 + 2);
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

        });


        //setInterval(()=>{    this.slider.val+=1}, 1000)
        console.log(this.memory)
        console.log(this.memoryContent)

    }



    display (){
        push();
        noStroke(0);colorMode(HSB,100);

        let start = floor(this.slider.val) ;
        let h = 2*this.size / nitems;

        let max = nitems;

        for(let j = 0; j< max; j+=1){
            let index = start + 2*j;
            //  H Register
            //console.log({index});
            this.memorySlot(this.x, this.y + (max- j-1)*(h + this.size*0.02) , this.size, index-2);
            this.memorySlot(this.x + this.size/2 +this.size*0.02 , this.y + (max-j-1)*(h + this.size*0.02) , this.size, index -1);

            //  L Register

            push();stroke(0); strokeWeight(2); fill(255);textSize(this.size/25);

            //console.log(this.memory[index].address)
            pop();
        }
        fill(0); stroke(0);
        pop();
    }



    memorySlot(x,y,size, index){
        push();

        //fill(this.memory[index] !== undefined ? this.memory[index].color : '#ffffff');
        strokeWeight(size*0.01);
        let h = 2 * size / nitems;
        stroke('#007065');
        noFill();
        rect(x,
            y ,
            size/2,
            h);


        textAlign(CENTER, CENTER); textSize(size/20 );

        let bin = toBin(this.memoryContent[index], 8).split('');
        rectMode(CORNER);
        fill('#007065');
        rect(x,y, size*0.15, h*0.25);
        rect(
            x,y + h*0.7,
            size/2, 0.3*h
        );
        rect(
            x,y,
            size*0.5,
        h*0.05);

        rect(
            x,y,
            0.05*h, h
        );
        rect(
            x + size*0.5 ,y,
            -0.05*h, h
        );
        for (let i = 0; i < 8 ; i++) {
            stroke('#007065');
            line(2 + x + i * (size-8) / 16,
                -2 + y + 0.9 * h,
                2 + x  + i * (size-8) / 16,
                -2 + y + h);
            let back = color(BACKGROUND_COLOR);
            if( bin[i] === '0' ){
                back.setAlpha(55);
            }
            fill( back );
            noStroke();textSize(size*0.045);
            text(
                bin[i],
                x + i * (size) / 16,
                y + h*0.7,
                (size) / 16,
                0.3*h);
        }

        line(2 + x ,
            -2 + y + h,
            2 + x ,
            -2 + y + 0.9 * h);
        line(2 + x + 8 * (size-8) / 16,
            -2 + y + h,
            2 + x  + 8 * (size-8) / 16,
            -2 + y + 0.9 * h);

        textSize(size*0.04 ); fill(BACKGROUND_COLOR); noStroke();
        text(
            '0x' + this.memory[index].address,
            x,
            y ,
            size*0.16,
            h*0.25
        );
        textSize(size*0.08 );   fill('#58b368');

        text(
            this.inHex ? '0x' + toHex(this.memoryContent[index],2) : this.memoryContent[index],
            x ,
            y ,
            size*0.5,
            h*0.75
        );

        pop();
    }


    scroll(x,y,delta){


        let d =-delta
        if(x > this.x && x < this.x + this.size && y > this.y && y < this.size*2.2 ){

            let newval = floor(this.slider.val + Math.sign(d)*nitems);
            newval-= newval % 2;

            newval = newval < 0 ? 2: newval;
            newval = newval > this.memoryContent.length - 2 * (nitems-1) ? this.memoryContent.length - 2*(nitems-1): newval;
            this.slider.val = newval;


        }

    }





}