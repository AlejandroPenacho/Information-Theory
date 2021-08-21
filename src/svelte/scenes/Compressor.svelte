<script lang="ts">
    import Instruction from "../textMachine/Instruction.svelte";
    import Machine from "/src/svelte/textMachine/Machine.svelte";
    import Options from "/src/svelte/textMachine/Options.svelte";

    let generatorData;
</script>

<style>
    div.theZone {
        display: flex;
        margin: 15mm 0mm 0mm 5mm;

    }
    div.par {

    }
</style>

<div class="main">
    <h1>Compression of data</h1>
    <div class="par">
        Here is a small compression system to transmit messages. At the top right, a sequence of characters is 
        sent to the bottom left block. One of the lines, the inner one, is not codified. The outer one, meanwhile,
        is: characters are translated to 0 and 1 in the middle. There are also two counters, that indicate the number 
        of characters that cross each line per second.
    </div>
    <div class="par">
        As explained before, the fact that the different symbols of a message usually have different probabilities can 
        be exploited in order to compress this messages.
    </div>
    <div class="theZone">
        <Machine generatorData={generatorData}/>
        <Options bind:generatorList={generatorData}/>
    </div>
    <Instruction />
</div>