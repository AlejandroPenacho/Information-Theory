<script lang="ts">

    import { onMount } from "svelte";
    import Watch from "/src/svelte/watch/Watch.svelte"

    let sendWatchMessage;

    let instructionText: Array<string> = [
        `First of all, answering yes or no questions in this device is no problem, as you can see. 
        You can respond just by pressing the two buttons at the bottom.`,
        `There are, however, simple questions that at first can not be answered. However, if your 
        friend and you agree in a simple format, as here, everything works fine.`,
        `So, binary questions can be easily answered here. But what about harder questions?`,
        `Ah! When there are four possibilities, two binary answers seem to be enough. Great!`,
        `Your friend and you can agree in an uniform method for 4-questions, like: 1st no-no, 
        2nd yes-no, 3rd no-yes and 4th yes-yes.`
    ]

    let inMessages: Array<string> = [
        `Heyy! Are you finally coming to dinner tonigh?`,
        `Ok, I'll buy pizzas? Do you prefer ham or pineapple?`,
        `Oh, right. Say yes for ham, no for pineapple`,
        `Perfect!`,
        `At which hour should we meet?`,
        `Mmmmh. 20.00, 20.30, 21.00 or 21.30?`,
        `Okay, yes for 20 and no for 21`,
        `And yes for .00 and no for .30`,
        `And for the drinks: water, coke, nestea or orange juice`
    ]

    onMount(() => sendWatchMessage("Te vienes?"))
</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px
    }
    div.main-scene {
        margin-top: 30px;
        padding: 10px;
        display: grid;
        grid-template-columns: 60% 40%;
    }
</style>

<div class="main">
    <h1> The Problem With The New Smartwatch</h1>
    <div class="par">
        By pure luck, you have been rewarded with the newest smartwatch on the market, and it takes you
        just a couple of hours to start using it for everything. This is in general much more convenient
        that using your phone, except for answering messages. Since the screen is so small, you can only
        answer with "yes" and "no". 
    </div>
    <div class="main-scene">
        <div class="text">
            Here is your phone, as you can see
        </div>
        <Watch bind:receiveMessage={sendWatchMessage} />
    </div>
</div>