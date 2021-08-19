<script lang="ts">
    import Multiplier from "/src/svelte/symbols/Multiplier.svelte"

    export let nextChapter;
    let numbers = [2, 2];
</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px
    }

    span.math {
        font-style: italic;
    }
    div.sideToSide {
        display: flex;
    }
    div.sideToSide div {
        padding-top: 10mm;
        width: 40%;
    }

    /*
    div.multiple-election {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    div.election {
        background-color: var(--color4);
        padding: 10px;
    }
    */
</style>

<div class="main">
    <h1> Symbols and Messages</h1>
    <div class="par">
        From our experience with the smartwatch, it seems a question with 2 possible answers (let's call it 
        a 2-question) can be answered with a symbol with 2 possibilities (like "yes"-"no", let's call it
        a 2-symbol, or binary symbol). Moreover, a 4-question, like the hour or the drink, can be answered 
        with a pair of 2-symbols. And, obviously, a 4-question can also be asnwered with a 4-symbols.
    </div>
    <div class="par">
        Below, you can check how two responses with different number of possibilites generatate a response of
        more possibilities, at the right. You can imagine that we are being asked for a certain point in the 
        grid, and we respond first with the row, and then with the column.
    </div>
    <div class="sideToSide">
        <Multiplier bind:nSelect={numbers}/>
        <div class="par">
            We can combine a <span class="math">{numbers[0]}</span>-symbol with
            a <span class="math">{numbers[1]}</span>-symbol to generate a <span class="math">({numbers[0]}*{numbers[1]}=
            {numbers[0]*numbers[1]})</span>-symbol.
        </div>
    </div>
    <div class="par">
        So, two responses, or symbols, of a certain number can be used to answer a question of a higher number. 
        Also, we can combine more than two symbols: since a pair of 2-symbols are equivalent to a 4-symbol, three 
        2-symbols are like a 4-symbol and a 2-symbol. And this is equivalent to a 8-symbol. You can check above.
        <!-- In information theory, a group of symbols, or responses, constitutes a "message". -->
    </div>
    <div class="nextButton" on:click={nextChapter}>
        Next page
    </div>
</div>