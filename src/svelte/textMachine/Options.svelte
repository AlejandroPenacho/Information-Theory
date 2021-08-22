<script lang="ts">


    interface GenItem {
        letter: string,
        p: number,
        cachedP: number,
        index: number,
        coded: string
    }

    let tabList = [
        "Generator",
        "Encoder"
    ]

    export let generatorList: GenItem[] = [
        {letter: "A", p: 0.5, cachedP: 0.5, index: 0, coded: "0"},
        {letter: "B", p: 0.5, cachedP: 0.5, index: 1, coded: "1"}
    ]

    let possibleLetters = "ABC";

    let possibleEncodings = [["1"], ["0", "1"],["0", "10", "11"]];

    let selectedTab = "Generator";

    let generatorEntropy: number;

    $: generatorEntropy = computeEntropy(generatorList);

    function generatorAdd(){
        generatorList.push({
            letter: possibleLetters[generatorList.length],
            p: 0,
            cachedP: 0,
            index: generatorList.length,
            coded: ""
        });
        resetCoder();

        generatorList = generatorList
    }
    function generatorRemove(){
        let missedP = generatorList.pop().p;
        if (missedP === 1){
            generatorList[generatorList.length - 1].p = missedP;
            generatorList[generatorList.length - 1].cachedP = missedP;
        } else {
            generatorList.forEach((x)=> {x.p *= (1+missedP); x.cachedP = x.p})
        }
        resetCoder();
        generatorList = generatorList;
    }

    function computeEntropy(generatorList: Array<GenItem>){
        return generatorList.reduce((acc,x) => { 
            if (x.p === 0){
                return acc;
            } else {
                return (acc - (x.p * Math.log(x.p)/Math.LN2))
            }
        }, 0);
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

    // Code for the coder

    function resetCoder(){
        let nConf = generatorList.length - 1;
        generatorList.forEach((x, index) => {
            x.coded = possibleEncodings[nConf][index]
        })
    }

    function rotateCoder() {
        let temp = generatorList[0].coded;
        generatorList[0].coded = generatorList[2].coded;
        generatorList[2].coded = generatorList[1].coded;
        generatorList[1].coded = temp;
        generatorList = generatorList;
    }

</script>

<style>
    div.main {
        height: 80mm;
        width: 60mm;
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
    div.menu {
        background-color: var(--color4);
        height: 72mm;
    }

    div.letterList {
        padding: 8%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    div.genRow {
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
        padding: 5% 15% 0% 15%;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    div.generatorAdd {
        width: 40%;
        border-radius: 5mm;
        background-color: chartreuse;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    div.generatorAdd:hover {
        background-color: darkgreen;
    }
    div.generatorRemove {
        width: 40%;
        border-radius: 5mm;
        background-color: darksalmon;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    div.generatorRemove:hover {
        background-color: darkred;
    }
    div.entropyData {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.compressorOptions {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    div.codificationRow {
        display: flex;
        height: 10mm;
        width: 80%;
        margin-bottom: 2mm;
        margin-top: 2mm;
        justify-content: space-evenly;
        background-color: var(--color5);
        border-radius: 3mm;
    }
    div.codInput {
        width: 40%;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    div.codOutput {
        width: 40%;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    div.codArrow {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.codRotator {
        background-color: gold;
        padding: 1em;
        border-radius: 3mm;
        cursor: pointer;
        -moz-user-select: none;
        -webkit-user-select: none;
    }
    div.codRotator:hover {
        background-color: coral;
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
                {#if generatorList.length < possibleLetters.length}
                <div class="generatorAdd"
                     on:click={generatorAdd}>
                    +
                </div>
                {/if}
                {#if generatorList.length > 1}
                <div class="generatorRemove"
                     on:click={generatorRemove}>
                    -
                </div>
                {/if}
            </div>
            <div class="entropyData">
                H = {generatorEntropy.toPrecision(3)}
            </div>

        {:else if selectedTab=="Encoder"}
            <div class="compressorOptions">
            {#each generatorList as item}
                <div class="codificationRow">
                    <div class="codInput">
                        {item.letter}
                    </div>
                    <div class="codArrow">
                        =>
                    </div>
                    <div class="codOutput"> 
                        {item.coded}
                    </div>
                </div>
            {/each}
            {#if generatorList.length===3}
                <div class="codRotator"
                     on:click={rotateCoder}>
                    Change
                </div>
            {/if}
            </div>
        {/if}
    </div>
</div>