<script lang="ts">
    import DiceDeck from "./svelte/dice/DiceDeck.svelte";
    import FillWordButton from "/src/svelte/FillWordButton.svelte";
</script>

<style>

</style>

<DiceDeck nDices={300}/>
<div style= "font-size: 40px;">
    Voy a comprar una <FillWordButton />amisa
</div>
