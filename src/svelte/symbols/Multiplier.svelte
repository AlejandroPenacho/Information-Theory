<script lang="ts">
    export let nSelect = [2, 2];
    let selectedPoint = [1,1];

    let maxVal = 7;


    function changeRow(newRow){
        selectedPoint[0] = newRow;
        selectedPoint = selectedPoint;
    }

    function changeColumn(newCol){
        selectedPoint[1] = newCol;
        selectedPoint = selectedPoint;
    }
</script>

<style>
    div.main {
        margin-top: 8mm;
        padding: 4mm;
        display: grid;
        grid-template-columns: 3cm 3cm 3cm;
        grid-template-rows: 14mm 3cm;
        background-color: var(--color4);
        border-radius: 4mm;
        width: max-content;
    }
    div.number-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: var(--color5);
        border-radius: 5mm 0mm 0mm 5mm;
    }
    div.number-2 {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        justify-content:space-evenly;
        background-color: var(--color5);
    }
    div.number-3 {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color5);
        border-radius: 0mm 5mm 5mm 0mm;
    }
    div.grid-1 {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div.grid-2 {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    div.grid-3 {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div.eachCol {
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    div.miniblock {
        width: 0.3cm;
        height: 0.3cm;
        background-color: white;
        border-color: black;
        border-width: 2px;
        border-style: solid;
        cursor: pointer;
    }
    div.miniblock:hover {
        background-color: chartreuse;
    }

    div.clickBlock {
        background-color: var(--color4);
        cursor: pointer;
        width: 6mm;
        height: 6mm;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.clickBlock:hover {
        background-color: var(--color2);
    }
    div.clickBlock#left {
        border-radius: 3mm 0mm 0mm 3mm ;
    }
    div.clickBlock#right {
        border-radius: 0mm 3mm 3mm 0mm ;
    }

</style>

<div class="main">
    <div class="number-1">
        <div class="clickBlock" id="left"
             on:click={()=> {nSelect[0] = Math.max(nSelect[0]-1, 1)}}>
            &lt
        </div>
        {nSelect[0]}
        <div class="clickBlock" id="right"
             on:click={()=> {nSelect[0] = Math.min(nSelect[0]+1, maxVal)}}>
            &gt
        </div>
    </div>
    <div class="number-2">
        <div class="clickBlock" id="left"
             on:click={()=> {nSelect[1] = Math.max(nSelect[1]-1, 1)}}>
            &lt
        </div>
        {nSelect[1]}
        <div class="clickBlock" id="right"
             on:click={()=> {nSelect[1] = Math.min(nSelect[1]+1, maxVal)}}>
            &gt
        </div>
    </div>
    <div class="number-3">
        {nSelect[0]*nSelect[1]}
    </div>
    <div class="grid-1">
        {#each [...Array(nSelect[0]).keys()] as index}
            <div class="miniblock"
                 style="background-color: {(selectedPoint[0]===index)? "green": "white"}"
                 on:click={() => changeRow(index)}>
            </div>
        {/each}
    </div>
    <div class="grid-2">
        {#each [...Array(nSelect[1]).keys()] as index}
            <div class="miniblock"
                 style="background-color: {(selectedPoint[1]===index)? "green": "white"}"
                 on:click={() => changeColumn(index)}>
            </div>
        {/each}
    </div>
    <div class="grid-3">
        {#each [...Array(nSelect[0]).keys()] as index1}
            <div class="eachCol">
                {#each [...Array(nSelect[1]).keys()] as index2}
                    <div class="miniblock"
                         style="background-color: {(selectedPoint[0]===index1 &&
                                                    selectedPoint[1]===index2)? "green" : "white"}"
                         on:click={()=>{changeRow(index1); changeColumn(index2)}}>

                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>