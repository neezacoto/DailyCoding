function createPerson(name) {
    return {
        name,
        talk() {
            return `I am ${this.name}`
        }
    }
}

let me = createPerson('Sina')
let you = createPerson('Qoli')

console.log(me)
console.log(you)

/**
 * this is on the object itself though,
 * so any modifacations don't effect the rest of them
 */

//so this only edits the me object
me.talk = function() {
    return `Hello, I am ${this.name}`
}

/**
 * to fix this problem don't add the function to the Object.prototype, because it will be
 * added to everything that is an Object
 */


//lets set our function to use in the prototype
const myProto = {
    talk() {
        return `Hello, I am ${this.name}`
    },
    hi: 'hello',
    snooze() {
        return 'snooze'
    }

}
//to fix this problem we can use the Object.create() function. This will allow us to 
//create our own prototype instead of the base Object 
 function createPerson2(name) {
    return Object.create(myProto, {
        name: {
            value: name
        }
    })
}

me = createPerson2('Sina')

console.log(me)

//this is the same way with consturctor

function Person(name) {
    this.name = name
}

const ben = new Person('Ben')

console.log(ben)

//with the consturctor it creates its own costom prototype to add things to
Person.prototype.talk = function() {
    return `Hello I am ${this.name}`
}

console.log(ben.talk())

//the thing with factory functions is that we can achieve data privacy meaning we don't
//have to add things to the this object

function cPerson(name) {
    return {
        talk() {
            return `Hello I am ${name}`
        }
    }
}

me = cPerson("Burg");

//the name is completetly hidden and is stored no where, but the function itself by the power
//of closures saves a reference to be used in the function
console.log(me)
console.log("hi")

me = createPerson2('Sina')
console.log(me.__proto__)
console.log(myProto)
console.log(myProto === me.__proto__)

class Jomba {
    constructor() {
        this.name = 'jomba'
    }
    talk() {
        return "jomba juice"
    }
}

let nemb = new Jomba

Jomba.prototype.hey = () => "hi"

console.log(Jomba.prototype === nemb.__proto__)

let one = new createPerson("hello");
console.log(createPerson )

createPerson().prototype