<script lang="ts">

    import Navbar from "/src/svelte/Navbar.svelte";

    import ExampleProblems from "/src/svelte/scenes/ExampleProblems.svelte";
    import Introduction from "/src/svelte/scenes/Introduction.svelte";
    import Entropy1 from "/src/svelte/scenes/Entropy1.svelte";
    import CompleteWords from "/src/svelte/scenes/CompleteWords.svelte";
    import ThrowDices from "/src/svelte/scenes/ThrowDices.svelte";
    import Scene5 from "/src/svelte/scenes/Scene5.svelte";

    let selectedChapter = 0;

    function changeChapter(newChapter){
        return ()=>{
            selectedChapter = newChapter;
        }
    }
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
            <ExampleProblems nextChapter={changeChapter(1)}/> 
        {:else if selectedChapter==1}
            <Introduction />
        {:else if selectedChapter==2}
            <Entropy1 />
        {:else if selectedChapter==3}
            <CompleteWords />
        {:else if selectedChapter==4}
            <ThrowDices />
        {:else if selectedChapter==5}
            <Scene5 />
        {/if}
    </div>
</div>

