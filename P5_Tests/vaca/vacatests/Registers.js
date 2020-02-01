class Registers{

    constructor(x,y,size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.inHex = true;
        colorMode(HSB,100);
        this.flags = {
            control:{
                'TF': {
                    'name': 'Trap Flag',
                    'description': '',
                    id: 'TF',
                    x: this.x + 0.05*size,
                    y: this.y + 1.5 *size,
                    col: '#e08f62',
                    value: false
                },
                'DF':{
                    'name': 'Direction Flag',
                    'description': '',
                    id: 'DF',
                    x: this.x + 0.235*size,
                    y: this.y + 1.5 *size,
                    col: '#d7c79e',
                    value: false
                },
                'IF':{
                    'name': 'Interrupt Flag',
                    'description': '',
                    id: 'IF',
                    x: this.x + 0.42*size,
                    y: this.y + 1.5 *size,
                    col: '#9dab86',
                    value: false
                }
            },
            status:{
                'OF':{
                    'name': 'Overflow Flag',
                    'description': '',
                    id: 'OF',
                    x: this.x + 0.05*size,
                    y: this.y + 1.75 *size,
                    col: '#1f4287',
                    value: false
                },
                'SF':{
                    'name': 'Sign Flag',
                    'description': '',
                    id: 'SF',
                    x: this.x + 0.235*size,
                    y: this.y + 1.75 *size,
                    col: '#278ea5',
                    value: false
                },
                'ZF':{
                    'name': 'Zero Flag',
                    'description': '',
                    id: 'ZF',
                    x: this.x + 0.42*size,
                    y: this.y + 1.75 *size,
                    col: '#21e6c1',
                    value: false
                },
                'AF':{
                    'name': 'Auxiliary Carry Flag',
                    'description': '',
                    id: 'AF',
                    x: this.x + 0.7*size,
                    y: this.y + 1.75 *size,
                    col: '#c05c7e',
                    value: false
                },
                'PF':{
                    'name': 'Parity Flag',
                    'description': '',
                    id: 'PF',
                    x: this.x + 0.885*size,
                    y: this.y + 1.75 *size,
                    col: '#f3826f',
                    value: false
                },
                'CF':{
                    'name': 'Carry Flag',
                    'description': '',
                    id: 'CF',
                    x: this.x + 1.07*size,
                    y: this.y + 1.75 *size,
                    col: '#ffb961',
                    value: false
                }
                
            }
            
        };

        this.registers =
            {
                general: {
                    'AX': {
                        'id': 'AX',
                        'name': 'Accumulator Register',
                        'description': '',
                        x: this.x + this.size*0.7,
                        y: this.y + this.size*0.05,
                        col:'#fd5e53',
						content: Math.floor(random(2**8))
                    },
                    'BX': {
                        'id': 'BX',
                        'name': 'Base Register',
                        'description': '',
                        x: this.x + this.size*0.7,
                        y: this.y + this.size*0.27,
                        col:'#75b79e',
						content: Math.floor(random(2**8))
                    },
                    'CX': {
                        'id': 'CX',
                        'name': 'Count Register',
                        'description': '',
                        x: this.x + this.size*0.7,
                        y: this.y + this.size*0.49,
                        col:'#9aceff',
						content: Math.floor(random(2**8))
                    },
                    'DX': {
                        'id': 'DX',
                        'name': 'Data Register',
                        'description': '',
                        x: this.x + this.size*0.7,
                        y: this.y + this.size*0.71,
                        col:'#fdd365',
						content: Math.floor(random(2**8))
                    },
                },
                pointer:{
                    'SP': {
                        'id': 'SP',
                        'name': 'Stack Pointer',
                        'description': '',
                        x: this.x + this.size*0.7,
                        y: this.y + this.size*1.0,
                        col:'#12cad6',
						content: Math.floor(random(2**8))
                    },
                    'BP': {
                        'id': 'BP',
                        'name': 'Base Pointer',
                        'description': '',
                        x: this.x + this.size*0.7,
                        y: this.y + this.size*1.22,
                        col:'#ccda46',
						content: Math.floor(random(2**8))
                    }
                },
                index:{
                    'SI': {
                        'id': 'SI',
                        'name': 'Source Index',
                        'description': '',
                        x: this.x + this.size*0.05,
                        y: this.y + this.size*1.0,
                        col:'#93b5b3',
						content: Math.floor(random(2**8))
                    },
                    'DI': {
                        'id': 'DI',
                        'name': 'Destination Index',
                        'description': '',
                        x: this.x + this.size*0.05,
                        y: this.y + this.size*1.22,
                        col:'#95a7a0',
						content: Math.floor(random(2**8))
                    }
                },
                segment:{
                    'CS': {
                        'id': 'CS',
                        'name': 'Code Segment',
                        'description': '',
                        x: this.x + this.size*0.05,
                        y: this.y + this.size*0.05,
                        col:'#3fc5f0',
						content: Math.floor(random(2**8))
                    },
                    'DS': {
                        'id': 'DS',
                        'name': 'Data Segment',
                        'description': '',
                        x: this.x + this.size*0.05,
                        y: this.y + this.size*0.27,
                        col:'#42dee1',
						content: Math.floor(random(2**8))
                    },
                    'SS': {
                        'id': 'SS',
                        'name': 'Stack Segment',
                        'description': '',
                        x: this.x + this.size*0.05,
                        y: this.y + this.size*0.49,
                        col:'#6decb9',
						content: Math.floor(random(2**8))
                    },
                    'ES': {
                        'id': 'ES',
                        'name': 'Extra Segment',
                        'description': '',
                        x: this.x + this.size*0.05,
                        y: this.y + this.size*0.71,
                        col:'#a1dd70',
						content: Math.floor(random(2**8))
                    }
                },
                instruction:{
                    'IP': {
                        'id': 'IP',
                        'name': 'Instruction Pointer',
                        'description': '',
                        x: this.x + this.size*0.7,
                        y: this.y + this.size*1.5,
                        col:'#ca5fa6',
						content: Math.floor(random(2**8))
                    }
                }
            };

        let data = { ...this.flags, ... this.registers};
        console.log(data)




    }


    display() {
        push();colorMode(HSB);
        //REGISTERS
        stroke(255);
        noFill();
        rect(this.x, this.y, this.size*1.25, this.size * 2);
        noStroke();

        for (let item in this.registers['general']){
            this.registerDisplay( this.registers['general'][item]);
        }
        for (let item in this.registers['instruction']){
            this.registerDisplay( this.registers['instruction'][item]);
        }

        for (let item in this.registers['segment']){
            this.registerDisplay( this.registers['segment'][item]);
        }
        for (let item in this.registers['pointer']){
            this.registerDisplay( this.registers['pointer'][item]);
        }

        for (let item in this.registers['index']){
            this.registerDisplay( this.registers['index'][item]);
        }

        for (let item in this.flags['control']){
            this.flagDisplay(this.flags['control'][item], this.size*0.125)
        }
        for (let item in this.flags['status']){
            this.flagDisplay(this.flags['status'][item], this.size*0.125)
        }


        pop();
    }

    flagDisplay({x,y,col,id, value},size){
        push();
        noStroke(); fill( 51);
        //rect(x,y,size,size*1.58);
        strokeWeight(size*0.08);
        noFill(); stroke(value ? col : 'rgba(136,136,136,0.75)');
        ellipseMode(RADIUS);
        textAlign(CENTER, CENTER)
        ellipse(x + size*0.5,
                y + size* 0.79,
                size*0.6,
                size*0.6   );
        noStroke(); fill(value ? col : 'rgba(136,136,136,0.75)');
        textSize(size* 0.65);
        //stroke(0);

        text(id,
          x - size*0.23,
            y ,
            size*1.5,
            size*1.4
        );
        pop();
    }

    registerDisplay({x,y,col,id,content}) {
        //console.log(color)


        if (content === undefined) return;
        id = id ? id : '';
        push();
        noStroke();

        let size = this.size * 0.5;

        textSize(size * 0.18);
        noFill();
        stroke(col);
        strokeWeight(size * 0.02);
        strokeJoin(ROUND);
        let h = size * 0.4;
        rect(x, y, size, h);
        const toBin = (i, pad) => (i).toString(2).padStart(pad, '0');
        let bin = toBin(content, 8).split('');
        fill(col);
        rect(x, y + h*0.7, size,  h * 0.3);
        for (let i = 0; i < 8; i++) {

            line(x + i * size / 8,
                y + size * 0.34,
                x + i * size / 8,
                y + size * 0.4);
            push();

            let back = color(BACKGROUND_COLOR);
            if (bin[i] === '0') {
                back.setAlpha(55);
            }
            fill(back);
            textSize(size * 0.09);
            textAlign(CENTER, CENTER);



            noStroke();
            text(
                bin[i],
                x + i * (size) / 8,
                y + h * 0.7,
                (size) / 8,
                0.3 * h);

            pop();
        }
        noStroke();

        fill(col);

        textAlign(CENTER, CENTER);
        if(id === 'AX' || id === 'BX' || id === 'CX' || id === 'DX')
        {
            textSize(size * 0.16);

            stroke(col);
            line(x + size/2,
                    y + h/2,
                x+ size/2,
                y + h
                );
            push();
            rectMode(RADIUS);
            rect(x + size * 0.5,
                y + h*0.35,size * 0.15, h*0.35
                );
            pop();
            fill(BACKGROUND_COLOR);
            text(id,
                x,
                y - size * 0.02,
                size,
                size * 0.17);

            fill(col); textSize(size * 0.12); noStroke();
            text(id[0] + 'H',
                x,
                y - size * 0.02,
                size/3,
                size * 0.17);
            text(id[0] + 'L',
                x+ size/2 + size/6,
                y - size * 0.02,
                size/3,
                size * 0.17);
            textSize(size * 0.10);


            let hcontent, lcontent;



            hcontent = parseInt(bin.slice(0,4).join(''), 2)
            lcontent = parseInt(bin.slice(4,8).join(''), 2)

            text(lcontent,
                x+ size/2 + size/6,
                y + size * 0.1,
                size/3,
                size * 0.17);


            text(hcontent,
                x,
                y + size * 0.1,
                size/3,
                size * 0.17);

            fill(BACKGROUND_COLOR);
            rectMode(CENTER);
            text(content,
                x + size/2,
                y + size * 0.19,
                size/3,
                size * 0.17);





        }
        else
        {
            rect(x,
                y,
            size * 0.35,
            size * 0.3);
            rect(x + size * 0.35,
                y,
                size * 0.65,
                size * 0.02);
            rect(x + size,
                y,
                -size * 0.02,
                size * 0.3);

            textSize(size * 0.18);
            fill(BACKGROUND_COLOR);
            text(id,
                x + size * 0.02,
                y,
                size * 0.3,
                size * 0.25);
            fill(col);
            textSize(size * 0.14);

            text(this.inHex ? '0x' + content.toString(16).padStart('0', 2) : content,
                x + size * 0.35,
                y,
                size * 0.65,
                size * 0.3
            );
            content.toString(16).padStart('0', 2);


        }
        pop();



    }




}