
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