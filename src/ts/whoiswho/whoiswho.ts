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
    characters : Array<Character>;

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

    getEntropyDataOfQuestion(trait: Trait){
        let nCharsAtSide: [number, number] = [0, 0];
        this.characters.forEach((character) =>{
            if (!character.crossedOut){
                if (character.checkTrait(trait)){
                    nCharsAtSide[0] ++;
                } else {
                    nCharsAtSide[1] ++;
                }
            }
        });

        let p = nCharsAtSide[0]/(nCharsAtSide[0]+nCharsAtSide[1]);

        if (p===0 || p===1){
            return [0, [p, 1-p]]
        } 

        let H = p * Math.log(1/p)/Math.LN2 + (1-p)*Math.log(1/(1-p))/Math.LN2
        return [H, [p, 1-p]]

    }
}