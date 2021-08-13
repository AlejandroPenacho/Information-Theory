<script lang="ts">
    import CoinDeck from "/src/svelte/coins/CoinDeck.svelte"
    import Explanation from "/src/svelte/coins/Explanation.svelte"

    let explanation;
    let isShaded;
</script>

<CoinDeck bind:isShaded={isShaded} bind:hoveredRow={explanation}/>

{#if !isShaded}
    <Explanation number={explanation} />
{/if}