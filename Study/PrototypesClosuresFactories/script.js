
/**
 * prototypal inheritance is somewhat similar to class heirarchies in object oriented programming.
 * so basically everything in javascript is an object, and everything derives from Object object.
 */

//for example
let arr = [];
console.log(arr.__proto__) //Object proto

//you can create a prototype
//it's sort of like a class
function Person (name) {
    this.name = name;
    this.age = 12;
}
//that adds properties, but that will directly add then to the child, which they have access to
//& if you change that value in the parent, the child does not recieve those changes
//here is how you add functions to that prototype
Person.prototype.sayHi = function() {
    return `Hi my name is ${this.name}`
}
//a prototype function accesses the prototype, and their child accesses the prototype with __proto__
//for example
const me = new Person("alex");
console.log(me.__proto__ === Person.prototype); //they are the same thing

me.name = "allen"; // the name can be changed because it's stored only on the child

console.log(me.sayHi())
console.log(me)

//then like classes you can extend them 
//classes are just syntactical sugar for creating prototype object functions
//and allows for easier chaining
class SuperHuman extends Person {
    
    constructor(age){
        super();
        this.age = age;
    }
    fly() {
        return "flying"
    }
    jump() {
        return "jump"
    }
}
//then we can see the prototype or "__proto__" is that of person
console.log(new SuperHuman("jomba"))

// you can even do this stuff with pure objects
const lola = {
    talk() {
        return 'lola'
    }
}

const her = Object.create(lola);


console.log(her.talk())
// then you can see the proto is lola
console.log(her)
console.log(her.__proto__ === lola.prototype) // nope that's false, just seems to be some object that has lola

//another way

const momo = {
    hi() {
        return "bye";
    }
}

const you = {}

//doing this allows you to set the prototype of an object
Object.setPrototypeOf(you, momo);

console.log(you.hi())
console.log(you)

//however this is not scalable way of creating objects, and does not allow for easy data privacy.
//we can do something better with factories
//this also works the magic of closures, because even after person factory runs
// the functions still hold that reference to name, waiting to be called
function personFactory(name) {
    return {
        talk() {
            return `hi my name is ${name}`
        },
        bye() {
            return `bye I'm ${name}`
        }
    }
}


const newPerson = personFactory("omy");
console.log(newPerson.talk())
console.log(newPerson)
console.log(newPerson.__proto__ === personFactory.prototype)//false

//the concept of closures just means that inner functions have access to their outer function
//variables, even after they've run, inner functions will hold a reference to their
//outer functions variables
function apple(color) {
    //there's no need to use the this word, closure *magic*
    function getColor() {
        console.log(`This apple is ${color}`);
    }
    function eatApple() {
        console.log(`I just at a ${color} apple`)
    }
    return{
        getColor,
        eatApple
    }
}

const redApple = apple("red");
const greenApple = apple("green");

redApple.eatApple();
greenApple.getColor();