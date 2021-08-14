<script lang="ts">


    interface GenItem {
        letter: string,
        p: number,
        cachedP: number,
        index: number
    }

    let tabList = [
        "Generator",
        "Compressor"
    ]

    let generatorList: GenItem[] = [
        {letter: "A", p: 0.5, cachedP: 0.5, index: 0},
        {letter: "B", p: 0.5, cachedP: 0.5, index: 1}
    ]

    let possibleLetters = "ABCDEFGHI";

    let selectedTab = "Generator";

    let generatorEntropy: number;

    $: generatorEntropy = computeEntropy(generatorList);

    function generatorAdd(){
        generatorList.push({
            letter: possibleLetters[generatorList.length],
            p: 0,
            cachedP: 0,
            index: generatorList.length
        });

        generatorList = generatorList
    }
    function generatorRemove(){
        let missedP = generatorList.pop().p;
        if (missedP === 1){
            generatorList[generatorList.length - 1].p = missedP;
            generatorList[generatorList.length - 1].cachedP = missedP;
        } else {
            generatorList.forEach((x)=> {x.p *= (1+missedP); x.cachedP = x.p})
            generatorList = generatorList;
        }
    }

    function computeEntropy(generatorList: Array<GenItem>){
        return generatorList.reduce((acc,x) => acc + x.p * Math.log(x.p)/Math.LN2, 0)
    }

    function adjustGeneratorProb(adjItem: GenItem){
        return () => {
            let pOutsideAdj = 1 - adjItem.cachedP;
            let deltaP = adjItem.p - adjItem.cachedP;
            adjItem.cachedP = adjItem.p;
            if (pOutsideAdj !== 0){
                generatorList.forEach((item)=>{
                    if (item.index !== adjItem.index){
                        item.p -= deltaP * item.p / pOutsideAdj;
                        item.cachedP = item.p;
                    }
                })
            } else {
                generatorList.forEach((item)=>{
                    if (item.index !== adjItem.index){
                        item.p -= deltaP / (generatorList.length-1);
                        item.cachedP = item.p;
                    }
                })
            }
            adjItem = adjItem;
            generatorList = generatorList;
        }
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
    div.generatorAddRemove {
        height: 14mm;
        display:flex;
        align-items: center;
        justify-content: space-between;
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
                               on:input={adjustGeneratorProb(item)}
                               min="0" max="1" step="0.01"/>
                        <div class="prob">
                            {item.p.toPrecision(2)}
                        </div>
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
            {generatorEntropy.toPrecision(3)}
        {/if}
    </div>
</div>