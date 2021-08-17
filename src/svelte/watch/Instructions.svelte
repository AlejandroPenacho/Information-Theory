<script lang="ts">
    export let stage;
    export let nextChapter;
</script>

<style>
    div.instr {
        background-color: var(--color4);
        border-radius: 5mm;
        margin: 8mm;
        padding: 8mm;
    }
</style>



{#if stage===0}
<div class="instr">
    First of all, answering yes or no questions in this device is no problem, as you can see. 
    You can respond just by pressing the two buttons at the bottom.
</div>
{:else if stage===1}
<div class="instr">
    There are, however, simple questions that at first can not be answered. However, if your 
    friend and you agree in a simple format, as here, everything works fine.
</div>
{:else if stage===2}
<div class="instr">
    So, binary questions can be easily answered here. But what about harder questions?
</div>
{:else if stage===3}
<div class="instr">
    Ah! When there are four possibilities, two binary answers seem to be enough. Great!
</div>
{:else if stage===4}
<div class="instr">
    Your friend and you can agree in an uniform method for 4-questions, like: 1st no-no, 
    2nd yes-no, 3rd no-yes and 4th yes-yes.
    <ul>
        <li>No-No: first option</li>
        <li>Yes-No: second option</li>
        <li>No-Yes: third option</li>
        <li>Yes-Yes: fourth option</li>
    </ul>
</div>
{:else if stage===5}
<div class="instr">
    <div class="nextButton" on:click={nextChapter}>
        Next page
    </div>
</div>
{/if}