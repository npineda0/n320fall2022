 /*inheritance example starts
class Note {
    constructor(pitch, duration) {
        this.pitch = pitch;
        this.duration = duration;
    }
}

class FullNote extends Note {
    constructor(pitch) {
        //super method goes to constructor of parent class and invokes that contructor
        super(pitch, 1);
    }
}

class HalfNote extends Note {
    constructor(pitch) {
        super(pitch, .5);
    }
}

let aHalfNote = new HalfNote(880)
let aFullNote = new FullNote(720)

console.log(aFullNote)
inheritance example ends */


/* Abstraction example begins
//abstraction: u can make an object and people will talk w the object to do its thing
//dont need to know how it works, it just does

class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    magnitude() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

//test out
let velo = new Vector(10, 5);
let speed = velo.magnitude();
console.log(speed);
Abstraction example ends */


//* Polymorphism example starts 
class Book {
    constructor(pages) {
        this.pages = pages;
    }
    read() {
        console.log("You just read " + this.pages + "pages!");
    }
}
class Novel extends Book {
    constructor() {
        super(300);
    }
}

class Comic extends Book {
    constructor() {
        super(16);
    }
}

//books is an array
let books = [];
books[0] = new Comic();
books[1] = new Novel();
//method .forEach w/ arrays
//loops through array using method
books.forEach(
    function (book) {
        book.read();
    }
)
//Polymorphism example ends */


/* Association example begins
class Dog {
    constructor(name) {
        this.name = name;
    }
    play(ball) {
        ball.catch(this);
    }
}

class Ball {
    catch(dog) {
        console.log(dog.name + ' caught a ball!');
    }
}

let dog = new Dog("Difo");
let ball = new Ball();
dog.play(ball);
Association example ends */


/*Aggregation example starts
class Guitar {
    constructor(make, strings, acoustic) {
        this.make = make;
        this.strings = strings;
        this.acoustic = acoustic;
    }

    strumOpen() {
        this.strings.forEach(string => {
            console.log(string.note + " Plays");
        })
    }
}

class String {
    constructor(note, octave) {
        this.note = note;
        this.octave = octave;
    }
}

var strings = [];
strings[0] = new String("E", 4);
strings[1] = new String("A", 4);
strings[3] = new String ("D", 4);
var myGuitar = new Guitar("Gibson", strings, false);

myGuitar.strumOpen();
Aggregation example ends */


/*Invoking other objects method example starts 
class Water {
    constructor() {
    //starts w a property of 100
    this.amount = 100;
    }

    drain() {
    this.amount -= 5;
    console.log("water drained, new amout: " +this.amount)
    }
}

//takes an instance of the water class to drain from
class Cloud {
    constructor(water) {
    //remember instance of the water class 
    this.water = water;
    this.size = 10;
    }

    grow() {
    //drains water 
    this.water.drain();
    //and cause cloud to grow
    this.size ++;
    console.log("cloud grew to: " +this.size);
    }
}

let someWater = new Water();
let someCloud = new Cloud(someWater);
//↓ referencing 'this.water' -> 'this.water' is in cloud class
someCloud.grow();
Invoking other objects method example ends */


/*Exposing a callback method example starts 
class Firework {
    constructor() {
        //has a fuse of 12 when created
        this.fuse = 12;
    }

    burnFuse() {
      this.fuse--;
      if( this.fuse <= 0) {
        
        this.activatedCallback();
      }
    }
}

class Crowd {
    constructor(fireworkInstance) {
        //callbacks need to match in both classes
        //when fuse is less than zero, marvel method will be called
        fireworkInstance.activatedCallback = this.marvel;
    }

    marvel() {
        console.log("Oooh, and, aaahh");
    }
}

let myFirework = new Firework();
let myCrowd = new Crowd(myFirework);

for( var i=0; i < 14; i++) {
    myFirework.burnFuse();
}
Exposing a callback method example ends */


/*Passing through a higher object example starts
class Employee {
    constructor(name, emManager) {
        this.name = name;
        this.manager = emManager;
    }

    quit() {
      this.manager.employeeQuit();
    }

    moveOut() {
        console.log(this.name + " says: Never liked my job anyways")
    }

    hire() {
        console.log(this.name + ", my dream job!")
    }
}

class Manager {
    constructor() {
        this.employees = [];
    }

    addEmployee(em) {
        this.employees.push(em);
        console.log(this.employees);
    }

    employeeQuit() {
        this.employees[0].moveOut();
        this.employees[1].hire();
    }
}

let manager = new Manager();
let employee1 = new Employee("alex", manager);
let employee2 = new Employee("jeff", manager);
manager.addEmployee(employee1);
manager.addEmployee(employee2);
employee1.quit();

Passing through a higher object example ends */