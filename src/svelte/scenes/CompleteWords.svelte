<script lang="ts">
    import ExampleProblems from "./ExampleProblems.svelte";
    import FillWord from "/src/svelte/fillWord/FillWord.svelte";
    import FillWordButton from "/src/svelte/fillWord/FillWordButton.svelte"

    export let nextChapter;
</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px
    }
    div.sentence {
        text-align: center;
        font-size: xx-large;
        padding-top: 0.4cm;
        padding-bottom: 0.4cm;
    }
    span.q{
        color: chartreuse;
    }

    div.theStuff {
        background-color: var(--color4);
        border-radius: 3mm;
        margin: 8mm;
        padding: 6mm;
        display: grid;
        grid-template-columns: 40% auto;
    }
    div.allSen {
        background-color: var(--color4);
        border-radius: 3mm;
        margin-top: 5mm;
        margin-bottom: 8mm;
    }
</style>

<div class="main">
    <h1>Unequal probabilities</h1>
    <div class="par">
        Check now the following sentences. All of them are missing one character (?), can you guess which one?
    </div>
    <div class="allSen">
        <div class="sentence">
            I have found a c<span class="q">?</span>in under the desk
        </div>
        <div class="sentence">
            This sh<span class="q">?</span>p is wonderful
        </div>
        <div class="sentence">
            I call at my number: 923 273 4<span class="q">?</span>8
        </div>
    </div>
    <div class="par">
        Probably you have guessed the first one. The second one, however, is not clear: could be either 'o' or 'i'.
        And for the third one, any number would be right.
    </div>
    <div class="par">
        So far, we have talked about information without considering the probability of each response. But now,
        we can agree that receiving the missing letter of the first sentence would be pointless: we can guess it.
        For the third sentence, however, we only now it is a number.
    </div>
    <div class="par">
        It would be reasonable, then, to think that the information value of the missing character in the first 
        sentence is greater than in the second, and smaller in the third. But how to quantify that value?. Look 
        at the next example.
    </div>
    <div class="theStuff">
        <div class="par">
            In this message, you can receive an A, B, C or D. However, the A has a chance of 50 %, while the 
            B, C and D have a chance of 16.6 %, or 1/6. 
        </div>
        <img src="./assets/svg/example.svg" alt="Hard to summarize this with text :/"/>
    </div>
    <div class="par">
        When we receive an A, which is half of the times, we receive the equivalent to a binary decision. Looking 
        throwing a coin. And this has an entropy of 1. The other half, we have to also obtain a 3-symbol to determine
        whether we receive a B, a C or a D. The entropy of such a symbol would be 1.585, but we only receive it half 
        the times. So, half the times we receive a 2-symbol, and the other half a 2-symbol followed by a 3-symbol. 
        Then, by mean, how much information do we receive? We just do the mean: 50% * 1 + 50% * (1+1.585) = 1.7925.
    </div>
    <div class="par">
        There is one important thing to say before continuing: we have more entropy if all outputs are equally probable, since in that case 
        we can not expect anything for the next symbol.
    </div>
    <div class="nextButton" on:click={nextChapter}>
        Next page
    </div>
</div>