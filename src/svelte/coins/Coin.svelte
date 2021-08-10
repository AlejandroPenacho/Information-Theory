<script lang="ts">

    enum CoinState {
        head,
        tail
    }

    const ANIMATION_TIME : number = 1000;

    let displayValue: CoinState = CoinState.head;
    export let currentValue: CoinState = CoinState.head;
    let nHalfTurns : number = 0;
    let lastFrameTime : number;
    let clickTime: number;
    let coinSize: number = 1;
    let coinAngle: number = 0;

    export function restart() {
        currentValue = CoinState.tail;
        console.log("restarted")
    }

    export function click() {
        nHalfTurns = Math.floor(Math.random()*2 + 0);
        console.log(nHalfTurns);
        clickTime = Date.now();
        requestAnimationFrame(rAFfunction);
    }

    function rAFfunction(timestamp){

        if (lastFrameTime === undefined){
            lastFrameTime = timestamp;
        }

        let deltaTime = timestamp - lastFrameTime;
        lastFrameTime = timestamp;

        let currentTime = Date.now();

        coinAngle += deltaTime/ANIMATION_TIME * nHalfTurns * Math.PI;
        coinSize = 1.3 - 0.3*Math.pow((1-(currentTime-clickTime)/(ANIMATION_TIME/2)),2);

        if (Math.cos(coinAngle) < 0){
            coinAngle -= Math.PI;
            if (displayValue === CoinState.tail){
                displayValue = CoinState.head;
            } else {
                displayValue = CoinState.tail;
            }
        }


        if (currentTime - clickTime < ANIMATION_TIME){
            requestAnimationFrame(rAFfunction);
        } else {
            coinAngle = 0;
            coinSize = 1;
            currentValue = displayValue;
            lastFrameTime = undefined;
        }
    }

</script>


<style>
    div.container {
        height: 50px;
        width: 50px;
        cursor: pointer;
    }
    img {
        height: 100%;
        width: 100%;
    }
</style>

<div class="container">
    <img src="/assets/svg/coins/{displayValue===CoinState.head? "lightCoin":"darkCoin"}.svg" alt="a coin" on:click={click} style="transform: scale({coinSize*Math.cos(coinAngle)}, {coinSize})">
</div>