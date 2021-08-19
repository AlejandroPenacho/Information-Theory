<script lang="ts">

    interface LetterRow {
        letter: string,
        p: number,
        cachedP: number
    }

    export let letterTable : LetterRow[] = [
        {letter: "a", p: 1/3, cachedP: 1/3},
        {letter: "b", p: 1/6, cachedP: 1/6},
        {letter: "c", p: 1/6, cachedP: 1/6},
        {letter: "d", p: 1/6, cachedP: 1/6},
        {letter: "e", p: 1/6, cachedP: 1/6}
    ];
    
    function adjustGeneratorProb(letterRow: LetterRow){
        return () => {
            let pOutsideAdj = 1 - letterRow.cachedP;
            let deltaP =letterRow.p -letterRow.cachedP;
            letterRow.cachedP =letterRow.p;
            if (pOutsideAdj !== 0){
                letterTable.forEach((item)=>{
                    if (item.letter !== letterRow.letter){
                        item.p -= deltaP * item.p / pOutsideAdj;
                        item.cachedP = item.p;
                    }
                })
            } else {
                letterTable.forEach((item)=>{
                    if (item.letter !== letterRow.letter){
                        item.p -= deltaP / (letterTable.length-1);
                        item.cachedP = item.p;
                    }
                })
            }
            letterTable = letterTable;
        }
    }


</script>

<style>
    div.main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    div.row {
        display: flex;
        align-items: center;
    }
</style>

<div class="main">
    {#each letterTable as row}
        <div class="row">
            <div class="letter">
                {row.letter}
            </div>
            <input type="range" bind:value={row.p} min=0 max=1 step=0.01 
                   on:input={adjustGeneratorProb(row)}/>
        </div>
    {/each}
</div>