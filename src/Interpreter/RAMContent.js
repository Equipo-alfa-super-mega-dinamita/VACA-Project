const nitems = 8;
const toHex = (i, pad) => (i).toString(16).padStart(pad,'0')
const toBin = (i, pad) => (i).toString(2).padStart(pad,'0');
class RAM {

    constructor(x , y , size, array_size){

        this.x = x;
        this.y = y;
        this.size = size;
        this.gui = createGui();
        this.buffer = new ArrayBuffer(array_size);
        this.memory = new Array(array_size);
        this.memoryContent = new Uint8Array(this.buffer);
        let n = this.memory.length;
        for (let i = 0; i <  n; i++) {
            this.memory[i] = {
                address:   toHex(i,4),
                color: color('#111111')
            }
            this.memoryContent[i] = floor(random(2**8));
        }
        this.slider = createSliderV("RAM-Slider", x+ size + 2, y, 0.1*size, 2*size, 0, array_size - nitems*2)
        this.slider.isInteger = true
        this.slider.setStyle({
            rounding: 0,
            strokeWeight: 0,
            trackWidth: 0.5

        });


        //setInterval(()=>{    this.slider.val+=1}, 1000)
        console.log(this.memory)

    }



    display (){
        push();
        noStroke(0);colorMode(HSB,100); textSize(this.size/20);
        let start = floor(this.slider.val) ;
        start -= start%2;
        let h = 2*this.size / nitems;

        let max = nitems > this.memory.length - start ? (this.memory.length - start): nitems*2;

        for(let j = 0; j< max; j+=2){
            let index = start + (max - j - 2);
            //  H Register
            this.memorySlot(this.x, this.y + j*h/2 , this.size, index);
            //  L Register
            this.memorySlot(this.x + this.size/2, this.y + j*h/2, this.size, index + 1);

            push();stroke(0); strokeWeight(3); fill(255);

            text(this.memory[index].address,
                 this.x - this.size*0.15,
                this.y + j*h*0.5 + h*0.75,
                this.size*0.15,
                h*0.25); pop();
        }

        fill(0); stroke(0);
        text(this.slider.val, this.x + this.size*1.2 ,this.y + this.size/2);
        pop();
    }



    memorySlot(x,y,size, index){
        push();
        stroke('#07da63'); strokeWeight(2); fill(this.memory[index].color);

        let h = 2 * size / nitems;

        rect(x,
            y ,
            size/2,
            h);

        textAlign(CENTER, CENTER); textSize(size/22 );

        let bin = toBin(this.memoryContent[index], 8).split('');
        for (let i = 0; i < 8 ; i++) {
            stroke('#07da63');
            line(2 + x + i * (size-8) / 16,
                -2 + y + 0.95 * h,
                2 + x  + i * (size-8) / 16,
                -2 + y + h);

            fill( bin[i] === '0' ? '#ffaaaa' : '#8888ff'); stroke(0); strokeWeight(2);
            text(
                bin[i],
                x + i * (size) / 16,
                y + h*0.75,
                (size) / 16,
                0.25*h);

        }

        line(2 + x ,
            -2 + y + h,
            2 + x ,
            -2 + y + 0.9 * h);
        line(2 + x + 8 * (size-8) / 16,
            -2 + y + h,
            2 + x  + 8 * (size-8) / 16,
            -2 + y + 0.9 * h);

        push();textSize(size/18 ); fill('#07da63'); stroke(0); strokeWeight(2);
        text(
            this.memoryContent[index],
            x,
            y ,
            size/4,
            h*0.75
        );


        text(
            '0x' + toHex(this.memoryContent[index],2),
            x +size/4,
            y ,
            size/4,
            h*0.75
        );
        pop();
        pop();
    }


    scroll(x,y,delta){

        let d =-delta
        if(x > this.x && x < this.x + this.size && y > this.y && y < this.size*2 ){

            if(Math.sign(d) < 0 && this.slider.val <= 0) return;
            if(Math.sign(d) > 0 && this.slider.val + nitems*2>= this.memory.length - 1) return;
            this.slider.val += Math.sign(d)*nitems/2

        }

    }





}