<script lang="ts">

    export let selectedChapter : number = 0;

    let listOfChapters : [number, string][]= [
        [0, "Introduction"],
        [1, "What is information"],
        [2, "Guessing the letter"],
        [3, "Text generator"],
        [4, "Dices"],
        [5, "Who is Who?"],
        [6, "Conclusion"]
    ]

    let selectColor : string = "green";
    let emptyColor : string ="burlywood";

    function selectChapter( chapter: number) : () => void {
        return () => {
            selectedChapter = chapter;
        }
    }

</script>

<style>
    div.header {
        height: 20vw;
    }
    div.mainBar {
        height: 100vh;
        width: 100%;
        background-color: var(--color1);
    }
    div.allChapters {
        display: flex;
        flex-direction: column;
    }
    div.singleChapter {
        cursor: pointer;
        height: 20px;
        margin: 5px 5px 0px 10px;
        display: flex;
    }

    div#selected {
        background-color: var(--color4);
    }
    div#notSelected {
        background-color: var(--color5);
    }

    div.index {
        width: 20px;
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