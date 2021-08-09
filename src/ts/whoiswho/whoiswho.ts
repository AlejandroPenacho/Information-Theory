export enum Trait {
    hasHat, isBald, hasLongHair, hasShortHair,
    hasGlasses, hasEyes,
    hasMouth, hasNose,
    hasBeard, hasMoustache
}

let allTraits = [
    Trait.hasHat, Trait.isBald, Trait.hasLongHair, Trait.hasShortHair,
    Trait.hasGlasses, Trait.hasEyes,
    Trait.hasMouth, Trait.hasNose,
    Trait.hasBeard, Trait.hasMoustache
]

let traitNames = [
    "Has a hat?", "Is bald?", "Has long hair?", "Has short hair",
    "Wears glases?", "Has eyes?",
    "Has mouth?", "Has a nose?",
    "Has a beard?", "Has a moustache?"
]

export enum Assumption {
    nothing, positive, negative
}

export interface Question {
    trait: Trait,
    text: string,
    entropy: EntropyData
}

export interface EntropyData{
    probabilities: [number, number],
    entropies: [number, number],
    qEntropy: number
}



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
    questions: Array<Question>;

    constructor(characters){
        this.characters = characters;
        this.questions = new Array(allTraits.length);
        for (let i=0; i<this.questions.length; i++){
            this.questions[i] = {
                trait: allTraits[i],
                text: traitNames[i],
                entropy: this.getEntropyDataOfQuestion(allTraits[i])
            }
        }
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

    recomputeAllEntropies(){
        this.questions.forEach((question) => {
            question.entropy = this.getEntropyDataOfQuestion(question.trait);
        })
    }

    getEntropyDataOfQuestion(trait: Trait) : EntropyData {
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

        if (p===0){
            return {
                probabilities: [0, 1],
                entropies: [-1, 0],
                qEntropy: 0
            }
        } 
        if (p===1){
            return {
                probabilities: [1, 0],
                entropies: [0, -1],
                qEntropy: 0
            }
        }

        let entropies: [number, number] = [Math.log(1/p)/Math.LN2, Math.log(1/(1-p))/Math.LN2];
        return {
            probabilities: [p, 1-p],
            entropies: entropies,
            qEntropy: p*entropies[0] + (1-p)*entropies[1]
        }

    }
}