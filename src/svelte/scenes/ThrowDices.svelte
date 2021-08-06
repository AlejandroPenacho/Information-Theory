<script lang="ts">
    import DiceDeck from "/src/svelte/dice/DiceDeck.svelte";
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
    <h1> Chances In The Long Run</h1>
    <div class="par">
        Okay, now something a bit different. Let's say we have a random process, like throwing dice.
        This process is perfectly random, and even when the dice are tricked, we can not know which number 
        we will get.
    </div>
    <div class="par">
        Now, what happens if instead of one, we throw 10 dice? 100? 1000? You can check below as much as you want.
        Look carefully at the graph showing the proportionality of results.
    </div>
    <DiceDeck />
</div>
