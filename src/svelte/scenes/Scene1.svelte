<script lang="ts">
    import SymbolEq from "/src/svelte/SymbolEq.svelte";
</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px
    }

</style>

<div class="main">
    <h3>
       What is information? 
    </h3>
    <div class="par">
        Information (or communication) is a sequence of symbols from a given set. Nothing else. When you read,
        you receive characters. These characters are all in a group of all possible characters: letters,
        numbers, signs of punctuation, etc.
    </div>
    <div class="par"> 
        Knowing this, our first aproach towards measuring information would be to consider the amount of
        information is proportional to the number of symbols you receive. Three letters convey more information
        than two.
    </div>
    <div class="par">
        However, is not the same a communication consisting on 4 different symbols that on 8. We would expect
        the second one to transmit more information for each symbol than the first one. Actually, 1 symbol of a
        group of 8 is equivalent to 2 symbols of 4, and 3 symbols of 2, as can be seen below.
    </div>
    <SymbolEq configurationList={[16,8,4,2]} value={7}/>
</div>