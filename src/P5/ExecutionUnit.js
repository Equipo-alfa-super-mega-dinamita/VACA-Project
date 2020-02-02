import RAM from "./RAM";
import Registers from "./Registers";
import InstructionQueue from "./InstructionQueue";

let p5;
export default class ExecutionUnit{

    constructor(p5, x,y,size){
        this.memory =  new RAM(p5,x + p5.width*0.72 ,20,size,2**8);
        this.registers = new Registers(p5,x,y,size);
        this.instructions = new InstructionQueue(p5,x + p5.width/2 - size*0.9, y, size * 0.75);
        
    }

  display(){
      this.memory.display();
      this.instructions.display();
      this.registers.display();
    }

    scroll(x,y,delta){
        this.memory.scroll(x, y, delta);
        this.instructions.scroll(x, y, delta);

    }

}
