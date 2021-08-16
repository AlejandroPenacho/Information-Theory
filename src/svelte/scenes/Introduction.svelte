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
    <h1> What is Information Theory</h1>
    <div class="par">
        From our experience with the smartwatch, it seems a question with 2 possible answers (let's call it 
        a 2-question) can be answered with a response with 2 possibilities (like "yes"-"no", let's call it
        a 2-response). Moreover, a 4-question, like the hour or the drink, can be answered with a pair of 
        2-responses. And, obviously, a 4-question can also be asnwered with a 4-response.
    </div>
    <div class="par">
        Below, you can check how two responses with different number of possibilites generatate a response of
        more possibilities, at the right. You can imagine that we are being asked for a certain point in the 
        grid, and we respond first with the row, and then with the column.
    </div>
    <div class="sideToSide">
        <Multiplier bind:nSelect={numbers}/>
        <div class="par">
            We can combine a <span class="math">{numbers[0]}</span>-response with
            a <span class="math">{numbers[1]}</span>-response to generate a <span class="math">({numbers[0]}*{numbers[1]}=
            {numbers[0]*numbers[1]})</span>-response.
        </div>
    </div>
    <div class="par">
        So, two responses of a certain number can be used to answer a question of a higher number. In information 
        theory, we call each response a "symbol", and a group of symbols constitutes a "message".
    </div>
    <div class="nextButton" on:click={nextChapter}>
        Next page
    </div>
</div>