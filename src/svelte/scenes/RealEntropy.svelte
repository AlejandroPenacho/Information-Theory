<script lang="ts">
    import CoinDeck from "/src/svelte/coins/CoinDeck.svelte"
    import Explanation from "/src/svelte/coins/Explanation.svelte"

    let explanation;
</script>

<CoinDeck bind:hoveredRow={explanation}/>

<Explanation number={explanation} />