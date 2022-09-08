/*
//first make object
var myDog1 = {               //inside the curly brackets is the same scope
    name: "fido",
    height: 10,
    color: "brown",
    //adding method to object
    bark: function() {
        //'this' gets the property specified after dot, fido
        console.log(this.name + " barks!");
    }
}

//invoke methos the same for objects&class
myDog1.bark();


//then make class, its uppercased
class Dog {
    //take 3 arguments
    constructor(name,height,color) {
        //access them from object
        this.name = name;
        this.height = height;
        this.color = color;
    }

    //adding a method in a class
    bark() {
        console.log(this.name + " woof!");
    }
}

//then an instance of that object
var myDog2 = new Dog ("giselle", 12, "yellow"); //second dog variable will add a new dog
                                                //with a name, height, and color

//loop that creates 400 red, 400ft tall dogs named clifford that bark saying woof
for( var i = 0; i < 400; i++) {
    var myDog3 = new Dog ("Clifford", 400, "red");
    myDog3.bark();
}

console.log(myDog2);
myDog2.bark();
*/

//class inheritance
class Animal {
    constructor (name, weight, color) {
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
}

class Dog extends Animal {
    constructor (name, weight, color) {
        super (name, weight, color);
        this.kind = "dog";
    }
    bark() {
        console.log(this.name + " barks!");
    }
}

let animalEx = new Animal("ex", 10, "green");
let aDog = new Dog ("rex", 45, "black");

console.log(aDog);
aDog.bark();