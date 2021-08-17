import {Character, Trait} from "./whoiswho"

export let characterList = [
    new Character([
        Trait.hasEyes, Trait.hasNose,
        Trait.hasMouth, Trait.hasShortHair
    ], false),
    new Character([
        Trait.hasEyes, Trait.hasNose,
        Trait.hasMouth, Trait.hasLongHair
    ], true),
    new Character([
        Trait.hasNose,
        Trait.hasMouth, Trait.hasLongHair
    ], false),
    new Character([
        Trait.hasEyes, Trait.hasNose,
        Trait.hasMouth, Trait.isBald,
        Trait.hasBeard, Trait.hasGlasses
    ], false),
    new Character([
        Trait.hasEyes, Trait.hasNose,
        Trait.hasMoustache, Trait.hasMouth, Trait.hasShortHair
    ], false),
    new Character([
        Trait.hasHat, Trait.isBald
    ], false),
    new Character([
        Trait.hasEyes, Trait.hasEyes,
        Trait.hasMouth, Trait.hasShortHair
    ], false),
    new Character([
        Trait.hasNose, Trait.hasEyes,
        Trait.hasShortHair, Trait.hasMouth,
        Trait.hasGlasses
    ], false)
]