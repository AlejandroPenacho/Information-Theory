<script lang="ts">
    import * as ww from "../../ts/whoiswho/whoiswho"

    export let stage;

    interface Stage {
        index: number,
        changeCondition: ww.Event
    }
    
    export const stageList: Stage[] = [
        {
            index: 1,
            changeCondition: {type: ww.EventType.hover, trait: ww.Trait.hasGlasses}
        },{
            index: 2,
            changeCondition: {type: ww.EventType.click, trait: ww.Trait.hasGlasses}
        },{
            index: 3,
            changeCondition: {type: ww.EventType.hover, trait: ww.Trait.hasShortHair} 
        },{
            index: 4,
            changeCondition: {type: ww.EventType.hover, trait: ww.Trait.hasBeard} 
        }
    ]
</script>

{#if stage===0}
<div class="text">
    In this game, you can see all the characters in the center, and 
    the possible questions at the right. Each one has one number in it: its <b>entropy</b>. For example,
    look at the question "Has hat?". Only one character has, so...
    As you can see not all are the same. Start by <b>hovering</b> over the question <b>"Wears glasses?"</b>.
   
</div>
{:else if stage===1}
<div class="text">
    The response to this question has an entropy of <span class="H">0.81</span> bits. Hovering, you can see why. 
    As explained before, each possible output (yes or no) has a probability, depending on the number 
    of characters left on the game that fulfill it. Here, only 2 characters out of 8 wear glasses. Since,
    a priori, all characters has the same chance of being the chose one, the probability of receceiving a 
    "yes" is 2/8, or <span class="p">25 %</span>. As we saw in the previous chapter, a yes provides more entropy, since it 
    crosses out more characters, but is less probable. The opposite happens for the "no". Click to 
    ask that question.
</div>
{:else if stage===2}
<div class="text">
    So, we got a "no" and still have 6 characters out of 8. This is equivalent to saying that we 
    got an entropy of 0.42 bits.
</div>
{:else if stage===3}
<div class="text">
    Now, let's focus on how the entropy of other questions change when we ask this one. Look 
    at "Has mouth?" (weird question, isn't it?). Right now it has an entropy of 0.65. 
</div>
{:else if stage===4}

{:else if stage===5}

{/if}