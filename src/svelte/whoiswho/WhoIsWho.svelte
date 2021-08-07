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
        ], true)
    ]

    let game = new ww.WhoIsWho(characters);

</script>


<style>
    div.charDeck {
        display: flex;
    }
</style>

<div class="charDeck">
    {#each game.characters as character}
        <Face character={character} />
    {/each}
</div>