<script lang="ts">
    export let number;
</script>

<style>
    div.main {
        background-color: var(--color4);
        margin-top: 8mm;
        padding: 8mm;
        border-radius: 5mm;
        display: flex;
        justify-content: center;
        min-height: 6em;
    }
</style>

<div class="main">
    {#if number===1}
    <div class="text">
        This is simply the output of the first coin, so it transmits as much information as a single coin, that is,
        <span class="H">1</span> bit.
    </div>
    {:else if number===2}
    <div class="text">
        Most of the times (63 out of 64), this will be negative. In that case, the information is little: all
        combinations of coins are possible, except all heads. That corresponds to a small entropy, of <span class="H">0.023</span> bits.
        However, if this coin is positive, we know the state of all coins, that is, <span class="H">6</span> bits. Entropy is, then, 
        <span class="p">63/64</span> * <span class="H">0023</span> + <span class="p">1/64</span> * 
        <span class="H">6</span> = <span class="H">0.116</span> bits.
    </div>
    {:else if number===3}
    <div class="text">
        The chance that the first 3 coins are heads is <span class="p">1/16</span>. This case is similar to the previous one: getting a
        head is complicated (1 out of 8), but in that case, it provides a lot of information, <span class="H">3</span> bits, as we know 
        the first three outputs. Most of the times, however, we will obtain a tail. In that case, we only know that 
        at least one of the three first coins is head, which correspons to a value of information of <span class="H">0.193</span>
        bits. At the end, the entropy of this symbol is <span class="p">1/8</span> * <span class="H">3</span> + 
        <span class="p">7/8</span> * <span class="H">0.193</span> = 0.5435.
    </div>
    {:else if number===4}
    <div class="text">
        This case is similar to the previous one, but now, these 3 coins are not necessarily the first ones. Then, there are 
        more combinations of coins such that we get a head here. The chance of getting a head is 5 out of 16, that is, a 
        probability of <span class="p">5/16</span>. Again, receiving a head gives more information than a tail.
    </div>
    {:else if number===5}
    <div class="text">
        In this case, the probability is the same as in the first case, and so, the entropy is the same, 
        <span class="H">1</span> bit. In the first case, we could point out the value of the first coin from the 
        result, and that is not the case here. How can these two provide the same information? The reason is that there 
        are as many combinations of 6 coins in which 4 or more are positive, as there are combinations in which the first 
        one is head.
    </div>
    {:else if number===6}
    <div class="text">
        In the message, unlike in the previous ones, there are 3 possible outputs. This does not change at all
        the way entropy is analyzed: we just see how much information we receive with each output, and get the 
        expected value. 
        <span class="p">3/16</span> * <span class="H">2.4</span> +
        <span class="p">5/16</span> * <span class="H">1.7</span> +
        <span class="p">1/2</span> * <span class="H">1</span> = <span class="H">1.21</span>
    </div>
    {/if}
</div>