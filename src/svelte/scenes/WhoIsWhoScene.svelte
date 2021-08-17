<script lang="ts">
    import WhoIsWho from "/src/svelte/whoiswho/WhoIsWho.svelte";
    import Instructions from "../whoiswho/Instructions.svelte";

    let changeEvents;
    let unique = {};

    

    let nStages = 7;
    let currentStage = 0;

    function restart(){
        unique = {};
    }

    function eventFunction(event) {
        if ((changeEvents[currentStage].changeCondition.trait === event.trait) &&
             changeEvents[currentStage].changeCondition.type === event.type){
            currentStage ++;
            currentStage = Math.min(currentStage, nStages-1);
        }
    }
</script>

<style>
    div.restartButton {
        padding: 2mm;
        width: max-content;
        background-color: chocolate;
        cursor: pointer;
    }
    div.restartButton:hover {
        background-color: crimson;
    }
    div.mainStage {
        display: flex;
        flex-direction: column;
    }
</style>

<div class="main">
    <h1> Who is Who?</h1>
    <div class="par">
        The concept of information theory and entropy can be found in many aspects of our daily life. One 
        example is the popular game "Who is Who?". If you have never played, it is simple: among the characters
        displayed, the computer has chosen one. You can ask questions about it and, depending on the response, 
        you cross the characters that you know they can't be the chosen one. For example, if you ask whether it 
        has long hair, and you receive a "yes" as an answer, you should cross out characters without long hair.
    </div>
    <div class="par">
        These answers are an example of a binary response. And so, we get back to our familiar setting.
    </div>
    <div class="restartButton"
        on:click={restart}>
        Restart
    </div>

    <div class="mainStage">
        {#key unique}
            <WhoIsWho sendEvent={eventFunction}/>
        {/key}
        <Instructions stage={currentStage} bind:stageList={changeEvents}/>
    </div>
</div>

