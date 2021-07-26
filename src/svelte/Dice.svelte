<script lang="ts">
    const ANIMATION_TIME : number = 2000;

    let currentValue: number = 1;
    let nTurns : number = 0;
    let currentTime : number = 0;

    function click() {
        nTurns += Math.floor(Math.random()*3 + 1);
        currentTime = Date.now();
        requestAnimationFrame(rAFfunction);
    }

    function rAFfunction(){
        if (Date.now() % 200 > 150){
            currentValue = Math.floor(Math.random()*6 + 1);
        }
        if (Date.now() - currentTime < ANIMATION_TIME){
            requestAnimationFrame(rAFfunction);
        }
    }

</script>


<style>
    div.container {
        height: 50px;
        width: 50px;
        margin: 5px;
    }
    img {
        height: 100%;
        width: 100%;
        transition: transform 2000ms linear;
    }
</style>

<div class="container">
    <img src="/assets/svg/dice/dice{currentValue}.svg" alt="Its a dice" on:click={click} style="transform: rotate({nTurns*360}deg)">
</div>