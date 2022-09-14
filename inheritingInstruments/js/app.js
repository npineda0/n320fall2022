//global variable for playNext()
currentInstrument = 0;

//base class
class Instruments {
    //playVerb -> hit, blow, strum
    constructor(loudness, family, playVerb) {
        this.loudness = loudness;
        this.family = family;
        this.playVerb = playVerb;
    }


    //method for playing instruments w/ duration argument
    playInstrument(duration) {
        //instrument will play b6 for a duration of time
        let synth = new Tone.Synth().toDestination();
        synth.triggerAttack("B6", duration)
        console.log("Family: " + this.family + " playVerb: " + this.playVerb +
        " at Loudness: " + this.loudness);

        //callback method
        //duration will keep subtracting until 0
        this.duration --;
        if (this.duration >= 0) {
            //when duration reaches equal to/less than zero, the sound will be over
            this.activatedCallback();
        }
    }
}


//inheriting classes
class Woodwind extends Instruments {
    constructor(loudness) {
        //flute is part of the woodwind family, play by blowing air
        super(loudness, "flute", "blow air");
    }
}

class Percussion extends Instruments {
    constructor(loudness) {
        //snare drum is part of the percussion family, play by hitting
        super(loudness, "snare drum", "hit");
    }
}

class String extends Instruments {
    constructor(loudness) {
        //guitar is part of the string family, play by strumming
        super(loudness, "guitar", "strumming");
    }
}

//all the instruments in an array
let instruments = []
instruments[0] = new Woodwind;
instruments[1] = new Percussion;
instruments[2] = new String;

function playNext() {
    //loop w/ '.forEach' method
    instruments.forEach (
        function (instruments) {
            instruments.playInstrument(".5");
            currentInstrument ++;
        }
    )
    instruments.activatedCallback = console.log("over");
}



