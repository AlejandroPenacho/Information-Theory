<script lang="ts">
    import * as ww from "../../ts/whoiswho/whoiswho"

    export let stage;
    export let nextChapter;

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
            changeCondition: {type: ww.EventType.click, trait: ww.Trait.hasShortHair} 
        },{
            index: 5,
            changeCondition: {type: ww.EventType.click, trait: ww.Trait.hasNose} 
        },{
            index: 6,
            changeCondition: {type: ww.EventType.click, trait: ww.Trait.hasEyes} 
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
    So, we got a <b>"no"</b> and still have 6 characters out of 8. This is equivalent to saying that we 
    got an entropy of <span class="H">0.42</span> bits.
    Now, let's focus on how the entropy of other questions change when we ask this one. Look 
    at "Has mouth?" (weird question, isn't it?). Right now it has an entropy of <span class="H">0.65</span>. 
    Now, look at the question <b>"Has short hair?"</b>. This question has an entropy of 1, which is the 
    maximum you can expect from a binary question. This is because both possible outputs are equally probable.
    <b>Hover</b> over the question.
</div>
{:else if stage===3}
<div class="text">
    Depending on what answer you get, the entropy of the question <b>"Has mouth?"</b> will change. For example,
    if our objective has short hair, the three remaining characters will have mouth, and this question will 
    become pointless, that is, it loses all its entropy. However, if the objective does not have short hair, 
    the entropy of the <b>"Has mouth?"</b> question will increase. In average, however, this entropy will 
    decrease (the average is the number in the middle). This is an important result: the entropy of two 
    symbols combined will always be smaller or equal than these symbols by themselves. This is beacuse 
    receiving one symbol (like the answer to one question here) gives information about the next one, unless 
    they are not related. Now click on the <b>"Has short hair?"</b> question.
</div>
{:else if stage===4}
    <div class="text">
        Now there are several useless questions, such as <b>"Has moustache?"</b>, because neither of the 
        remaining characters have. The other questions have an entropy of <span class="H">0.92</span>, as 
        all of them can decrease the number of remaining characters to 1 or 2, depending on the answer. Click 
        on <b>"Has nose?"</b>.
    </div>
{:else if stage===5}
    <div class="text">
        Look at the left: we have 3 bits out of the required 4 to win the game! One bit corresponds to a binary 
        question and, as you can see, that's what we need, since there are only two characters left. 
    </div>
{:else if stage===6}
    <div class="nextButton" on:click={nextChapter}>
        Next page
    </div>
{/if}