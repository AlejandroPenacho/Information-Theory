<script lang="ts">

    import Coin from "/src/svelte/coins/Coin.svelte"

    interface Row {
        text: string,
        probability: string,
        entropy: number,
        questionType: QType,
        state: CoinState,
        index: number
    }

    export let hoveredRow : number = 0;

    enum CoinState {
        head,
        tail,
        third
    }
    enum QType {
        binary,
        ternary
    }

    export let isShaded = true;

    let nCoins: number = 6;

    let nHeads: number;

    $: {
        nHeads = 0;
        for (let i=0; i<nCoins; i++){
            if (coinValues[i] === CoinState.head){
                nHeads ++;
            }
        }
    }

    
    let clickFunctions = new Array(nCoins);
    let coinValues = new Array(nCoins);


    let rows: Row[]; 
    $: {
        rows = [
            {
                text: "Value of first coin",
                probability: "1/2",
                entropy: binaryEntropy(0.5),
                questionType: QType.binary,
                state: (coinValues[0] === CoinState.head)? CoinState.head : CoinState.tail,
                index: 1
            },{
                text: "All coins are heads",
                probability: "1/64",
                entropy: binaryEntropy(1/64),
                questionType: QType.binary,
                state: (nHeads === nCoins)? CoinState.head : CoinState.tail,
                index: 2
            },{
                text: "First 3 coins are heads",
                probability: "1/8",
                entropy: binaryEntropy(1/8),
                questionType: QType.binary,
                state: ((coinValues[0]==CoinState.head)
                        &&(coinValues[1]==CoinState.head)
                        &&(coinValues[2]==CoinState.head))? CoinState.head : CoinState.tail,
                index: 4
            },{
                text: "Exactly 3 coins are heads",
                probability: "1/77",
                entropy: binaryEntropy(1/77),
                questionType: QType.binary,
                state: (nHeads === 3)? CoinState.head : CoinState.tail,
                index: 3
            },{
                text: "4 or more coins are heads",
                probability: "1/2",
                entropy: binaryEntropy(1/2),
                questionType: QType.binary,
                state: (nHeads >= 4)? CoinState.head : CoinState.tail,
                index: 5
            },{
                text: "1 / 2 or 3 / 4, 5 or 6 coins are heads",
                probability: "1/6, 1/3, 1/2",
                entropy: ternaryEntropy(1/6, 1/3, 1/2),
                questionType: QType.ternary,
                state: (nHeads >= 4)? CoinState.head : CoinState.tail,
                index: 6
            }
        ];
        if (nHeads === 1){
            rows[5].state = CoinState.head;
        } else if (nHeads===2 || nHeads===3){
            rows[5].state = CoinState.tail;
        } else {
            rows[5].state = CoinState.third;
        }
    }

    function binaryEntropy(p){
        return -(p*Math.log(p)/Math.LN2 + (1-p)*Math.log(1-p)/Math.LN2) 
    }

    function ternaryEntropy(p1, p2, p3){
        return [p1, p2, p3].reduce((acc, x) => {return acc - x*Math.log(x)/Math.LN2})
    }


    function getBinarySymbol(state: CoinState){
        if (state===CoinState.head){
            return "lightCoin"
        } else {
            return "darkCoin"
        }
    }

    function getTernarySymbol(state: CoinState){
        if (state===CoinState.head){
            return "dice1"
        } else if (state===CoinState.tail){
            return "dice2"
        } else {
            return "dice3"
        }
    }
    function clickAll(){
        for (let i=0; i<nCoins; i++){
            clickFunctions[i]();
        }
    }
    function shade(){
        isShaded = !isShaded;
    }

</script>

<style>
    div.main {

    }
    div.upper-zone {
        display: flex;
    }
    div.left-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    div.button {
        width: 1.3cm;
        height: 1.3cm;
        border-radius: 3mm;
        margin: 3mm;
        background-color: green;
        cursor: pointer;
    }
    div.deck {
        display: flex;
        margin-left: 8mm;
        align-items: center;
        position: relative;
        padding: 8mm;
    }
    div.shader {
        background-color: black;
        position: absolute;
        height:100%;
        width: 100%;
        transform: translate(-8mm, 0);
    }

    div.lower-deck {
        display: flex;
        flex-direction: column;
        width: 60%;
    }
    div.question {
        display: flex;
        align-items: center;
        font-size:x-large;
        height: 10mm;
        border-radius: 3mm;
        margin: 2mm;
    }
    div.probability {
        width: 20mm;
    }
    div.entropy {
        width: 20mm;
    }
    img.value {
        width: 10mm
    }
</style>

<div class="main">
    <div class="upper-zone">
        <div class="left-buttons">
            <div class="button"
                 on:click={clickAll}>
                Flip all
            </div>
            <div class="button"
                 on:click={shade}>
                Shade/ unshade
            </div>
        </div>
        <div class="deck">
            {#each [...Array(nCoins).keys()] as index}
                <Coin bind:click={clickFunctions[index]} bind:currentValue={coinValues[index]}/>
            {/each}
            <div class="shader"
                 style="opacity: {isShaded? 1: 0}; display: {isShaded? 'block': 'none'}">

            </div>
        </div>
    </div>
    <div class="lower-deck">
        {#each rows as row}
        <div class="question"
             on:mouseenter={()=>{hoveredRow = row.index}}
             on:mouseleave={()=>{hoveredRow = 0}}
             style="background-color: {hoveredRow===row.index ? 'green': 'orange'}">
            <div class="probability"> {row.probability}</div>
            <div class="entropy"> {row.entropy.toPrecision(3)}</div>
            {#if (row.questionType === QType.binary)}
            <img class="value"
                 src="/assets/svg/coins/{getBinarySymbol(row.state)}.svg" 
                 alt="Coin"/>
            {:else}
            <img class="value"
                 src="/assets/svg/dice/{getTernarySymbol(row.state)}.svg" 
                 alt="Coin"/>
            {/if}
            {#if !isShaded}
                {row.text}
            {/if}
        </div>
        {/each}
    </div>
</div>