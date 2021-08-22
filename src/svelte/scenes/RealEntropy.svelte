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
    <h1>
        The real entropy
    </h1>
    <div class="par">
        The question now is how to evaluate entropy when the probability of a symbol is not uniform. Below, 
        you can see six different symbols: 5 are binary, and the last one is a 3-symbol. However, the probability of each 
        output is not the same. Next to the coins you can see the chance of obtaining head. And for the dice, the chance 
        of obtaining 1, 2 and 3. Click "Roll" to reroll them. When you are done, click "Reveal".
    </div>
    <CoinDeck bind:isShaded={isShaded} bind:hoveredRow={explanation}/>
    {#if !isShaded}
        <Explanation number={explanation} />
        <div class="par">
            Turns out, all of our messages come from a set of unbiased coins, with which we are already familiar. 
            Depending of the symbol we obtain, we are actually receiving different information, with different value. 
            We can then, consider the information of a symbol as the expected one, considering each possible output. 
            Hover over each row to see an individual explanation.
        </div>
        <div class="par">
            We said before that the entropy of a symbol was calculated as  <img src="https://latex.codecogs.com/svg.latex?H=log_{2}(N)=log_{2}(1/p)" 
            alt="log_{2}(N)=log_{2}(1/p)" />.
            This was valid when the probability was the same for all outputs. When it is not, the entropy of an output 
            is <img src="https://latex.codecogs.com/svg.latex?log_{2}(1/p_{'{'}i{'}'})"alt="log_{2}(1/p_{'{'}i{'}'})" />, 
            where  <img src="https://latex.codecogs.com/svg.latex?p_{'{'}i{'}'}" alt="p_{'{'}i{'}'}" />
            is the probability of that output. Then, we can sum the entropy of each output times the chance it happens. 
            Examples can be seen hovering over the rows above. The final expression is:
        </div>
        <div class="finalContainer">
            <img src="./assets/svg/H.svg" alt="sum( p_i * log2(1/p_i)" />
        </div>
        <div class="par">
            Note that when all outputs have the same chance, we obtain our previous formula: <img src="https://latex.codecogs.com/svg.latex?H=log_{2}(1/p)" 
            alt="log_{2}(N)=log_{2}(1/p)"/>.
        </div>
        <div class="par">
            As you could see in the previous page, written text is a good example of a message where symbols have 
            very different probabilities. Remember when we said there are at least 27 different symbols in English text? 
            This would correspond to an entropy above 4.7. However, since you can usually predict which letter follows in a 
            text, entropy of English language is around 4.
        </div>
        <div class="par">
            This affects the mean length of the words. In a languages in which all combinations of letters would be valid,
            the 520,000 words in the English Wiktionary could all be written using always less than 5 letter. 
            The dictionary would then start with these words: "a", "aa", "aaa", "aaaa", "aaaaa", "aaaab", etc.
            However, writing incorrectly one character would totally change the meaning of the word.
        </div>
        <div class="nextButton" on:click={nextChapter}>
            Next page
        </div>
        <div style="height: 20mm"></div>
    {/if}
</div>