<script lang="ts">
    export let rawSymbols: Array<[number, string]>;

    let symbols : Array<[number, string]> = new Array(rawSymbols.length);
    let nSymbols;
    let symbolCount : Array<string> = new Array(rawSymbols.length).fill(0);

    let currentString = "";
    let maxStringLength = 20;

    $: {
        nSymbols = rawSymbols.length;
        let totalSum = rawSymbols.reduce((acc, x)=> {return (acc + x[0])}, 0);

        let acc = 0;
        for (let i=0; i<nSymbols; i++){
            acc += rawSymbols[i][0];
            symbols[i] = [acc, rawSymbols[i][1]];
        }
        symbols[nSymbols-1][0] = 1;
    }

    function generateRandomSymbol() : [number, string] {
        let rand = Math.random();
        for (let i=0; i<nSymbols; i++){
            if (rand <= symbols[i][0]){
                return [i, symbols[i][1]]
            }
        }
    }

    function addToChain() {
        let newSymbol = generateRandomSymbol();
        symbolCount[newSymbol[0]] += 1;
        currentString += newSymbol[1];
        if (currentString.length > maxStringLength){
            currentString = currentString.slice(1);
        }
    }
</script>