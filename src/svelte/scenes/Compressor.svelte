<script lang="ts">
    import Instruction from "../textMachine/Instruction.svelte";
    import Machine from "/src/svelte/textMachine/Machine.svelte";
    import Options from "/src/svelte/textMachine/Options.svelte";

    let generatorData;
</script>

<style>
    div.theZone {
        display: flex;

    }
</style>

<div class="main">
    <div class="theZone">
        <Machine generatorData={generatorData}/>
        <Options bind:generatorList={generatorData}/>
    </div>
    <Instruction />
</div>