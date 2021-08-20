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
            You can change the chance of each symbol by using the sliding bars in the right menu. 
        </div>
    {:else if stage===2}
        <div class="text">
            Now, click the "+" symbol to add a third letter, the "C". 
        </div>
    {:else if stage===3}

    {:else if stage===4}

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