<script lang="ts">
    export let number;
</script>

<style>
    span.p {
        color: brown;
    }
    span.H {
        color:cyan
    }
    div.main {
        height: 30mm
    }
</style>

<div class="main">
    {#if number===1}
        This is simply the output of the first coin, so it transmits as much information as a single coin, that is,
        <span class="H">1</span> bit.
    {:else if number===2}
        Most of the times (63 out of 64), this will be negative. In that case, the information is little: all
        combinations of coins are possible, except all heads. That corresponds to a small entropy, of <span class="H">0.023</span> bits.
        However, if this coin is positive, we know the state of all coins, that is, <span class="H">6</span> bits. Entropy is, then, 
        <span class="p">63/64</span> * <span class="H">0023</span> + <span class="p">1/64</span> * 
        <span class="H">6</span> = <span class="H">0.116</span> bits.
    {:else if number===3}
        The chance that the first 3 coins are heads is 1/16. This case is similar to the previous one: getting a
        head is complicated (1 out of 16), but in that case, it provides a lot of information, 3 bits, as we know 
        the first three outputs. Most of the times, however, this will be negative. In that case, we only know that 
        at least one of the three first coins is head, which correspons to a value of information of <span class="H">0.093</span>
        bits. At the end,
        the entropy of this symbol is <span class="p">1/16</span>
    {:else if number===4}
        This case is similar to the previous one, but now, these 3 coins are not necessarily thre first ones. Then, there are 
        more combinations of coins such that this symbols is positive.
    {:else if number===5}
        Again, we have 0.5
    {:else if number===6}
        For this case, where there are 3 possible asnwers, the entropy is obtained in the same way. 
        <span class="p">x</span> * <span class="H">x</span> +
        <span class="p">x</span> * <span class="H">x</span> +
        <span class="p">x</span> * <span class="H">x</span> = <span class="H"> X</span>
    {/if}
</div>