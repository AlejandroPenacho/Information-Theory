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
            text:  `In this game, you can see all the characters in the center, and 
            the possible questions at the right. Each one has one number in it: its entropy. For example,
            look at the question "Has hat?". Only one character has, so...
            As you can see not all are the same. Start by hovering over the question "Wears glasses?".`,
            changeCondition: {type: ww.EventType.hover, trait: ww.Trait.hasGlasses}
        },{
            text: `The response to this question has an entropy of 0.81 bits. Hovering, you can see why. 
            As explained before, each possible output (yes or no) has a probability, depending on the number 
            of characters left on the game that fulfill it. Here, only 2 characters out of 8 wear glasses. Since,
            a priori, all characters has the same chance of being the chose one, the probability of receceiving a 
            "yes" is 2/8, or 25%. As we saw in the previous chapter, a yes provides more entropy, since it 
            crosses out more characters, but is less probable. The opposite happens for the "no". Click to 
            ask that question.`,
            changeCondition: {type: ww.EventType.click, trait: ww.Trait.hasGlasses}
        },{
            text: `So, we got a "no" and still have 6 characters out of 8. This is equivalent to saying that we 
            got an entropy of 0.42 bits.`,
            changeCondition: {type: ww.EventType.hover, trait: ww.Trait.hasShortHair} 
        },{
            text: `Now, let's focus on how the entropy of other questions change when we ask this one. Look 
            at "Has mouth?" (weird question, isn't it?). Right now it has an entropy of 0.65. `,
            changeCondition: {type: ww.EventType.hover, trait: ww.Trait.hasBeard} 
        },{}

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
        <div>
            {stageList[currentStage].text}
        </div>
    </div>
</div>

