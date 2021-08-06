<script lang="ts">
    import Dice from "./Dice.svelte";
    import PieChart from "/src/svelte/PieChart.svelte";

    let possibleNDices = [10, 100, 300, 1000];
    let rangeInput = 0;

    let nDices = 10;
    
    let diceClick = new Array(nDices);
    let diceRestart = new Array(nDices);
    let diceValueStatus = {
        sum : nDices,
        nDicesAt : [nDices,0,0,0,0,0]
    }

    function restartData(){
        for (let i=0; i<nDices; i++){
            diceRestart[i]();
        }
        nDices = possibleNDices[rangeInput];
        diceValueStatus.sum = nDices;
        diceValueStatus.nDicesAt = [nDices, 0, 0, 0, 0, 0];
        diceValueStatus = diceValueStatus;
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
                setTimeout(throwNextDice(index+1), 0)
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
    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
}

div.main {
    background-color: green;
    padding: 10px;
    margin-top: 15px;
    display: flex;
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
    justify-content: center;
    align-items: center;
    width: 150px;
    margin-right: 20px;
}

div.minorDiceBlock {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
}
div.minorDiceBlock img {
    width: 60%;
}

img.exampleDice {
    width: 100%;
    height: 100%;
    padding-left: 30px;
}

div.block1 {
    background-color: blueviolet;
}
div.ndice-block {
    display: flex;
    align-items: center;
}
div.ndice-select {
    display: grid;
    grid-template-rows: 90% 10%;
}


</style>

<div class="main">
    <div class="block1">
        <div class="ndice-block">
            Nº dices:
            <div class="ndice-select">
               {nDices} 
                <input type="range" bind:value={rangeInput} min=0 max=3 on:change={restartData}/>
            </div>
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
        </div>
    </div>
    <div class="diceNumbersBlock">
        {#each [...Array(6).keys()] as index}
            <div class="minorDiceBlock" >
                <img class="exampleDice" src="/assets/svg/dice/dice{index+1}.svg" alt="{(index+1).toString()}" >
                {(diceValueStatus.nDicesAt[index]/nDices).toFixed(3)}
            </div>
        {/each}
    </div>
    <PieChart percentageList={diceValueStatus.nDicesAt.map((x)=>{return x/nDices})}/>
    <div class="diceBox">
        {#each [...Array(nDices).keys()] as index}
            <Dice bind:click={diceClick[index]} bind:restart={diceRestart[index]} 
            diceRawChance={[1,1,1,1,1,1]}
            updateDiceData={updateDiceData}/>
        {/each}
    </div>
</div>
