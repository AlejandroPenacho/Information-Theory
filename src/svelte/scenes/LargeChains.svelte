<script lang="ts">
    import TextGenerator from "/src/svelte/textGen/TextGenerator.svelte";
    import TextChainer from "/src/svelte/textChains/TextChainer.svelte";
    import ChanceAdjuster from "/src/svelte/textChains/ChanceAdjuster.svelte"

    let restartCounts;

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
        letters, with the probabilities you have set.
    </div>
    <div class="theWea">
        <ChanceAdjuster bind:letterTable={letterTable} restartCounts={restartCounts}/>
        <TextChainer letterTable={letterTable} bind:restart={restartCounts}/>
    </div>
    <div class="par">
        The more characters are added.
        of each character wil tend to a fix number. That means that some messages will become impossible, due to
        their extreme improbability. And we can take advantage of this to compress messages.
    </div>
</div>

