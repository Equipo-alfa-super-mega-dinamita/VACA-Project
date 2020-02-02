/* eslint-disable */

const nitems = 8;
const toHex = (i, pad) => (i).toString(16).padStart(pad,'0')
const toBin = (i, pad) => (i).toString(2).padStart(pad,'0');
class RAMContent {

    constructor(){

        const array_size = 2 ** 16;

        this.buffer = new ArrayBuffer(array_size);
        this.memoryContent = new Uint8Array(this.buffer);
    }

}

export default RAMContent;
