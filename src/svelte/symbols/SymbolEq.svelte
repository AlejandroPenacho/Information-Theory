<script lang="ts">

    let coinSVGs = [
        "./assets/svg/coins/darkCoin.svg",
        "./assets/svg/coins/lightCoin.svg"
    ]
    let suitSVGs = [
        "./assets/svg/suits/club.svg",
        "./assets/svg/suits/diamond.svg",
        "./assets/svg/suits/spade.svg",
        "./assets/svg/suits/heart.svg"
    ]
    let compassSVGs = [
        "./assets/svg/compass/compassN.svg",
        "./assets/svg/compass/compassNE.svg",
        "./assets/svg/compass/compassE.svg",
        "./assets/svg/compass/compassSE.svg",
        "./assets/svg/compass/compassS.svg",
        "./assets/svg/compass/compassSW.svg",
        "./assets/svg/compass/compassW.svg",
        "./assets/svg/compass/compassNW.svg"
    ]


    export let configurationList : Array<number>;
    export let value;
    export let valueChange;

    let nSymbols = configurationList.length;

    let valuePerUnit = new Array(nSymbols);

    $: {
        let current = 1;
        for (let i=(nSymbols-1); i>=0; i--){
            valuePerUnit[i] = current;
            current *= configurationList[i];
        }
    }


    let symbolValue;
    $: symbolValue = getSymbolValues(value);

    function getSymbolValues(value: number) {
        let symbolValue : Array<number> = new Array(nSymbols);
        let currentValue = value;
        for (let i=(nSymbols-1); i>=0; i--){
            symbolValue[i] = currentValue % configurationList[i];
            currentValue = Math.floor((currentValue-symbolValue[i])/configurationList[i]);
        }
        return symbolValue
    }
    
    function increaseValue(index : number){
        return ()=>{
            if (symbolValue[index] == (configurationList[index]-1)){
                valueChange(value - valuePerUnit[index]*symbolValue[index]);
            } else {
                valueChange(value + valuePerUnit[index]);
            }
        }
    }

</script>

<style>
    div.main {
        display: flex;
        flex-direction: row;
    }
    div.number {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: chartreuse;
        cursor: pointer;
        user-select: none;
        width: 14mm;
        height: 14mm;
        border-radius: 7mm;
    }
    div.number:hover {
        background-color: darkgreen;
    }

    img {
        cursor: pointer;
    }

</style>

<div class="main">
        {#each configurationList as currentBit, index}
        {#if currentBit==2}
            <img src={coinSVGs[symbolValue[index]]}
                 alt={symbolValue[index]}
                 on:click={increaseValue(index)} />
        {:else if currentBit==4}
            <img src={suitSVGs[symbolValue[index]]}
                 alt={symbolValue[index]}
                 on:click={increaseValue(index)} />
        {:else if currentBit==8}
            <img src={compassSVGs[symbolValue[index]]}
                 alt={symbolValue[index]}
                 on:click={increaseValue(index)} />
        {:else if currentBit==16}
            <div class="number"
                 on:click={increaseValue(index)}>
                 {symbolValue[index]+1}
            </div>
        {/if}
    {/each}
</div>