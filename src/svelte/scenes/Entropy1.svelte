<script lang="ts">
    import SymbolArray from "/src/svelte/symbols/SymbolArray.svelte";
</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px;
        padding: 8mm;
    }

</style>

<div class="main">
    <h3>
       What is information? 
    </h3>
    <div class="par">
        It seems there is an equivalence between a single message among many possibilities, and several 
        symbols from a smaller set. This allows to define a measure of the information of a single message.
    </div>
    <div class="par">
        As we saw before, the information of, say, a 16-response, is equal to 2 different 4-responses, 
        4 different 2-responses, or one 2-response and one 8-response. You can check below how there is a
        single equivalence.
    </div>
    <SymbolArray allConfigurations={[[2,2,2,2],[4,4],[2,8],[16]]}/>
    <div class="par">
        So, f(2) + f(2) + f(2) + f(2) = f(4) + f(4) = f(2) + f(8) = f(16). There is a function that fulfills 
        this requirement, the logarithmic function. 
    </div>
</div>