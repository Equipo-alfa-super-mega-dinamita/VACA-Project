let p5;
export default class Registers{


    constructor(p5Parent, x,y,size, parentCPU) {
        this.cpu = parentCPU;
        p5 = p5Parent;
        this.x = x;
        this.y = y;
        this.size = size;
        this.inHex = true;
        this.flags = {

                'TF': {
                    'name': 'Trap Flag',
                    'description': '',
                    id: 'TF',
                    x: this.x + 0.05*size,
                    y: this.y + 1.5 *size,
                    col: '#e08f62',
                    value: true
                },
                'DF':{
                    'name': 'Direction Flag',
                    'description': '',
                    id: 'DF',
                    x: this.x + 0.235*size,
                    y: this.y + 1.5 *size,
                    col: '#d7c79e',
                    value: true
                },
                'IF':{
                    'name': 'Interrupt Flag',
                    'description': '',
                    id: 'IF',
                    x: this.x + 0.42*size,
                    y: this.y + 1.5 *size,
                    col: '#9dab86',
                    value: true
                }
            ,

                'OF':{
                    'name': 'Overflow Flag',
                    'description': '',
                    id: 'OF',
                    x: this.x + 0.05*size,
                    y: this.y + 1.75 *size,
                    col: '#1f4287',
                    value: true
                },
                'SF':{
                    'name': 'Sign Flag',
                    'description': '',
                    id: 'SF',

                    x: this.x + 0.7*size,
                    y: this.y + 1.75 *size,
                    col: '#c05c7e',
                    value: true
                },
                'ZF':{
                    'name': 'Zero Flag',
                    'description': '',
                    id: 'ZF',
                    x: this.x + 1.07*size,
                    y: this.y + 1.75 *size,
                    col: '#ffb961',
                    value: true
                },
                'AF':{
                    'name': 'Auxiliary Carry Flag',
                    'description': '',
                    id: 'AF',
                    x: this.x + 0.235*size,
                    y: this.y + 1.75 *size,
                    col: '#278ea5',
                    value: true
                },
                'PF':{
                    'name': 'Parity Flag',
                    'description': '',
                    id: 'PF',
                    x: this.x + 0.885*size,
                    y: this.y + 1.75 *size,
                    col: '#f3826f',
                    value: true
                },
                'CF':{
                    'name': 'Carry Flag',
                    'description': '',
                    id: 'CF',
                    x: this.x + 0.42*size,
                    y: this.y + 1.75 *size,
                    col: '#21e6c1',
                    value: true


            }

        };
        this.registers = {
                'AX': {
                    'id': 'AX',
                    'name': 'Accumulator Register',
                    'description': 'Puede ser dividido en dos registros de 8 bits. Usado para operaciones aritmeticas y logicas.',
                    x: this.x + this.size*0.7,
                    y: this.y + this.size*0.05,
                    col:'#fd5e53',
                    content: Math.floor(p5.random(2**8))
                },
                'BX': {
                    'id': 'BX',
                    'name': 'Base Register',
                    'description': 'Puede ser dividido en dos registros de 8 bits. Usado para almacenar el valor del deplazamiento',
                    x: this.x + this.size*0.7,
                    y: this.y + this.size*0.27,
                    col:'#75b79e',
                    content: Math.floor(p5.random(2**8))
                },
                'CX': {
                    'id': 'CX',
                    'name': 'Count Register',
                    'description': 'Puede ser dividido en dos regisitros de 8. Usado normalmente en ciclos y rotaciones',
                    x: this.x + this.size*0.7,
                    y: this.y + this.size*0.49,
                    col:'#9aceff',
                    content: Math.floor(p5.random(2**8))
                },
                'DX': {
                    'id': 'DX',
                    'name': 'Data Register',
                    'description': 'Puede ser dividido en dos regisitros de 8. Es usado en multiplicación de un puerto de entrada y salida',
                    x: this.x + this.size*0.7,
                    y: this.y + this.size*0.71,
                    col:'#fdd365',
                    content: Math.floor(p5.random(2**8))
                },


                'SP': {
                    'id': 'SP',
                    'name': 'Stack Pointer',
                    'description': 'Apunta al tope de la pila de memoria.',
                    x: this.x + this.size*0.7,
                    y: this.y + this.size*1.0,
                    col:'#12cad6',
                    content: Math.floor(p5.random(2**8))
                },
                'BP': {
                    'id': 'BP',
                    'name': 'Base Pointer',
                    'description': 'Usado para acceder a los parametros pasados por pila.',
                    x: this.x + this.size*0.7,
                    y: this.y + this.size*1.22,
                    col:'#ccda46',
                    content: Math.floor(p5.random(2**8))
                },


                'SI': {
                    'id': 'SI',
                    'name': 'Source Index',
                    'description': 'Usado en el direccionamiento de punteros de datos.',
                    x: this.x + this.size*0.05,
                    y: this.y + this.size*1.0,
                    col:'#93b5b3',
                    content: Math.floor(p5.random(2**8))
                },
                'DI': {
                    'id': 'DI',
                    'name': 'Destination Index',
                    'description': 'Usado en el direccionamiento de puntero de datos y como destino en operaciones con cadenas.',
                    x: this.x + this.size*0.05,
                    y: this.y + this.size*1.22,
                    col:'#95a7a0',
                    content: Math.floor(p5.random(2**8))

            },
                'CS': {
                    'id': 'CS',
                    'name': 'Code Segment',
                    'description': 'Registra los pointers del segmento de codigo actual. Normalmente trata con las instrucciones',
                    x: this.x + this.size*0.05,
                    y: this.y + this.size*0.05,
                    col:'#3fc5f0',
                    content: Math.floor(p5.random(2**8))
                },
                'DS': {
                    'id': 'DS',
                    'name': 'Data Segment',
                    'description': 'Registra los points del segmento de codigo actual. Normalmente relacionado con las variables',
                    x: this.x + this.size*0.05,
                    y: this.y + this.size*0.27,
                    col:'#42dee1',
                    content: Math.floor(p5.random(2**8))
                },
                'SS': {
                    'id': 'SS',
                    'name': 'Stack Segment',
                    'description': 'Registra los points del segmento de codigo actual. Normalmente relacionado con las operaciones de pila',
                    x: this.x + this.size*0.05,
                    y: this.y + this.size*0.49,
                    col:'#6decb9',
                    content: Math.floor(p5.random(2**8))
                },
                'ES': {
                    'id': 'ES',
                    'name': 'Extra Segment',
                    'description': 'Usado para almacenamiento de datos',
                    x: this.x + this.size*0.05,
                    y: this.y + this.size*0.71,
                    col:'#a1dd70',
                    content: Math.floor(p5.random(2**8))
            },
                'IP': {
                    'id': 'IP',
                    'name': 'Instruction Pointer',
                    'description': 'Apunta a la siguiente instrucción a ejecutar',
                    x: this.x + this.size*0.7,
                    y: this.y + this.size*1.5,
                    col:'#ca5fa6',
                    content: Math.floor(p5.random(2**8))

            }
        };
        p5.colorMode(p5.HSB,100);

        this.currentItem = this.flags.CF;

        //let data = { ...this.flags, ... this.registers};

    }




