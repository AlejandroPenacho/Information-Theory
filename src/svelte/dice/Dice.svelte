<script lang="ts">
    const ANIMATION_TIME : number = 1000;

    let prevValue = 0;

    let currentValue: number = 1;
    let nTurns : number = 0;
    let clickTime : number = 0;
    let timeLastDiceUpdate: number = 0;
    let diceSize: number = 1;
    let diceAngle: number = 0;

    export let updateDiceData;

    export function click() {
        prevValue = currentValue;
        nTurns = Math.floor(Math.random()*2 + 2);
        clickTime = Date.now();
        requestAnimationFrame(rAFfunction);
    }

    function rAFfunction(){

        let currentTime = Date.now();

        diceAngle = (currentTime-clickTime)/1000 * nTurns * 360;
        diceSize = 1.3 - 0.3*Math.pow((1-(currentTime-clickTime)/(500)),2);

        if ((currentTime-timeLastDiceUpdate) > 150){
            currentValue = Math.floor(Math.random()*6 + 1);
            timeLastDiceUpdate = Date.now();
        }
        if (currentTime - clickTime < ANIMATION_TIME){
            requestAnimationFrame(rAFfunction);
        } else {
            diceAngle = 0;
            diceSize = 1;
            updateDiceData(prevValue, currentValue);
        }
    }

</script>


<style>
    div.container {
        height: 50px;
        width: 50px;
        margin: 5px;
        cursor: pointer;
    }
    img {
        height: 100%;
        width: 100%;
    }


</style>

<div class="container">
    <img src="/assets/svg/dice/dice{currentValue}.svg" alt="{currentValue}" on:click={click} style="transform: rotate({diceAngle}deg) scale({diceSize, diceSize})">
</div>