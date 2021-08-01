<script lang="ts">
    import SymbolEq from "/src/svelte/symbols/SymbolEq.svelte";

    let value : number = 0;

    export let allConfigurations : number[][];

    let nGroups = allConfigurations.length;

    let allConfigurationsKeyed : Array<[number,number[]]> = new Array(nGroups);

    for (let i=0; i<nGroups; i++){
        allConfigurationsKeyed[i] = [i, allConfigurations[i]];
    }

    let valueChange = (newValue) => {
        value = newValue;
    }
</script>

<style>
    div.main {
        display: flex;
    }
    div.sep {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<div class="main">
    <SymbolEq configurationList={allConfigurations[0]} value={value} valueChange={valueChange} />
    {#each allConfigurations.slice(1) as configuration}
        <div class="sep"> = </div>
        <SymbolEq configurationList={configuration} value={value} valueChange={valueChange} />
    {/each}
</div>

