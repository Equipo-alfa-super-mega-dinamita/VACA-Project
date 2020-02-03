import RAM from "./RAM";
import Registers from "./Registers";
import InstructionQueue from "./InstructionQueue";
import CPU from "./CPU";
const toHex = (i, pad) => (i).toString(16).padStart(pad,'0')
//
let p5;
export default class ExecutionUnit{

    constructor(p5Parent, x,y,size){
        p5 = p5Parent;
        this.x = x
        this.y = y
        this.size = size


        this.buffer = new ArrayBuffer(2**8);
        this.memory = new Array(2**8);
        this.memoryContent = new Uint8Array(this.buffer);



        let n = this.memory.length;
        for (let i = 0; i <  n; i++) {
            this.memory[i] = {
                address:  toHex(i,4),
                color: p5.color('#111111')
            }
            this.memoryContent[i] = p5.floor(p5.random(2**8));
        }
        this.ram =  new RAM(p5,x + p5.width*0.72 ,20,size,2**8, this);
        this.registersComponent = new Registers(p5, x,y,size, this);
        this.instructions = new InstructionQueue(p5,x + p5.width/2 - size*0.9, y, size * 0.75, this);
        this.cpu = new CPU( p5, this.x + this.size*1.4,   this.y + this.size*1.075,this.size*1.920,this.size*1.080, this);

    }


    cpuCycle(){
        this.cpu.cpuCycle();
    }
  display(){
      p5.background(p5.BACKGROUND_COLOR);
      this.ram.display();
      this.instructions.display();
      this.registersComponent.display();
      this.cpu.display();
    }

    scroll(x,y,delta){
        this.ram.scroll(x, y, delta);
        this.instructions.scroll(x, y, delta);
        this.display();

    }


    onClick(x,y){
        this.ram.onClick(x, y);
        this.registersComponent.onClick(x, y);
        this.cpu.onClick(x, y);
        this.display();
    }

}
