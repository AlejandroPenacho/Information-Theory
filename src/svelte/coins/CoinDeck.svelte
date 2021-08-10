<script lang="ts">
    import Coin from "/src/svelte/coins/Coin.svelte"

    enum CoinState {
        head,
        tail
    }

    let isShaded = false;

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
        display: grid;
        grid-template-columns: 70% auto;
        width: 60%;
    }
    div.question {
        display: flex;
        align-items: center;
        justify-content: right;
        font-size:x-large;
        padding-right: 8mm;
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
        <div class="question">Value of first coin (H=1)</div>
        <img src="/assets/svg/coins/{coinValues[0]===CoinState.head? 'lightCoin' : 'darkCoin'}.svg" 
             alt="Coin"/>
        <div class="question">All coins are heads</div>
        <img src="/assets/svg/coins/{nHeads===nCoins? 'lightCoin' : 'darkCoin'}.svg" 
             alt="Coin"/>
        <div class="question">3 coins are heads</div>
        <img src="/assets/svg/coins/{nHeads===3? 'lightCoin' : 'darkCoin'}.svg" 
             alt="Coin"/>
        <div class="question">4 coins are heads</div>
        <img src="/assets/svg/coins/{nHeads===4? 'lightCoin' : 'darkCoin'}.svg" 
             alt="Coin"/>
        <div class="question">4 or more coins are heads</div>
        <img src="/assets/svg/coins/{nHeads>=4? 'lightCoin' : 'darkCoin'}.svg" 
             alt="Coin"/>
    </div>
</div>