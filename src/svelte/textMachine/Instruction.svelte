<script lang="ts">

    let stage = 0;
    let maxStage = 4;
</script>

<style>
    div.main {
        margin-top: 15mm;
        padding: 1%;
        display: grid;
        grid-template-columns: 80% auto;
        background-color: var(--color4);
        border-radius: 6mm;
    }
    div.changeStageButtons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div.text {
        padding: 2em;
        background-color: var(--color5);
        border-radius: 6mm 0mm 0mm 6mm;
    }
    div.jumpStage {
        width: 16mm;
        height: 8mm;
        padding: 3mm;
        border-radius: 3mm;
        margin: 3mm;
        display: flex;
        align-items: center;
        justify-content: center;
        -moz-user-select: none;
        -webkit-user-select: none;
        cursor: pointer;
    }
    div#prev {
        background-color: coral;
    }
    div#prev:hover {
        background-color: firebrick;
    }
    div#next {
        background-color: darkseagreen;
    }
    div#next:hover {
        background-color: greenyellow;
    }
</style>

<div class="main">
    {#if stage===0}
        <div class="text">
            Initially, we are transmitting a message consisting of A and B, with a 50% chance of each. The codification 
            translates the A to a 0, and the B to a 1. Since we are moving from a code with two different symbols to another 
            with two symbols too, there is not much to see.
        </div>
    {:else if stage===1}
        <div class="text">
            You can change the chance of each symbol by using the sliding bars in the right menu. When you do this,
            you can also see how the entropy of the message decreases. Note how the maximum is 1, achieved at 50%/50%.
        </div>
    {:else if stage===2}
        <div class="text">
            Now, click the "+" symbol to add a third letter, the "C". Increase the chance of "C" until you have 25% for 
            "A" and "B", and 50% for "C". At this point, entropy is just 1.5.
        </div>
    {:else if stage===3}
        <div class="text">
            The codified channel sends only two possible symbols: "0" and "1". That is, its entropy is 1. The key of 
            compression is that the amount of entropy sent can not change. Since the raw message of "A", "B" and "C" sends 
            2 symbols of 1.5 bits per seconds, or 3 bits/sec. Then, we should be able to send the same information with 
            3 symbols per second through the codified line (the right one).
        </div>
    {:else if stage===4}
        <div class="text">
            Click on <b>Compressor</b>, at the panel where you choos the chance of each letter. There are 3 possible ways 
            of transforming the letters to "0" and "1". Cycle through them and check the number of symbols per second (right 
            yellow indicator).
        </div>
    {:else if stage===5}
        <div class="text">
            You shuld be able to get a mean transfer speed of 3 symbols per second in the right channel by codifying 
            the "C" as a "0". It seems reasonable: since the "C" is the most probable character, you should transform it 
            to a short message. This is the basis of most compression algorithms.
        </div>
    {:else if stage=6}
        <div class="text">
            If you try changing the probabilities, you will achieve different trasnfer rates. 
        </div>
    {/if}
    <div class="changeStageButtons">
        <div class="jumpStage" id="prev" on:click={() => {stage = Math.max(stage-1, 0)}}>
            Previous
        </div>
        <div class="jumpStage" id="next" on:click={() => {stage = Math.min(stage+1, maxStage)}}>
            Next
        </div>
    </div>
</div>