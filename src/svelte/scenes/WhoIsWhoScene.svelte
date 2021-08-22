<script lang="ts">
    import WhoIsWho from "/src/svelte/whoiswho/WhoIsWho.svelte";
    import Instructions from "../whoiswho/Instructions.svelte";

    let changeEvents;
    let unique = {};

    export let nextChapter; 

    let nStages = 7;
    let currentStage = 0;

    function eventFunction(event) {
        if ((changeEvents[currentStage].changeCondition.trait === event.trait) &&
             changeEvents[currentStage].changeCondition.type === event.type){
            currentStage ++;
            currentStage = Math.min(currentStage, nStages-1);
        }
    }
</script>

<style>

    div.mainStage {
        display: flex;
        flex-direction: column;
    }
</style>

<div class="main">
    <h1> Guess Who?</h1>
    <div class="par">
        The concept of information theory and entropy can be found in many aspects of our daily life. One 
        example is the popular game "Guess Who?". If you have never played, it is simple: among the characters
        displayed, the computer has chosen one. You can ask questions about it and, depending on the response, 
        you cross the characters that you know they can't be the chosen one. For example, if you ask whether it 
        has long hair, and you receive a "yes" as an answer, you should cross out characters without long hair.
    </div>
    <div class="par">
        These answers are an example of a binary response, and we need to get one character out of 8, which 
        corresponds to an information of 3 bits (look above the faces). Now follow the instructions.
    </div>
    <Instructions nextChapter={nextChapter} stage={currentStage} bind:stageList={changeEvents}/>
    <div class="mainStage">
        {#key unique}
            <WhoIsWho sendEvent={eventFunction}/>
        {/key}
    </div>
</div>

