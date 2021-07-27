<script lang="ts">
    import Dice from "./Dice.svelte";
    import PieChart from "/src/svelte/PieChart.svelte";

    export let nDices;

    let diceClick = new Array(nDices);
    let diceValueStatus = {
        sum : nDices,
        nDicesAt : [nDices,0,0,0,0,0]
    }

    function throwAllDices(){
        throwNextDice(0)();
    }

    function updateDiceData(prevValue, newValue){
        diceValueStatus.sum += (newValue - prevValue);
        diceValueStatus.nDicesAt[prevValue-1] -= 1;
        diceValueStatus.nDicesAt[newValue-1] += 1
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

div.diceNumbersBlock {
    display: flex;
    flex-wrap: wrap;
    height: 60px;
    width: 400px;
}

div.minorDiceBlock {
    display: flex;
    height: 50%;
    align-items: center;
}

img.exampleDice {
    width: 100%;
    height: 100%;
    padding-left: 30px;
}

</style>

<div class="main">
    <div class="diceBox">
        {#each [...Array(nDices).keys()] as index}
            <Dice bind:click={diceClick[index]} updateDiceData={updateDiceData}/>
        {/each}
    </div>
    <div class="lowerDeck">
        <div class="allClickButton" on:click={throwAllDices}>
            <div>
                Roll all
            </div>
        </div>
        <div class="result">
            Sum: {diceValueStatus.sum}
        </div>
        <div class="result">
            Mean: {(diceValueStatus.sum/nDices).toPrecision(4)}
        </div>
        <div class="diceNumbersBlock">
            {#each [...Array(6).keys()] as index}
            <div class="minorDiceBlock" >
                <img class="exampleDice" src="/assets/svg/dice/dice{index+1}.svg" alt="{index+1}" >
                {(diceValueStatus.nDicesAt[index]/nDices).toPrecision(4)}
            </div>
            {/each}
        </div>
    </div>
    <PieChart percentageList={diceValueStatus.nDicesAt.map((x)=>{return x/nDices})}/>
</div>
