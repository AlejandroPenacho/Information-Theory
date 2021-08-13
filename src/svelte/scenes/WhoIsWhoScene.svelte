<script lang="ts">
    import WhoIsWho from "/src/svelte/whoiswho/WhoIsWho.svelte";
    import * as ww from "../../ts/whoiswho/whoiswho"

    let unique = {};

    interface Stage {
        text: string,
        changeCondition: ww.Event
    }

    let nStages = 2;
    let currentStage = 0;


    let stageList: Stage[] = [
        {
            text:  `First, take a look at the entropy value of 'Has long hair?'. 
                    Start by hovering over the question 'Has eyes?'. As you can 
                    see, its entropy (0.81) is relatively high.`,
            changeCondition: {type: ww.EventType.hover, trait: ww.Trait.hasEyes}
        },{
            text: `Now, jump`,
            changeCondition: {type: ww.EventType.hover, trait: ww.Trait.hasEyes}
        }
    ]



    function restart(){
        unique = {};
    }

    function eventFunction(event) {
        console.log(event)
        console.log(stageList[currentStage].changeCondition)
        if ((stageList[currentStage].changeCondition.trait === event.trait) &&
             stageList[currentStage].changeCondition.type === event.type){
            currentStage ++;
            currentStage = Math.max(currentStage, nStages-1);
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
</style>

<div class="restartButton"
     on:click={restart}>
    Restart
</div>

{#key unique}
    <WhoIsWho sendEvent={eventFunction}/>
{/key}

<div>
    {stageList[currentStage].text}
</div>