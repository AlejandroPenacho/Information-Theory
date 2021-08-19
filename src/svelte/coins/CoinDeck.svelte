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
                probability: "5/16",
                entropy: binaryEntropy(5/16),
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
                text: "2 or less heads / Exactly 3 heads / 4 or more heads" ,
                probability: "3/16 5/16 1/2",
                entropy: ternaryEntropy(3/16, 5/16, 1/2),
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
        display: flex;
        align-items: center;
    }
    div.upper-zone {
        display: flex;
    }
    div.left-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    div.button {
        width: 20mm;
        height: 50mm;
        border-radius: 3mm;
        margin: 3mm;
        background-color: var(--color5);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.button:hover {
        background-color: var(--color4);
    }
    div.deck {
        display: flex;
        flex-direction: column;
        margin-left: 8mm;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 8mm;
    }
    div.shader {
        background-color: black;
        position: absolute;
        height:100%;
        width: 100%;
        border-radius: 10mm;
        /* transform: translate(0, -8mm); */
    }

    div.lower-deck {
        display: flex;
        flex-direction: column;
        width: 75%;
    }
    div.question {
        display: flex;
        align-items: center;
        font-size:x-large;
        height: 10mm;
        border-radius: 3mm;
        margin: 2mm;
    }
    div.question:last-child {
        height: 20mm;
    }
    div.question:last-child div.probability {
        font-size: 6mm;
    }
    div.probability {
        width: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        text-align: center;
    }
    div.entropy {
        width: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-right: 1em;

    }
    div.value {
        width: 6em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
    img.value {
        height: 1.5em; 
    }
</style>

<div class="main">
    <div class="upper-zone">
        <div class="left-buttons">
            <div class="button"
                 on:click={clickAll}>
                 Roll
            </div>
            <div class="button"
                 on:click={shade}>
                 Reveal
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
        <div class="question">
            <div class="probability">P</div>
            <div class="value">Outcome</div>
            <div class="entropy">H</div>
        </div>
        {#each rows as row}
        <div class="question"
             on:mouseenter={()=>{hoveredRow = row.index}}
             on:mouseleave={()=>{hoveredRow = 0}}
             style="background-color: {hoveredRow===row.index ? 'green': 'orange'}">
            <div class="probability"> {row.probability}</div>
            {#if (row.questionType === QType.binary)}
            <div class="value">
                <img class="value"
                    src="/assets/svg/coins/{getBinarySymbol(row.state)}.svg" 
                    alt="Coin"/>
            </div>
            {:else}
            <div class="value">
                <img class="value"
                    src="/assets/svg/dice/{getTernarySymbol(row.state)}.svg" 
                    alt="Coin"/>
            </div>
            {/if}
            <div class="entropy"> {row.entropy.toPrecision(3)}</div>
            {#if !isShaded}
                {row.text}
            {/if}
        </div>
        {/each}
    </div>
</div>