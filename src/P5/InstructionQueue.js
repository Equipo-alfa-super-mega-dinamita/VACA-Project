let p5;
export default  class InstructionQueue{


    constructor(p5Parent, x,y,size) {

        p5 = p5Parent;
        this.opcodes =
            {
                'MOV': {
                    col : p5.color('#ba3935')
                },
                'JMP': {
                    col : p5.color('#f1b147')
                },
                'CALL': {
                    col : p5.color('#74ca5e')
                },
                'SUB':  {
                    col : p5.color('#649bc6')
                }



            }
        this.x = x;
        this.y = y;
        this.size = size*1.5;

        this.paused = false;
        /*this.playButton = {
            ux: uxEllipse(x + this.size*0.1 , y + this.size*0.25, this.size*0.115, this.size*0.115),
            hover: false
        }

        this.playButton.ux.uxFill = p5.color(BACKGROUND_COLOR);
        this.playButton.ux.uxEvent( 'hover', () => {this.playButton.hover = true});
        */

        this.inHex = true;
        this.ip = 0;
        this.instructions =
            [
                {
                    address: '0x04001',
                    offset: 1,
                    op: 'MOV',
                    operands: ['AX', 'BX']
                },
                {
                    address: '0x04003',
                    offset: 3,
                    op: 'CALL',
                    operands: ['RIP[0x23]', '100', '100', '100', '100', '100', '100']
                },
                {
                    address: '0x0400f',
                    offset: 15,
                    op: 'JMP',
                    operands: ['LABEL_A']
                },
                {
                    address: '0x0401a',
                    offset: 26,
                    op: 'SUB',
                    operands: ['AX' , '100']
                }
            ];

    }

    display() {
        p5.push();
        //this.x = mouseX; this.y = mouseY;

        p5.textAlign(p5.LEFT, p5.CENTER);
        p5.textSize(this.size*0.07 );
        p5.noStroke();
        // Arriba - Anterior

        let up = this.ip - 1;
        p5.fill('#B45EFF');
        p5.rect(this.x,this.y,this.size*0.2 ,this.size * 0.14,
            this.size*0.07,0,0,0
        );
        p5.rect(this.x + this.size*0.07 ,this.y,this.size - this.size*0.07 + this.size*0.215, this.size*0.14*0.1);
        p5.rect(this.x,this.y + this.size*0.14*0.9,this.size + this.size*0.215, this.size*0.14*0.1);
        p5.rect(this.x + this.size * 0.985 + this.size*0.215 ,this.y,this.size*0.14*0.1, this.size*0.14);

        if(up>=0){

            p5.push();
            p5.textSize(this.size*0.03 );
            p5.noStroke(); p5.fill(p5.BACKGROUND_COLOR);
            p5.textAlign(p5.CENTER,p5.CENTER);


            p5.text(this.instructions[up].address,
                this.x,
                this.y + this.size*0.02 ,
                this.size*0.2,
                this.size*0.05);

            p5.textFont(p5.InstructionsFont);

            p5.textSize(this.size*0.04 );
            p5.text('<+' + this.instructions[up].offset + '>',
                this.x ,
                this.y + this.size*0.06,
                this.size*0.2,
                this.size*0.05);

            this.opDisplay(this.x + this.size * 0.2,
                this.y + this.size*0.14*0.1,
                this.size,
                this.size*0.14*0.8,
                this.instructions[up]);

            p5.pop();
        }
        // Mitad - Actual

        p5.fill('#9012FF');
        p5.rect(this.x ,this.y + this.size*0.14,
            this.size * 0.2 ,this.size*0.22 );

        p5.rect(this.x  ,this.y + this.size*0.14,this.size + this.size*0.215, this.size*0.22*0.1);
        p5.rect(this.x  ,this.y + this.size*0.22*0.9 + this.size*0.14, this.size + this.size*0.215, this.size*0.22*0.1);
        p5.rect(this.x + this.size * 0.985   + this.size*0.215,this.y + this.size*0.14,this.size*0.14*0.1, this.size*0.22);


        if(this.ip>=0 ){
            p5.push();
            p5.fill(p5.BACKGROUND_COLOR);
            p5.textAlign(p5.CENTER, p5.CENTER);
            p5.textSize(this.size*0.04 );
            p5.text(this.instructions[this.ip].address,
                this.x ,
                this.y + this.size*0.19,
                this.size*0.2,
                this.size*0.05);


            p5.textFont(p5.InstructionsFont);
            p5.textSize(this.size*0.045 );
            p5.text('<+' + this.instructions[this.ip].offset + '>',
                this.x ,
                this.y + this.size*0.25,
                this.size*0.2,
                this.size*0.05);
            p5.pop();
            //this.playButton.ux.uxRender();
            //this.displayButtons(this.playButton);




            this.opDisplay(this.x + this.size * 0.2,
                this.y + this.size* 0.16,
                this.size,
                this.size*0.22*0.8,
                this.instructions[this.ip]);



        }

        // Abajo - Posterior

        p5.fill('#B45EFF');
        p5.rect(this.x,
            this.y + this.size*0.36,
            this.size*0.2,
            this.size*0.14,0,0,0,this.size*0.07);

        let down = this.ip+1;
        if(down>=0 && down < this.instructions.length ){

            p5.fill(p5.BACKGROUND_COLOR);
            p5.textAlign(p5.CENTER, p5.CENTER);
            p5.textSize(this.size*0.03 );
            p5.text(this.instructions[down].address,
                this.x ,
                this.y + this.size*0.38,
                this.size*0.2,
                this.size*0.05);


            p5.textFont(p5.InstructionsFont);
            p5.textSize(this.size*0.04 );
            p5.text('<+' + this.instructions[down].offset + '>',
                this.x ,
                this.y + this.size*0.42,
                this.size*0.2,
                this.size*0.05);

            this.opDisplay(this.x + this.size * 0.2,
                this.y + this.size* 0.374,
                this.size,
                this.size*0.14*0.8,
                this.instructions[down]);


        }
        //fill(BACKGROUND_COLOR); textSize(this.size*0.07);
        p5.fill('#B45EFF')
        p5.rect(this.x  ,this.y +this.size*0.36,this.size+ this.size*0.215, this.size*0.14*0.1);
        p5.rect(this.x + this.size*0.07 ,this.y + this.size*0.14*0.9 +this.size*0.36,this.size - this.size*0.07 + this.size*0.215, this.size*0.14*0.1);
        p5.rect(this.x + this.size * 0.985 + this.size*0.215,this.y +this.size*0.36,this.size*0.14*0.1 , this.size*0.14);

        p5.rect(
          this.x + this.size*0.985 + this.size*0.215, this.y, 0.14*this.size,this.size*0.5,
            0, 0.14*this.size, 0.14*this.size,0);
        p5.fill('#9012FF');
        p5.rect(
            this.x + this.size*0.985 + this.size*0.215, this.y + 0.14*this.size,
            0.14*this.size,this.size*0.22
        );


        p5.pop();
    }

