<script lang="ts">
    import TextGenerator from "/src/svelte/textGen/TextGenerator.svelte";
    import TextChainer from "/src/svelte/textChains/TextChainer.svelte";
    import ChanceAdjuster from "/src/svelte/textChains/ChanceAdjuster.svelte"

    let restartCounts;
    export let nextChapter;

    let letterTable = [
        {letter: "a", p: 1/3, cachedP: 1/3},
        {letter: "b", p: 1/6, cachedP: 1/6},
        {letter: "c", p: 1/6, cachedP: 1/6},
        {letter: "d", p: 1/6, cachedP: 1/6},
        {letter: "e", p: 1/6, cachedP: 1/6}
    ];
</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px
    }

    div.theWea {
        display: flex;
    }
</style>

<div class="main">
    <h1>Long Text Chains</h1>
    <div class="par">
        Now, instead of dice, we have a generator of random characters, whose probabilities you can change with the 
        slider on the left. After you click the red button, five random messages will be generated with 5 different 
        letters, with the probabilities you have set. Note that if you change the probabilities, all chains are reset.
    </div>
    <div class="theWea">
        <ChanceAdjuster bind:letterTable={letterTable} restartCounts={restartCounts}/>
        <TextChainer letterTable={letterTable} bind:restart={restartCounts}/>
    </div>
    <div class="par">
        In each row, the percentage of times that each character appears are displayed. As more characters appear, 
        these numbers tend to go closer to the defined probability by you.
    </div>
    <div class="par">
        If you could let this go on forever, the percentage of times each character appears in each chain would be 
        exactly equal. Then, in the long run, this can be used to compress messages, as you will see in the next page.
    </div>
    <div class="nextButton"
         on:click={nextChapter}>
        Next page
    </div>
</div>

