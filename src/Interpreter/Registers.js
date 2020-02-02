/* eslint-disable */

class Registers{

    constructor(x,y,size) {
        this.x = x;
        this.y = y;
        this.size = size
        this.flags = {
            control:{
                'TF': {
                    'name': 'Trap Flag',
                    'description': ''
                },
                'DF':{
                    'name': 'Direction Flag',
                    'description': ''
                },
                'IF':{
                    'name': 'Interrupt Flag',
                    'description': ''
                }
            },
            status:{
                'OF':{
                    'name': 'Overflow Flag',
                    'description': ''
                },
                'SF':{
                    'name': 'Sign Flag',
                    'description': ''
                },
                'ZF':{
                    'name': 'Zero Flag',
                    'description': ''
                },
                'AF':{
                    'name': 'Auxiliary Carry Flag',
                    'description': ''
                },
                'PF':{
                    'name': 'Parity Flag',
                    'description': ''
                },
                'CF':{
                    'name': 'Carry Flag',
                    'description': ''
                }

            }

        }
        this.registers =
            {
                general: {
                    'AX': {
                        'name': 'Accumulator Register',
                        'description': ''
                    },
                    'BX': {
                        'name': 'Base Register',
                        'description': ''
                    },
                    'CX': {
                        'name': 'Count Register',
                        'description': ''
                    },
                    'DX': {
                        'name': 'Data Register',
                        'description': ''
                    },
                },
                pointer:{
                    'SP': {
                        'name': 'Stack Pointer',
                        'description': ''
                    },
                    'BP': {
                        'name': 'Base Pointer',
                        'description': ''
                    },
                    'SI': {
                        'name': 'Source Index',
                        'description': ''
                    },
                    'DI': {
                        'name': 'Destination Index',
                        'description': ''
                    }
                },
                segment:{
                    'CS': {
                        'name': 'Code Segment',
                        'description': ''
                    },
                    'DS': {
                        'name': 'Data Segment',
                        'description': ''
                    },
                    'SS': {
                        'name': 'Stack Segment',
                        'description': ''
                    },
                    'ES': {
                        'name': 'Extra Segment',
                        'description': ''
                    }
                },
                instruction:{
                    'IP': {
                        'name': 'Instruction Pointer',
                        'description': ''
                    }
                }
            }

        let data = { ...this.flags, ... this.registers}
        console.log(data)
        for (let type in data){
            for(let item in data[type]){
                console.log(data[type][item].name)
            }

        }



    }


    display() {

        //REGISTERS
        noStroke();
        fill(255);
        rect(this.x, this.y, this.size, this.size * 0.8);


        stroke(0);

        rect(this.x + this.size*0.05,
            this.y + this.size*0.05,
            this.size*0.9,
            this.size*0.35);
        rect(
            this.x + this.size*0.05,
            this.y + this.size * 0.4,
            this.size*0.9,
            this.size*0.35

        )

        line( this.x + this.size*0.6,
              this.y + this.size*0.4,
              this.x + this.size*0.6,
              this.y + this.size*0.75,


        )

        //Current Register
        fill(51,25,60);
        rect(this.x + this.size*0.1,
            this.y + this.size*0.1,
            this.size* 0.5,
            this.size*0.25);

        ellipse(
            this.x + this.size*0.65,
            this.y + this.size*0.1,
            this.size*0.25,
            this.size*0.25
        )







    }





}