    opDisplay(x,y,w,h,{address, op, operands}){
        p5.push();

        p5.textFont(p5.InstructionsFont);
        p5.textSize(h*0.3 );
        p5.noStroke();

        p5.fill(this.opcodes[op] ? this.opcodes[op].col : '#454545' );
        p5.textSize(h*0.4);
        p5.textAlign(p5.LEFT,p5.CENTER);


        p5.text(op,
            x + w* 0.025, y , w * 0.275, h);


        let bounds = p5.textFont().textBounds(op, 0,0);
        let cux = x + w * 0.2725;

        for( let i = 0; i< operands.length; i++) {
            p5.fill(51);

            bounds = p5.textFont().textBounds(operands[i], 0, 0);
            //rect(x + cux , y , bounds.w + w*0.05 , h*);
            p5.text(operands[i],
                cux , y , bounds.w + 1, h * 1.5);

            p5.stroke(0);
            cux += bounds.w;

            if(i < operands.length -1 ){

                let next = p5.textFont().textBounds(operands[i + 1], 0, 0)
                if(cux + w*0.05 +  next.w > x + w){
                    break;
                }
                else
                {
                    p5.fill(this.opcodes[op] ? this.opcodes[op].col : '#454545' ); p5.noStroke();
                    p5.text(',',
                        cux + w*0.0125 , y , p5.textFont().textBounds(',', 0, 0).w, h * 1.5)
                }
            }

            cux+= w*0.05
            p5.noStroke();


            //if(cux > x + w) break;
        }
        p5.pop();
    }
    scroll(x,y,delta){
        let d =delta
        if(x > this.x && x < this.x + this.size*1.215 && y > this.y && y < this.size*0.5 ){
            let newval = this.ip + Math.sign(d);
            newval = newval < 0 ? 0: newval;
            newval = newval > this.instructions.length - 1 ? this.instructions.length - 1 : newval;
            this.ip = newval;
        }
    }


}
