<script lang="ts">
    import DiceDeck from "./svelte/dice/DiceDeck.svelte";
    import FillWordButton from "/src/svelte/fillWord/FillWordButton.svelte";
    import Navbar from "/src/svelte/Navbar.svelte";
</script>

<style>
    div.mainDiv {
        display: grid;
        grid-template-columns: 20vw auto;
    }
    div.leftBar {
        grid-column: 1 2;
    }
    div.mainZone {
        grid-column: 2 3;
    }
</style>

<div class="mainDiv">
    <div class="leftBar">
        <Navbar />
    </div>
    <div class="mainZone">
        <div style= "font-size: 40px;">
            Voy a comprar una <FillWordButton />amisa
        </div>
        <DiceDeck nDices={600}/>
    </div>
</div>

