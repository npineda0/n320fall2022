/*
//concrete, litereal dog
let myDog = {
    name: "a",
    weight: 10,
    color: "grey"
}

class Animal {
    name
    weight
    energy
    color
    constructor (name, weight, color) {
        this.name = name
        this.weight = weight;
        this.color = color;
        this.energy = 10;
    }
}

class Dog extends Animal {
   
    //this is called when the object is created with the new keywords
    constructor (name, weight, color) {
        super(name, weight, color);
    }

    bark() {
        console.log(this.name + "barks!");
    }
}

let myOtherDog = new Dog("Fido", 10, "brown");
let myOtherDog = new Dog("Fighto", 20, "brown");
let myOtherDog = new Dog("Frighto", 5, "brown");

myOtherDog. bark()
one.bark();
two.bark();


console.log(myOtherDog)

/*
function Dog() {
    this.name = "",
    this.height = "",
    this.color = ""
}
*/

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
/*
//make an instance of the class
let randPicker = new RandomPicker(["a", "b", "c"])
console.log(randPicker.pickRandom());
*/

//have all capabilities of randomPicker
class MagicEight extends RandomPicker {

    outputElement

    constructor(element) {
        //array[] as a piece of data, stored in items
        super(["it is certain", "ask again later", "perhaps", "very doubtful"]);
        this.outputElement = element;
    }

    shake() {
        //pick random response
        let reply = this.pickRandom();
        //show response in element
        this.outputElement.innerHTML = reply;
    }
}
//magicResponse will go through constructor as an element
let myEightBall = new MagicEight(document.getElementById("magicResponse"));
myEightBall.shake();


/*
//make an instance of the class
let randPicker = new RandomPicker(["a", "b", "c"]);
console.log(randPicker.pickRandom[]);
*/

