<script lang="ts">

    import Navbar from "/src/svelte/Navbar.svelte";

    import ExampleProblems from "/src/svelte/scenes/ExampleProblems.svelte";
    import Introduction from "/src/svelte/scenes/Introduction.svelte";
    import Entropy1 from "/src/svelte/scenes/Entropy1.svelte";
    import CompleteWords from "/src/svelte/scenes/CompleteWords.svelte";
    import ThrowDices from "/src/svelte/scenes/ThrowDices.svelte";
    import SmartWatch1 from "/src/svelte/scenes/SmartWatch1.svelte";
    import RealEntropy from "/src/svelte/scenes/RealEntropy.svelte";
    import WhoIsWhoScene from "/src/svelte/scenes/WhoIsWhoScene.svelte";
    import LargeChains from "/src/svelte/scenes/LargeChains.svelte";
    import Compressor from "/src/svelte/scenes/Compressor.svelte";
    import Conclusion from "/src/svelte/scenes/Conclusion.svelte";


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
        min-height: 100vh;
    }

    :global(.nextButton) {
        background-color: var(--color1);
        margin: auto;
        margin-top: 10mm;
        width: 30mm;
        height: 10mm;
        border-radius: 3mm;
        color: var(--color5);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        -moz-user-select: none;
        -webkit-user-select: none;
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
            <SmartWatch1 nextChapter={changeChapter(2)}/>
        {:else if selectedChapter==2}
            <Introduction nextChapter={changeChapter(3)}/>
        {:else if selectedChapter==3}
            <Entropy1 nextChapter={changeChapter(4)}/>
        {:else if selectedChapter==4}
            <CompleteWords nextChapter={changeChapter(4)}/>
        {:else if selectedChapter==5}
            <RealEntropy nextChapter={changeChapter(5)}/>
        {:else if selectedChapter==6}
            <WhoIsWhoScene nextChapter={changeChapter(6)}/>
        {:else if selectedChapter==7}
            <ThrowDices nextChapter={changeChapter(7)}/>
        {:else if selectedChapter==8}
            <LargeChains nextChapter={changeChapter(8)}/>
        {:else if selectedChapter==9}
            <Compressor nextChapter={changeChapter(9)}/>
        {:else if selectedChapter==10}
            <Conclusion />
        {/if}
    </div>
</div>

