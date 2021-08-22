<script lang="ts">

    export let selectedChapter : number = 0;

    let listOfChapters : [number, string][]= [
        [0, "Communications"],
        [1, "The new smartwatch"],
        [2, "Symbols and messages"],
        [3, "Measuring information"],
        [4, "Unequal probability"],
        [5, "The real entropy"],
        [6, "Guess who?"],
        [7, "Large numbers"],
        [8, "Large text chains"],
        [9, "Compressing data"],
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
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.header img {
        width: 80%;
        border-radius: 3mm;
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
        <img src="/assets/svg/banner.svg" alt="Information theory"/>
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