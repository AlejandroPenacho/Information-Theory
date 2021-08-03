enum Trait {
    hasHat, isBald, hasBrownHair, hasYellowHair,
    isMan, isWoman,
    isBlack, isWhite, isAsian,
    hasGlasses, hasBrownEyes, hasGreenEyes, hasBlueEyes,
}

enum Assumption {
    nothing, positive, negative
}

class Character {
    traits: Array<Trait>;
    crossedOut: boolean;
    underAssumption: Assumption;
    objective: boolean;

    constructor(traits: Trait[], objective: boolean) {
        this.traits = traits;
        this.objective = objective;
        this.crossedOut = false;
    }

    checkTrait(trait: Trait) : boolean {
        for (let i=0; i<this.traits.length; i++){
            if (trait==this.traits[i]){
                return true
            }
        }
        return false
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
            if (character.checkTrait(trait)){
                character.crossedOut = true;
            }
        })
    }
}