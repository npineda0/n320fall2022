//generate random fortunes
class RandomPicker {
    //list of all items to be selected from randomly
    items

    constructor (items) {
        //store the use set of items
        this.items = items;
    }

    //return a random entry in the array
    pickRandom() {
        return this.items[Math.floor(Math.random()* this.items.length)];
    }
}

class FortuneCookie extends RandomPicker {

    outputElement

    constructor (element) {
        //array of 4 fortunes
        super(["You'll trip and fall soon", "excitement is on its way", "watchout for rainy days", "don't behave with an attitude"])
        this.outputElement = element;
    }

    showFortune() {
        //fortune will be randomly picked
        let fortune = this.pickRandom();
        //the fortune element will display in innerHTML
        this.outputElement.innerHTML = fortune;
    }

    pickFortune() {
        this.outputElement.innerHTML = "Please open your cookie";
    }
}

let YummyFortuneCookie = new FortuneCookie(document.getElementById("randFortune"));
YummyFortuneCookie.showFortune();
YummyFortuneCookie.pickFortune();


/*
Create a "Fortune Cookie" class
On a button click, Show a fortune to the user that is generated from the Fortune Cookie class
Not allow the user to look at a new fortune unless
The user clicks a separate button to "pick up a new fortune cookie"
Clicking this button will also replace the text on the screen with "Please open your cookie" 
*/