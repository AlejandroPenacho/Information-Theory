<script lang="ts">

    let coinSVGs = [
        "/assets/svg/coins/darkCoin.svg",
        "/assets/svg/coins/lightCoin.svg"
    ]
    let suitSVGs = [
        "/assets/svg/suits/club.svg",
        "/assets/svg/suits/diamond.svg",
        "/assets/svg/suits/spade.svg",
        "/assets/svg/suits/heart.svg"
    ]
    let compassSVGs = [
        "/assets/svg/compass/compassN.svg",
        "/assets/svg/compass/compassNE.svg",
        "/assets/svg/compass/compassE.svg",
        "/assets/svg/compass/compassSE.svg",
        "/assets/svg/compass/compassS.svg",
        "/assets/svg/compass/compassSW.svg",
        "/assets/svg/compass/compassW.svg",
        "/assets/svg/compass/compassNW.svg"
    ]


    export let configurationList : Array<number>;
    export let value;
    let nSymbols = configurationList.length;

    let valuePerUnit = new Array(nSymbols);

    $: {
        let current = 1;
        for (let i=(nSymbols-1); i>=0; i--){
            valuePerUnit[i] = current;
            current *= configurationList[i];
        }
        console.log(valuePerUnit)
    }

    console.log(value)

    export let symbolValue;
    $: symbolValue = getSymbolValues(value);

    function getSymbolValues(value: number) {
        let symbolValue : Array<number> = new Array(nSymbols);
        let currentValue = value;
        for (let i=(nSymbols-1); i>=0; i--){
            symbolValue[i] = currentValue % configurationList[i];
            currentValue = Math.floor((currentValue-symbolValue[i])/configurationList[i]);
        }
        console.log(symbolValue)
        return symbolValue
    }
    
    function increaseValue(index : number){
        return ()=>{
            if (symbolValue[index] == (configurationList[index]-1)){
                value -= valuePerUnit[index]*symbolValue[index];
            } else {
                value += valuePerUnit[index];
            }
            console.log(value)
        }
    }

</script>

<style>
    div.main {
        display: flex;
    }
    div.number {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: chartreuse;
    }
    img {
        cursor: pointer;
    }
    div.number {
        cursor: pointer;
        user-select: none;
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
                 {symbolValue[index]}
            </div>
        {/if}
    {/each}
</div>