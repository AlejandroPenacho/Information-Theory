<script lang="ts">

    import * as ww from "../../ts/whoiswho/whoiswho";


    export let question: ww.Question;
    export let hovering;

    let yesProb = 0;
    let noProb = 0;

    $: {
        if (hovering) {
            yesProb = question.entropy.probabilities[0]*100;
            noProb = question.entropy.probabilities[1]*100;
        } else {
            yesProb = 0;
            noProb = 0;
        }
    }

    function returnEntropyOrInf(entropy){
        if (entropy===-1){
            return "∞"
        } else {
            return entropy.toPrecision(2)
        }
    }

</script>

<style>
    div.main {
        position: relative;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-content: center;
        margin: 10px;
        cursor: pointer;
    }
    div.name {
        height: 8mm;
        background-color: yellowgreen;
        border-radius: 3mm 3mm 0mm 0mm;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.entropy-data {
        position: relative;
        background-color: chartreuse;
        border-radius: 0mm 0mm 3mm 3mm;
        height: 12mm;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    div.entropy-number {
        position:absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    div.yes-bar {
        background-color: green;
        height: 100%;
        transition: width 1s;
        border-radius: 0mm 0mm 0mm 3mm;
    }
    div.no-bar {
        background-color: red;
        height: 100%;
        transition: width 1s;
        border-radius: 0mm 0mm 3mm 0mm;
    }
    div.data-flexer {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div.data-block {

    }

    div.shade {
        background-color: black;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 5;
        opacity: 0.85;
        border-radius: 3mm;
    }

</style>

<div class="main">
    <div class="shade" style="display: {question.blocked? 'block':'none'}">

    </div>
    <div class="name" on:mouseenter on:mouseleave on:click >
        {question.text}
    </div>
    <div class="entropy-data" on:mouseenter on:mouseleave on:click >
        <div class="entropy-number">
            {question.entropy.qEntropy.toFixed(3)}
        </div>
        {#if !question.blocked}
            {#if hovering}
                <div class="data-flexer">
                    <div class="data-block">
                        <div>{(question.entropy.probabilities[0]*100).toFixed(0)}%</div>
                        <div>{returnEntropyOrInf(question.entropy.entropies[0])}</div>
                    </div>
                    <div class="data-block">
                        <div>{(question.entropy.probabilities[1]*100).toFixed(0)}%</div>
                        <div>{returnEntropyOrInf(question.entropy.entropies[1])}</div>
                    </div>
                </div>
            {/if}
            <div class="yes-bar"
                style="width: {yesProb}%">
            </div>
            <div class="no-bar"
                style="width: {noProb}%">

            </div>
        {/if}
    </div>
</div>