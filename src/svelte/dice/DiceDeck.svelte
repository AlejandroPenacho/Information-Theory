<script lang="ts">
    import Dice from "./Dice.svelte";

    export let nDices;

    let diceClick = new Array(nDices);
    let diceValue = new Array(nDices);

    let totalValue;

    $: totalValue = diceValue.reduce((acc,x) => {return (acc+x)}, 0);

    function throwAllDices(){
        throwNextDice(0)();
    }

    function throwNextDice(index){
        return () => {
            diceClick[index]();
            if (index < (nDices-1)){
                setTimeout(throwNextDice(index+1), 1000/nDices)
            }
        }
    }
</script>

<style>
div.allClickButton {
    padding: 10px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
}

div.allClickButton:hover {
    background-color: cadetblue;
}

div.allClickButton:active {
    background-color: chartreuse;
    transition: background-color 0.1s;
}

div.diceBox {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
}

div.main {
    background-color: green;
}

div.lowerDeck {
    padding: 20px;
    display: flex;
}

div.result {
    background-color: white;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    padding-left: 10px;
    padding-right: 10px;
}

</style>

<div class="main">
    <div class="diceBox">
        {#each [...Array(nDices).keys()] as index}
            <Dice bind:click={diceClick[index]} bind:currentValue={diceValue[index]}/>
        {/each}
    </div>
    <div class="lowerDeck">
        <div class="allClickButton" on:click={throwAllDices}>
            <div>
                Roll all
            </div>
        </div>
        <div class="result">
            Sum: {totalValue}
        </div>
        <div class="result">
            Mean: {(totalValue/nDices).toPrecision(4)}
        </div>
    </div>
</div>
