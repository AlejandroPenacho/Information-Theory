<script lang="ts">

    import * as ww from "../../ts/whoiswho/whoiswho";
    import Face from "/src/svelte/whoiswho/Face.svelte"
    import Question from "/src/svelte/whoiswho/Question.svelte"

    let characters = [
        new ww.Character([
            ww.Trait.hasEyes, ww.Trait.hasNose,
            ww.Trait.hasMouth, ww.Trait.hasShortHair
        ], false),
        new ww.Character([
            ww.Trait.hasEyes, ww.Trait.hasNose,
            ww.Trait.hasMouth, ww.Trait.hasLongHair
        ], true),
        new ww.Character([
            ww.Trait.hasNose,
            ww.Trait.hasMouth, ww.Trait.hasLongHair
        ], false),
        new ww.Character([
            ww.Trait.hasEyes, ww.Trait.hasNose,
            ww.Trait.hasMouth, ww.Trait.isBald,
            ww.Trait.hasBeard, ww.Trait.hasGlasses
        ], false)
    ]

    let game = new ww.WhoIsWho(characters);
    let onHover = false;

</script>


<style>
    div.charDeck {
        display: flex;
    }
    div.questionDeck {
        display: flex;
        width: 80%;
        flex-wrap: wrap;
    }
</style>

<div class="charDeck">
    {#each game.characters as character}
        <Face character={character} />
    {/each}
</div>

<div class="questionDeck">
    {#each game.questions as question}
        <Question question={question}
                  hovering={onHover}
                  on:mouseenter={()=>{game.assumeTrait(question.trait),
                                      game.computeConditionalEntropies(question.trait);
                                      question.entropy = game.getEntropyDataOfQuestion(question.trait, game.characters);
                                      game=game; 
                                      onHover=true;}}
                  on:mouseleave={()=>{game.assumptionClear();
                                      game.recomputeAllEntropies();
                                      game=game;
                                      onHover=false;}}
                  on:click={()=>{game.crossTrait(question.trait); game.recomputeAllEntropies(); game=game}}/>
    {/each}
</div>
