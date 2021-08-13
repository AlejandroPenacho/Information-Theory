<script lang="ts">

    interface GenItem {
        letter: string,
        p: number,
        index: number
    }

    let tabList = [
        "Generator",
        "Compressor"
    ]

    let generatorList: GenItem[] = [
        {letter: "A", p: 1, index: 0},
        {letter: "B", p: 0.5, index: 1}
    ]

    let possibleLetters = "ABCDEFGHI";

    let selectedTab = "Generator";

    let percentageList = [
        1, 0, 0, 0, 0, 0, 0
    ]

    function generatorAdd(){
        generatorList.push({
            letter: possibleLetters[generatorList.length],
            p: 0
        });
        generatorList = generatorList
    }
    function generatorRemove(){
        let missedP = generatorList.pop().p;
        generatorList.forEach((x)=> {x.p *= (1+missedP)})
        generatorList = generatorList;
    }

</script>

<style>
    div.main {
        height: 80mm;
        width: 60mm;
        background-color: cyan;
    }
    div.tabMenu {
        height: 8mm;
        width: 100%;
        display: flex;
    }
    div.tab {
        padding: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-style: solid;
        border-radius: 0mm 3mm 0mm 0mm;
        cursor: pointer;
    }

    div.letterList {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    div.genRow {
        width: 100%;
        height: 8mm;
        display: flex;
        align-items: center;
    }
    div.genLetter {
        width: 30%
    }
    div.genProb {
        width: 60%
    }
    div.generatorAddAndRemove {
        height: 14mm;
        display:flex;
    }
</style>


<div class="main">
    <div class="tabMenu">
        {#each tabList as tab}
            <div class="tab"
                 style="background-color: {tab===selectedTab? 'green': 'grey'}"
                 on:click={()=>{selectedTab=tab}}>
                {tab}
            </div>
        {/each}
    </div>
    <div class="menu">
        {#if selectedTab=="Generator"}
            <div class="letterList">
                {#each generatorList as item}
                    <div class="genRow">
                        <div class="genLetter">
                            {item.letter}
                        </div>
                        <input type="range" 
                               bind:value={item.p} 
                               on:change={adjustGeneratorProb()}
                               min="0" max="1" step="0.01"/>
                    </div>
                {/each}
            </div>
            <div class="generatorAddRemove">
                <div class="genAdd"
                     on:click={generatorAdd}>
                    +
                </div>
                <div class="genRem"
                     on:click={generatorRemove}>
                    -
                </div>
            </div>
        {/if}
    </div>
</div>