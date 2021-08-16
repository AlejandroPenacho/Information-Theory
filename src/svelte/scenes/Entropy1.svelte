<script lang="ts">
    import SymbolArray from "/src/svelte/symbols/SymbolArray.svelte";

    export let nextChapter;
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

    div.imageWrap {
        display: flex;
        justify-content: center;
    }

    img {
        height: 70mm;
    }

</style>

<div class="main">
    <h3>
       What is information? 
    </h3>
    <div class="par">
        As we saw before, the information of, say, a 16-response, is equal to 2 different 4-responses, 
        4 different 2-responses, or one 2-response and one 8-response. You can check below how there is a
        single equivalence.
    </div>
    <div class="imageWrap">
        <SymbolArray allConfigurations={[[2,2,2,2],[4,4],[2,8],[16]]}/>
    </div>
    <div class="par">
        The fact that the same amount of information can be transmitted in different ways hints that
        there is a measurement of information that would give the same value for the four different 
        possibilities shown above. Also, the information of a message with several symbols is equal to 
        the sum of the information of each one.
    </div>
    <div class="par">
        This function is the logarithmic function. Specifically, the logarithm in base 2 (ln2) has this shape.
    </div>
    <div class="imageWrap">
        <img src="/assets/img/plot.png" alt="Plot of the ln2 function"/>
    </div>
    <div class="par">
        What happens when we have, for example, a 7-response (like a day of the week). It's entropy would be 
        2.807, so 2 binary responses are not enough, and 3 are more than enough. 
    </div>
    <div class="par">
        One last example of symbol is the characters of writter text. In this case, how many possibilites are?
        The english alphabet has 26 letters, but there are also capital letters, punctuation, etc. In any case,
        we can agree one character is a symbol equivalent to several binary simbols, so each one contains a 
        lot of information. Well, not quite, we are still missing something.
    </div>
    <div class="nextButton" on:click={nextChapter}>
        Next page
    </div>
</div>