    flagDisplay({x,y,col,id, value},size){
        p5.push();
        p5.noStroke(); p5.fill( 51);
        //rect(x,y,size,size*1.58);
        p5.strokeWeight(size*0.08);
        p5.noFill(); p5.stroke(value ? col : 'rgba(136,136,136,0.75)');
        p5.ellipseMode(p5.RADIUS);
        p5.textAlign(p5.CENTER, p5.CENTER)
        p5.ellipse(x + size*0.5,
            y + size* 0.79,
            size*0.6,
            size*0.6   );
        p5.noStroke(); p5.fill(value ? col : 'rgba(136,136,136,0.75)');
        p5.textSize(size* 0.65);

        p5.text(id,
            x - size*0.23,
            y ,
            size*1.5,
            size*1.4
        );
        p5.pop();
    }
    display() {

        p5.push(); p5.colorMode(p5.HSB);
        //REGISTERS
        p5.noStroke();
        p5.fill(51,51,51,5);
        p5.rect(this.x, this.y, this.size*1.25, this.size * 2.4);
        p5.noStroke();
        for (let item in this.registers){
            let register = this.registers[item];
            this.registerDisplay( register );
        }

        for (let item in this.flags){
            let flag = this.flags[item];
            this.flagDisplay( flag , this.size*0.125);
        }
        let {id, name, description,col} = this.currentItem;
        p5.fill(col);
        p5.textSize(this.size* 0.0625);
        p5.textFont(p5.InstructionsFont);
        p5.textAlign(p5.LEFT, p5.TOP);
        p5.text(id + ': ' + name,
            this.x + this.size*0.05,
            this.y + this.size*2.025,
            this.size*1,
            this.size*0.5
        );
        p5.textSize(this.size* 0.03725);
        p5.fill('rgba(100,100,100,0.7)');
        p5.text(description,
            this.x + this.size*0.05,
            this.y + this.size*2.125,
            this.size*0.5,
            this.size*0.5
        );


        p5.translate(this.x - 0.075*this.size, this.y + this.size*0.9 );
        p5.rotate( - p5.PI / 2);
        p5.noStroke();
        //p5.rect(0,0,this.size*0.9,0.1*this.size);
        p5.textSize(this.size* 0.0675);
        p5.textFont(p5.InstructionsFont);
        p5.text('Segmento',
            0,0,this.size*0.9,0.1*this.size
        );
        p5.translate(0,this.size*0.65);
        p5.text('General',
            0,0,this.size*0.9,0.1*this.size
        );
        p5.translate(-this.size*0.5,0);
        p5.text('Pointer',
            0,0,this.size*0.9,0.1*this.size
        );

        p5.translate(0, - this.size*0.65);
        p5.text('Index',
            0,0,this.size*0.9,0.1*this.size
        );
        p5.pop();
    }
    registerDisplay({x,y,col,id,content}) {
        if (content === undefined) {
            console.log({x,y,col,id,content})
            return;

        }
        id = id ? id : '';
        p5.push();
        p5.noStroke();

        let size = this.size * 0.5;

        p5.textSize(size * 0.18);
        p5.noFill();
        p5.stroke(col);
        p5.strokeWeight(size * 0.02);
        p5.strokeJoin(p5.ROUND);
        let h = size * 0.4;
        p5.rect(x, y, size, h);
        const toBin = (i, pad) => (i).toString(2).padStart(pad, '0');
        let bin = toBin(content, 16).split('');
        p5.fill(col);
        p5.rect(x, y + h*0.7, size,  h * 0.3);
        for (let i = 0; i < 16; i++) {
            if(i>0)
            {
                p5.strokeWeight(size * 0.005);
                p5.stroke(p5.BACKGROUND_COLOR);
                p5.line(x + i * size / 16,
                        y + size * 0.325,
                        x + i * size / 16,
                        y + size * 0.41);
            }
            p5.line(x - size*0.0025 ,
                y + size * 0.325,
                x + size+ size*0.0025,
                y + size * 0.325);
            p5.push();

            let back = p5.color(p5.BACKGROUND_COLOR);
            if (bin[i] === '0') {
                back.setAlpha(55);
            }
            p5.fill(back);
            p5.textSize(size * 0.06);
            p5.textAlign(p5.CENTER, p5.CENTER);

            p5.noStroke();
            p5.text(
                bin[i],
                x + i * (size) / 16,
                y + h * 0.8,
                (size) / 16,
                0.2 * h);

            p5.pop();
        }
        p5.noStroke();

        p5.fill(col);

        p5.textAlign(p5.CENTER, p5.CENTER);
        if(id === 'AX' || id === 'BX' || id === 'CX' || id === 'DX')
        {
            p5.textSize(size * 0.16);

            p5.stroke(col);
            p5.line(x + size/2,
                y + h/2,
                x+ size/2,
                y + h
            );
            p5.push();
            p5.rectMode(p5.RADIUS);
            p5.rect(x + size * 0.5,
                y + h*0.35,size * 0.15, h*0.35,
                0,0,size * 0.1,size * 0.1
            );
            p5.pop();
            p5.fill(p5.BACKGROUND_COLOR);
            p5.text(id,
                x,
                y - size * 0.02,
                size,
                size * 0.17);

            p5.fill(col); p5.textSize(size * 0.12); p5.noStroke();
            p5.text(id[0] + 'H',
                x,
                y - size * 0.02,
                size/3,
                size * 0.17);
            p5.text(id[0] + 'L',
                x+ size/2 + size/6,
                y - size * 0.02,
                size/3,
                size * 0.17);
            p5.textSize(size * 0.10);

            let hcontent, lcontent;

            hcontent = parseInt(bin.slice(0,4).join(''), 2)
            lcontent = parseInt(bin.slice(4,8).join(''), 2)

            p5.text(lcontent,
                x+ size/2 + size/6,
                y + size * 0.1,
                size/3,
                size * 0.17);

            p5.text(hcontent,
                x,
                y + size * 0.1,
                size/3,
                size * 0.17);

            p5.fill(p5.BACKGROUND_COLOR);
            p5.rectMode(p5.CENTER);
            p5.text(content,
                x + size/2,
                y + size * 0.19,
                size/3,
                size * 0.17);

            p5.strokeWeight(size * 0.0075);
            p5.stroke(p5.BACKGROUND_COLOR);
            p5.line(x + 8 * size / 16,
                y + size * 0.275,
                x + 8 * size / 16,
                y + size * 0.41);

        }
        else
        {
            p5.rect(x,
                y,
                size * 0.35,
                size * 0.3);
            p5.rect(x + size * 0.35,
                y,
                size * 0.65,
                size * 0.02);
            p5.rect(x + size,
                y,
                -size * 0.02,
                size * 0.3);

            p5.textSize(size * 0.18);
            p5.fill(p5.BACKGROUND_COLOR);
            p5.text(id,
                x + size * 0.02,
                y,
                size * 0.3,
                size * 0.25);
            p5.fill(col);
            p5.textSize(size * 0.14);

            p5.text(this.inHex ? '0x' + content.toString(16).padStart('0', 2) : content,
                x + size * 0.35,
                y,
                size * 0.65,
                size * 0.3
            );
            content.toString(16).padStart('0', 2);



        }
        p5.pop();



    }

    onClick(ex,ey){
        /*console.log( {ex,ey, x: ex - this.x , y:  ey - this.y
        ,
            relativeX: (ex - this.x)/ this.size,
            relativeY: (ey - this.y)/ this.size,

        })*/

            for( let rname in this.registers){
                let {x, y, name} = this.registers[rname];
                let w = this.size* 0.5;
                let h = this.size* 0.2;

                if( ex > x && ex < x + w && ey > y && ey < y + h){
                    this.currentItem = this.registers[rname];
                }
            }

        for (let type in this.flags){
            //console.log(this.flags);

            /*flag.x + size*0.5,
            flag.y + size* 0.79,
            size*1.2,
            size*1.2*/
            let size = this.size*0.125;
            for( let rname in this.flags){
                let {x, y, name} = this.flags[rname];
                x +=  size*0.5;
                y +=  size*0.79;
                let r = this.size* 0.075;

                if( (ex - x)**2 + (ey - y)**2 < (r)*(r)){
                    this.currentItem = this.flags[rname];
                    this.flags[rname].value = !this.flags[rname].value;
                }
            }
        }
    }


}
