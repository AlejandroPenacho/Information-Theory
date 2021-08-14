
export class TextGenerator{
    generationTable: Array<[number, string]>
    nSymbols: number;

    constructor(rawTable: Array <[number, string]>){
        let totalSum = rawTable.reduce((acc, x) => {return (acc + x[0])}, 0);
        this.nSymbols = rawTable.length;

        this.generationTable = new Array(this.nSymbols);
        let currentSum = 0;
        for (let i=0; i<this.nSymbols; i++){
            currentSum += rawTable[i][0]/totalSum;
            this.generationTable[i] = [currentSum, rawTable[i][1]];
        }
        this.generationTable[this.nSymbols-1][0] = 1;        
    }

    getRandomSymbol(){
        let rand = Math.random();
        for (let i=0; i<this.nSymbols; i++){
            if (this.generationTable[i][0] >= rand){
                return this.generationTable[i][1]
            }
        }
    }

    generate(n: number){

        if (n===undefined){
            n = 1;

        }
        let outString = "";
        for (let i=0; i<n; i++){
            outString += this.getRandomSymbol();
        }
        return outString
    }
    generateRandomSymbolWithIndex(): [string, number]{
        let rand = Math.random();
        for (let i=0; i<this.nSymbols; i++){
            if (this.generationTable[i][0] >= rand){
                return [this.generationTable[i][1], i]
            }
        }
    }
}

export class TextTransformer{
    transfomTable: Array<[string, string]>;
    buffer: string;
    nTransformations: number;

    constructor(transformTable: Array<[string, string]>){
        this.transfomTable = transformTable;
        this.buffer = "";
        this.nTransformations = transformTable.length;
    }

    transform(input: string) : string {
        this.buffer += input;

        for (let i=0; i<this.nTransformations; i++){
            if (this.buffer === this.transfomTable[i][0]){
                this.buffer = "";
                return this.transfomTable[i][1]
            }
        }
        return ""
    }
}

export class TextBuffer {
    bufferLength: number;
    buffer: string;

    constructor(length : number){
        this.bufferLength = length;
        this.buffer = "";
    }

    add(newChars: string): string {
        let temporalBuffer = this.buffer + newChars;
        let excessChars = (temporalBuffer.length - this.bufferLength);
        if (excessChars > 0){
            this.buffer = temporalBuffer.slice(excessChars);
            return temporalBuffer.slice(0, excessChars)
        } else {
            this.buffer = temporalBuffer;
            return ""
        }
    }
}

export class FloatingLetter {
    position: [number, number];
    progress: number;
    letter: string

    constructor(letter: string){
        this.letter = letter;
        this.progress = 0;
    }
}

export class TextTunnel {
    passengers: Array<FloatingLetter>;
    trajectoryFunction: (number) => [number, number];
    transferTime: number;
    exitFunction: (string) => void;
    frameTimestep: number;

    constructor(trajectoryFunction: (number) => [number, number],
                tranferTime: number,
                exitFunction: (text) => void) {

        this.trajectoryFunction = trajectoryFunction;
        this.transferTime = tranferTime;
        this.exitFunction = exitFunction;
        this.passengers = new Array();
    }

    send( message: string ){
        for (let i=0; i<message.length; i++){
            setTimeout(() => {
                let newLetter = new FloatingLetter(message[i]);
                newLetter.position = this.trajectoryFunction(0);
                this.passengers.push(newLetter);
            }, i*100)
        }
   }

    updateFrame(timestep: number) {
        
        for (let i=0; i<this.passengers.length; i++){
            this.passengers[i].progress += timestep/this.transferTime;
            this.passengers[i].position = this.trajectoryFunction(this.passengers[i].progress);

            if (this.passengers[i].progress >= 1){
                this.exitFunction(this.passengers[i].letter);
                this.passengers.splice(i,1);
            }
        }
        this.passengers = this.passengers;
    }
}

export function reverseTable(table: Array<[string, string]>){
    let newTable = new Array(table.length);
    table.forEach((x, index) => {newTable[index] = [x[1], x[0]]})
    return newTable
}