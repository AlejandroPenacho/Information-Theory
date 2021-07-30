<script lang="ts">

    export let selectedChapter : number = 0;

    let listOfChapters : [number, string][]= [
        [0, "Introduction"],
        [1, "Guessing the letter"],
        [2, "Text generator"],
        [3, "Dices"],
        [4, "Who is Who?"],
        [5, "Conclusion"]
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
        background-color:blue;
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
                 style="background-color: {(selectedChapter==element[0]) ? selectColor : emptyColor}"
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