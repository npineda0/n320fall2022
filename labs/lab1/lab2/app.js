
//create a synth and connect it to the main output (your speakers)
let synthApp = {
    synth: new Tone.Synth().toDestination(),
    notes: ["C4", "D4", "E4", "F4"],
    currentNote: 0,
    playSound() {
        console.log();
        //play a middle 'C' for the duration of an 8th note
        this.synth.triggerAttackRelease(this.notes[this.currentNote], "8n");
        this.currentNote ++;

        setTimeout(this.playSound.bind(this), 500);    
    }
}

/*
inheritance example:
    - rose comes from flowers(rose has all the methods & properties of flowers but also thorns)
    - shirt comes from clothes(shirt has all the methods % properties of clothes & goes on the torso)


class Flowers {
    constructor(petals, color, stem) {
        this.petals = petals;
        this.color = color;
        this.stem = stem;
    }
}

class Roses extends Flowers {
    constructor(stem) {
        super(stem, "thorny");
    }
}
*/
