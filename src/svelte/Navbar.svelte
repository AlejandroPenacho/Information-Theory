<script lang="ts">

    export let selectedChapter : number = 0;

    let listOfChapters : [number, string][]= [
        [0, "Problems of communication"],
        [1, "The new Smartwatch"],
        [2, "Intro to information"],
        [3, "Entropy"],
        [4, "Guessing the letter"],
        [5, "The real entropy"],
        [6, "Who is Who?"],
        [7, "Lots of Dices"],
        [8, "Large text chains"],
        [9, "Compressing Data"],
        [10, "Conclusion"]
    ]

    function selectChapter( chapter: number) : () => void {
        return () => {
            selectedChapter = chapter;
        }
    }

</script>

<style>
    div.header {
        height: 10vw;
    }
    div.mainBar {
        position: fixed;
        height: 100vh;
        width: 20vw;
        background-color: var(--color1);
    }
    div.allChapters {
        display: flex;
        flex-direction: column;
    }
    div.singleChapter {
        cursor: pointer;
        height: 20px;
        margin: 5px 15px 0px 10px;
        display: flex;
        border-radius: 0px 5px 5px 0px;
    }

    div#selected {
        background-color: var(--color4);
    }
    div#notSelected {
        background-color: var(--color5);
    }

    div.index {
        width: 20px;
        padding-left: 10px;
        padding-right: 5px;
        text-align: right;
    }
</style>

<div class="mainBar">
    <div class="header">
        Here it comes
    </div>
    <div class="allChapters">
        {#each listOfChapters as element}
            <div class="singleChapter" 
                 id="{(selectedChapter==element[0]) ? "selected" : "notSelected"}"
                 on:click={selectChapter(element[0])}>
                <div class="index">
                    {element[0]}
                </div>
                <div class="name">
                    {element[1]}
                </div>
            </div>
        {/each}
    </div>
</div>