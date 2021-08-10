<script lang="ts">
    let nSelect = [2, 2];
    let selectedPoint = [1,1];


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
        display: grid;
        grid-template-columns: 3cm 3cm 3cm;
        grid-template-rows: 2cm 3cm;
    }
    div.number-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    div.number-2 {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        justify-content:space-evenly;
    }
    div.number-3 {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        justify-content: center;
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

    div.clickBlock {
        background-color: var(--color5);
        cursor: pointer;
    }
</style>

<div class="main">
    <div class="number-1">
        <div class="clickBlock"
             on:click={()=> {nSelect[0]--; nSelect=nSelect}}>
            &lt
        </div>
        {nSelect[0]}
        <div class="clickBlock"
             on:click={()=> {nSelect[0]++; nSelect=nSelect}}>
            &gt
        </div>
    </div>
    <div class="number-2">
        <div class="clickBlock"
             on:click={()=> {nSelect[1]--; nSelect=nSelect}}>
            &lt
        </div>
        {nSelect[1]}
        <div class="clickBlock"
             on:click={()=> {nSelect[1]++; nSelect=nSelect}}>
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