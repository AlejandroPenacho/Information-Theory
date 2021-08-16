<script lang="ts">
    import CoinDeck from "/src/svelte/coins/CoinDeck.svelte"
    import Explanation from "/src/svelte/coins/Explanation.svelte"

    export let nextChapter;

    let explanation;
    let isShaded;
</script>

<style>
    div.par {
        margin: 5mm 0mm 5mm 0mm;
    }
    img {
        transform: translateY(1mm)
    }

    div.finalContainer {
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>


<div class="main">
    <div class="par">
        The question now is how to evaluate entropy when the probability of a symbol is not uniform. Below, 
        you can see six different symbols: 5 are binary, and the last one is a 3-symbol. At their side, 
        the probability of of obtaining head (for the 3-response, the probability of obtaining 1, 2 or 3). Click 
        "Roll" to recalculate them. When you are done, click "Reveal".
    </div>
    <CoinDeck bind:isShaded={isShaded} bind:hoveredRow={explanation}/>
    {#if !isShaded}
        <Explanation number={explanation} />
        <div class="par">
            Turns out, all of our messages come from a set of unbiased coins, with which we are already familiar. 
            Depending of the symbol we obtain, we are actually recieving different information, with different value. 
            We can then, consider the information of a symbol as the expected one, considering each possible output. 
            Hover over each row to see an individual explanation.
        </div>
        <div class="par">
            We said before that the entropy of a symbol was calculated as  <img src="https://latex.codecogs.com/svg.latex?log_{2}(N)=log_{2}(1/p)" 
            alt="log_{2}(N)=log_{2}(1/p)" />.
            This was valid when the probability was the same for all outputs. When it is not, the entropy of an output 
            is <img src="https://latex.codecogs.com/svg.latex?log_{2}(1/p_{'{'}i{'}'})"alt="log_{2}(1/p_{'{'}i{'}'})" />, 
            where  <img src="https://latex.codecogs.com/svg.latex?p_{'{'}i{'}'}" alt="p_{'{'}i{'}'}" />
            is the probability of that output. Then, we can sum the entropy of each output times the chance it happens. 
            Examples can be seen hovering over the rows above. The final expression is:
        </div>
        <div class="finalContainer">
            <img src="/assets/svg/H.svg" alt="sum( p_i * log2(1/p_i)" />
        </div>
        <div class="nextButton" on:click={nextChapter}>
            Next page
        </div>
        <div style="height: 20mm"></div>
    {/if}
</div>