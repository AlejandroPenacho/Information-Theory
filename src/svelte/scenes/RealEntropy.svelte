<script lang="ts">
    import CoinDeck from "/src/svelte/coins/CoinDeck.svelte"
    import Explanation from "/src/svelte/coins/Explanation.svelte"

    let explanation;
    let isShaded;
</script>

<style>
    div.par {
        margin: 5mm 0mm 5mm 0mm;
    }

</style>


<div class="main">
    <div class="par">
        The question now is how to evaluate entropy when the probbility of a symbol is not uniform. Below, 
        you can see six different symbols: 5 are binary, and the last one is a 3-symbol. At their side, 
        the probability of of obtaining head (for the 3-response, the probability of obtaining 1, 2 or 3). Click 
        "Roll" to recalculate them. When you are done, click "Reveal".
    </div>
</div>

<CoinDeck bind:isShaded={isShaded} bind:hoveredRow={explanation}/>

{#if !isShaded}
    <Explanation number={explanation} />
{/if}