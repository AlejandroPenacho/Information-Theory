export enum Trait {
    hasHat, isBald, hasLongHair, hasShortHair,
    hasGlasses, hasEyes,
    hasMouth, hasNose,
    hasBeard, hasMoustache
}

export enum Assumption {
    nothing, positive, negative
}

let allTraits = [
    Trait.hasHat, Trait.isBald, Trait.hasLongHair, Trait.hasShortHair,
    Trait.hasGlasses, Trait.hasEyes,
    Trait.hasMouth, Trait.hasNose,
    Trait.hasBeard, Trait.hasMoustache
]

export class Character {
    traits: any;
    crossedOut: boolean;
    underAssumption: Assumption;
    objective: boolean;

    constructor(traits: Trait[], objective: boolean) {
        this.objective = objective;
        this.crossedOut = false;
        this.traits = {};
        for (let i=0; i<allTraits.length; i++){
            this.traits[allTraits[i]] = false;
            for (let j=0; j<traits.length; j++){
                if (allTraits[i] === traits[j]){
                    this.traits[allTraits[i]] = true;
                }
            }
        }
    }

    checkTrait(trait: Trait) : boolean {
        return this.traits[trait];
    }
}

export class WhoIsWho {
    characters : Array<Character>

    constructor(characters){
        this.characters = characters;
    }

    fullClear(){
        this.characters.forEach((character)=>{
            character.crossedOut = false;
            character.underAssumption = Assumption.nothing;
        })
    }

    assumptionClear(){
        this.characters.forEach((character) => {
            character.underAssumption = Assumption.nothing;
        })
    }

    assumeTrait(trait: Trait){
        this.characters.forEach((character) => {
            if (character.checkTrait(trait)){
                character.underAssumption = Assumption.positive;
            } else {
                character.underAssumption = Assumption.negative;
            }
        })
    }

    crossTrait(trait: Trait){
        this.characters.forEach((character) => {
            if (!character.checkTrait(trait)){
                character.crossedOut = true;
            }
        })
    }
}