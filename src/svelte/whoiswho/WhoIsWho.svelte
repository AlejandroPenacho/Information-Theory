<script lang="ts">

    import * as ww from "../../ts/whoiswho/whoiswho";
    import Face from "/src/svelte/whoiswho/Face.svelte"

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

</script>


<style>
    div.charDeck {
        display: flex;
    }
    div.button {
        background-color: cyan;
        width: 50px;
        height: 50px;
    }
</style>

<div class="button"
     on:mouseenter={()=>{game.assumeTrait(ww.Trait.hasLongHair), game=game}}
     on:mouseleave={()=>{game.assumptionClear(); game=game}}
     on:click={()=>{game.crossTrait(ww.Trait.hasLongHair); game=game}}>

</div>

<div class="charDeck">
    {#each game.characters as character}
        <Face character={character} />
    {/each}
</div>