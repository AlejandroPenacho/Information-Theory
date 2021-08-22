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
        margin: 4mm 0mm 4mm 0mm;
        padding: 8mm;
        background-color: var(--color4);
        border-radius: 3mm;
    }

    div.imgPar {
        margin: 0mm 0mm 0mm 10mm;
        width: 80mm;
        font-style: italic;
    }


    div.imageWrap {
        display: flex;
        justify-content: center;
    }

    img {
        height: 70mm;
    }
    img.latex {
        height: 1em;
        transform: translateY(0.2em);
    }

</style>

<div class="main">
    <h1>
       How to measure information? 
    </h1>
    <div class="par">
        As we saw before, the information of, say, a 16-symbol, is equal to 2 different 4-symbols, 
        4 different 2-symbols, or one 2-symbol and one 8-symbol. You can check below how there are 16 
        different combinations that can be done in each way. Click in the number at the left to cycle through 
        them. The coin represents a 2-symbol, the suit a 4-symbol (club, diamond, spade or heart) and the 
        compass, an 8-symbol (N, NW, E, SE, S, SW, W or NW).
    </div>
    <div class="imageWrap">
        <SymbolArray allConfigurations={[[16],[2,2,2,2],[4,4],[2,8]]}/>
    </div>
    <div class="par">
        The fact that the same amount of information can be transmitted in different ways hints that
        there is a measurement of information that would give the same value for the four different 
        possibilities shown above. Also, the information of a message with several symbols should be equal to 
        the sum of the information of each one.
    </div>
    <div class="par">
        This function is the logarithmic function. Specifically, the logarithm in base 2 (ln2) has this shape. 
        The name of this information measure is called <b>entropy</b>, abreviated as <emph>H</emph> and measured 
        in <b>bits</b>. Mathematically, we 
        can describe this relation as: <img class="latex" src="https://latex.codecogs.com/svg.latex?H=log_{2}(N)" alt="H=log_{2}(N)" />, where N is the number of possible symbols (2 for the coin, 4 for the 
        suits, 8 for the compass, etc.).
    </div>
    <div class="imageWrap">
        <img src="/assets/img/plot.png" alt="Plot of the ln2 function"/>
        <div class="imgPar">
            As you can see, a 2-reponse has a value H=1, a 4-symbol has H=2, etc. For the example above, the entropy
            would be equal to 4.
        </div>
    </div>
    <div class="par">
        What happens when we have, for example, a 7-symbol (like a day of the week)?. It's entropy would be 
        2.807, so 2 binary symbols are not enough, and 3 are more than enough. This makes sense: with 3 binary 
        symbols we can specify 8 possibilities, more that we need for the day of the week.
    </div>
    <div class="par">
        One important example of symbols are the characters of written text. In this case, how many possibilites are?
        The english alphabet has 26 letters, but there are also capital letters, punctuation, etc. In any case,
        we can agree one character is a symbol equivalent to several binary simbols, so each one contains a 
        lot of information. Well, not quite, we are still missing something very important.
    </div>
    <div class="nextButton" on:click={nextChapter}>
        Next page
    </div>
</div>