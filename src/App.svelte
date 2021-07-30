<script lang="ts">

    import Scene0 from "/src/svelte/scenes/Scene0.svelte";
    import Scene1 from "/src/svelte/scenes/Scene1.svelte";
    import Navbar from "/src/svelte/Navbar.svelte";

    let selectedChapter = 0;
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
        <Navbar bind:selectedChapter={selectedChapter}/>
    </div>
    <div class="mainZone">
        {#if selectedChapter==0}
            <Scene0 /> 
        {:else if selectedChapter==1}
            <Scene1 />
        {/if}
    </div>
</div>

