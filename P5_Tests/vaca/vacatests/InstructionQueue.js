
class InstructionQueue
{

    constructor(x,y,size) {


        this.opcodes =
            {
                'MOV': {
                    col : color('#ba3935')
                },
                'JMP': {
                    col : color('#f1b147')
                },
                'CALL': {
                    col : color('#74ca5e')
                },
                'SUB':  {
                    col : color('#649bc6')
                }



            }
        this.x = x;
        this.y = y;
        this.size = size*1.8;

        this.paused = false;
        this.playButton = {
            ux: uxEllipse(x + this.size*0.1 , y + this.size*0.25, this.size*0.115, this.size*0.115),
            hover: false
        }

        this.playButton.ux.uxFill = color(BACKGROUND_COLOR);
        this.playButton.ux.uxEvent( 'hover', () => {this.playButton.hover = true});


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
        push();
        //this.x = mouseX; this.y = mouseY;

        textAlign(LEFT, CENTER);textSize(this.size*0.07 );
        noStroke();
        // Arriba - Anterior

        let up = this.ip - 1;
        fill('#B45EFF');
        rect(this.x,this.y,this.size*0.2,this.size * 0.14);
        rect(this.x,this.y,this.size, this.size*0.14*0.1);
        rect(this.x  ,this.y + this.size*0.14*0.9,this.size, this.size*0.14*0.1);
        rect(this.x + this.size * 0.985 ,this.y,this.size*0.14*0.1, this.size*0.14);


        if(up>=0){

            push();
            textSize(this.size*0.03 );noStroke();fill(BACKGROUND_COLOR);
            textAlign(CENTER,CENTER);


            text(this.instructions[up].address,
                this.x,
                this.y + this.size*0.02 ,
                this.size*0.2,
                this.size*0.05);

            textFont(InstructionsFont);

            textSize(this.size*0.04 );
            text('<+' + this.instructions[up].offset + '>',
                this.x ,
                this.y + this.size*0.06,
                this.size*0.2,
                this.size*0.05);

            this.opDisplay(this.x + this.size * 0.2,
                this.y + this.size*0.14*0.1,
                this.size*0.785,
                this.size*0.14*0.8,
                this.instructions[up]);

            pop();
        }
      // Mitad - Actual

        fill('#9012FF');
        rect(this.x,this.y + this.size*0.14,
            this.size * 0.2,this.size*0.22);

        rect(this.x  ,this.y + this.size*0.14,this.size, this.size*0.22*0.1);
        rect(this.x  ,this.y + this.size*0.22*0.9 + this.size*0.14, this.size, this.size*0.22*0.1);
        rect(this.x + this.size * 0.985  ,this.y + this.size*0.14,this.size*0.14*0.1, this.size*0.22);


        if(this.ip>=0 ){
            push();
            fill(BACKGROUND_COLOR);textAlign(CENTER, CENTER);textSize(this.size*0.04 );
            text(this.instructions[this.ip].address,
                this.x ,
                this.y + this.size*0.14,
                this.size*0.2,
                this.size*0.05);


            textFont(InstructionsFont);
            textSize(this.size*0.045 );
            text('<+' + this.instructions[this.ip].offset + '>',
                this.x ,
                this.y + this.size*0.3,
                this.size*0.2,
                this.size*0.05);
                pop();
            this.playButton.ux.uxRender();

            this.displayButtons(this.playButton);




            this.opDisplay(this.x + this.size * 0.2,
                this.y + this.size* 0.16,
                this.size*0.785,
                this.size*0.22*0.8,
                this.instructions[this.ip]);



        }

        // Abajo - Posterior

        fill('#B45EFF');
        rect(this.x,this.y + this.size*0.36,this.size*0.2 ,this.size*0.14);

        let down = this.ip+1;
        if(down>=0 && down < this.instructions.length ){

            fill(BACKGROUND_COLOR);textAlign(CENTER, CENTER);textSize(this.size*0.03 );
            text(this.instructions[down].address,
                this.x ,
                this.y + this.size*0.38,
                this.size*0.2,
                this.size*0.05);


            textFont(InstructionsFont);
            textSize(this.size*0.04 );
            text('<+' + this.instructions[down].offset + '>',
                this.x ,
                this.y + this.size*0.42,
                this.size*0.2,
                this.size*0.05);

            this.opDisplay(this.x + this.size * 0.2,
                    this.y + this.size* 0.374,
                this.size*0.785,
                this.size*0.14*0.8,
                this.instructions[down]);


        }
        //fill(BACKGROUND_COLOR); textSize(this.size*0.07);
        fill('#B45EFF')
        rect(this.x,this.y +this.size*0.36,this.size, this.size*0.14*0.1);
        rect(this.x,this.y + this.size*0.14*0.9 +this.size*0.36,this.size, this.size*0.14*0.1);
        rect(this.x + this.size * 0.985,this.y +this.size*0.36,this.size*0.14*0.1, this.size*0.14);


        pop();
    }

    displayButtons(playButton){
        let {ux, hover} = playButton;
        let {x,y,w,h} = ux;

        push();

            fill(hover ? color('#ff3591') : color('#c230ff'))
            //ellipse(x,y,w*0.2, h*0.2);
        triangle(x - w*0.2, y-h*0.3,
            x - w*0.2, y+h*0.3,
            x + w*0.3, y
            );

        pop();
        playButton.hover = false;
    }
    opDisplay(x,y,w,h,{address, op, operands}){
        push();

        textFont(InstructionsFont);
        textSize(h*0.3 );
        noStroke();

        fill(this.opcodes[op] ? this.opcodes[op].col : '#454545' );
        textSize(h*0.4);
        textAlign(LEFT,CENTER);


        text(op,
            x + w* 0.025, y , w * 0.275, h);

        let bounds = textFont().textBounds(op, 0,0);
        let cux = x + w * 0.2725;

        for( let i = 0; i< operands.length; i++) {
            fill(51);
            bounds = textFont().textBounds(operands[i], 0, 0);
            //rect(x + cux , y , bounds.w + w*0.05 , h*);
            text(operands[i],
                cux , y , bounds.w + 1, h * 1.5);

            stroke(0);
            cux += bounds.w;

            if(i < operands.length -1 ){
                let next = textFont().textBounds(operands[i + 1], 0, 0)
                if(cux + w*0.05 +  next.w > x + w){
                    break;
                }
                else
                {
                    fill(this.opcodes[op] ? this.opcodes[op].col : '#454545' ); noStroke();
                    text(',',
                        cux + w*0.0125 , y , textFont().textBounds(',', 0, 0).w, h * 1.5)
                }
            }

            cux+= w*0.05
            noStroke();


            //if(cux > x + w) break;
        }
        pop();
    }

    scroll(x,y,delta){
        let d =delta
        if(x > this.x && x < this.x + this.size && y > this.y && y < this.size*0.5 ){
            let newval = this.ip + Math.sign(d);
            newval = newval < 0 ? 0: newval;
            newval = newval > this.instructions.length - 1 ? this.instructions.length - 1 : newval;
            this.ip = newval;
        }
    }


}