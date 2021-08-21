<script lang="ts">

    import {characterList} from "../../ts/whoiswho/characters"
    import * as ww from "../../ts/whoiswho/whoiswho";
    import Face from "/src/svelte/whoiswho/Face.svelte";
    import Question from "/src/svelte/whoiswho/Question.svelte";

    export let sendEvent: (event: ww.Event) => void;

    function getCopyOf(list: ww.Character[]) : ww.Character[] {
        let out = new Array(list.length);
        for (let i=0; i<list.length; i++){
            out[i] = new ww.Character(list[i].allTraitsList, list[i].objective)
        }
        return out
    }

    let game = new ww.WhoIsWho(getCopyOf(characterList));
    let onHover = false;

</script>


<style>
    div.main {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    div.leftZone {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    div.H {
        background-color: var(--color5);
        margin: 5mm;
        padding: 5mm;
        border-radius: 3mm;
    }
    div.charDeck {
        display: flex;
        flex-wrap: wrap;
    }
    div.questionDeck {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
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

<div class="restartButton" on:click={() => {game = new ww.WhoIsWho(getCopyOf(characterList)); 
                                            game.characters = game.characters;
                                            game.questions = game.questions}}>
    Restart
</div>
<div class="main">
    <div class="leftZone">
        <div class="H">
            H = {game.obtainedEntropy.toFixed(2)} / 3
        </div>
        <div class="charDeck">
            {#each game.characters as character}
                <Face character={character} />
            {/each}
        </div>
    </div>

<div class="questionDeck">
    {#each game.questions as question}
        <Question question={question}
                  hovering={onHover}
                  on:mouseenter={()=>{game.assumeTrait(question.trait),
                                      game.computeConditionalEntropies(question.trait);
                                      question.entropy = game.getEntropyDataOfQuestion(question.trait, game.characters);
                                      game=game; 
                                      sendEvent({type: ww.EventType.hover, trait: question.trait})
                                      onHover=true;}}
                  on:mouseleave={()=>{game.assumptionClear();
                                      game.recomputeAllEntropies();
                                      game=game;
                                      onHover=false;}}
                  on:click={()=>{question.obtainedEntropy = question.isTrue?
                                                            question.entropy.entropies[0] :
                                                            question.entropy.entropies[1];
                                 game.obtainedEntropy += question.obtainedEntropy;
                                 game.crossTrait(question.trait);
                                 game.recomputeAllEntropies();
                                 question.blocked = true;
                                 onHover = false;
                                 game.assumptionClear();
                                 sendEvent({type: ww.EventType.click, trait: question.trait})
                                 game=game}}/>
    {/each}
</div>
</div>