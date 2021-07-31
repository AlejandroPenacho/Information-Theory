<script lang="ts">

    import Scene0 from "/src/svelte/scenes/Scene0.svelte";
    import Scene1 from "/src/svelte/scenes/Scene1.svelte";
    import Scene2 from "/src/svelte/scenes/Scene2.svelte";
    import Scene3 from "/src/svelte/scenes/Scene3.svelte";
    import Scene4 from "/src/svelte/scenes/Scene4.svelte";
    import Scene5 from "/src/svelte/scenes/Scene5.svelte";
    import Navbar from "/src/svelte/Navbar.svelte";

    let selectedChapter = 0;
</script>

<style>

    :global(:root) {
        --color1 : #36151E;
        --color2 : #593F62;
        --color3 : #7B6D8D;
        --color4 : #8499B1;
        --color5 : #A5C4D4;
    }

    div.mainDiv {
        display: grid;
        grid-template-columns: 20vw auto;
    }
    div.leftBar {
        grid-column: 1 2;
    }
    div.mainZone {
        background-color: var(--color3);
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
        {:else if selectedChapter==2}
            <Scene2 />
        {:else if selectedChapter==3}
            <Scene3 />
        {:else if selectedChapter==4}
            <Scene4 />
        {:else if selectedChapter==5}
            <Scene5 />
        {/if}
    </div>
</div>

