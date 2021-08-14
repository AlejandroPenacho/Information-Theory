<script lang="ts">
    import Machine from "/src/svelte/textMachine/Machine.svelte";
    import Options from "/src/svelte/textMachine/Options.svelte";

    let generatorData;
</script>

<Machine generatorData={generatorData}/>
<Options bind:generatorList={generatorData}/>