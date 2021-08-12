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
</style>

{#if number===1}
    This the entropy of a single coin which, as a binary option (head or tail), has an entropy of 1
{:else if number===2}
    Most of the times (63 out of 64), this will be negative. In that case, the information is little: all
    combinations of coins are possible, except all heads. That corresponds to a small entropy, of 0.023.
    However, if this coin is positive, we know the state of all coins, that is, 6 bits. Entropy is, then, 
    <span class="p">63/64</span> * <span class="H">0023</span> + <span class="p">1/64</span> * 
    <span class="H">6</span> = <span class="H">0.116</span>
{:else if number===3}
    The chance that the first 3 coins are heads is 1/16. This case is similar to the previous one: getting a
    head is complicated (1 out of 16), but in that case, it provides a lot of information, 3 bytes.
{:else if number===4}
    The chance that 3 coins etc.

{:else if number===5}
    Again, we have 0.5

{/if}