<script lang="ts">

    import { onMount } from "svelte";
    import Watch from "/src/svelte/watch/Watch.svelte"

    let sendWatchMessage;

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