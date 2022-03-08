
//Call:
//when added on to a function (myFunction.call) when passed an object the function will have
//access to that object's properties via 'this'

function myName() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
}

let p1 = {
    firstName: "Joe",
    lastName: "Matt",
}

let p2 = {
    firstName: "Ann",
    lastName: "Doe",
}

myName.call(p1);
myName.call(p2);

// There is no function overloading
// function myName(greeting) {
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
// }

//Apply
//when added to the end of a function (myFunction.apply) and passed an object and arguments via array
//(myFunction.apply(obj,[arg1,arg2])) within that function the obj's properties is available via 'this'

let pokemon = (noise, ...info) => {
    console.log(info)
    console.log(`Pokemon: ${this.name} noise: ${noise} other info: ${info}`);
}

let poke1 = {
    name: "piakchu"
}

let poke2 = {
    name: "pichu"
}

pokemon.apply(poke1,["doesn't like red fruits","yo","ko"]);
pokemon.apply(poke2,["likes marshmellow","weight: 20kg","mo","shemo"])

//Bind
//this is like the call function but effecting "binding" it to a variable so that
//evertime you call that variable, that function with that obj will run

let joeGreeting = myName.bind(p1);

joeGreeting()

//Challenge:
//use a custom template tag to convert a message values as CCAANN YYOOUU RREEAADD TTHHIISS
//
//you cannot use the this object when doing arrow functions for other objects
let cryptic = function() {
    return weirdText `\Hi my name is ${this.name} can ${this.name}you read This\?`
} 

let weirdText = (strings, ...values) => {

    str = "";

    for(let i = 0; i < strings.raw.length; i++) {

        if(i>0){
            str += [...values[i-1]].map((l) => l = l+""+l).join("");
            console.log(values[i-1])
                
        }

        str += strings.raw[i]
    }

    return str;
}

console.log(cryptic.call(poke1))

/**
 * take away bind, call, apply, template string tag, and spread on perameters
 * 
 * call allows you to pass an object to a function and have that function have access to the objects
 * properties via this
 * 
 * bind allows you to find a variable with a function and an object. So basically making a call 
 * into a variable
 * 
 * apply allows you to do the same as call by passing the obj and the paremeters in an array
 * 
 * tags are just functions that return a string. So putting the function name infront of a 
 * template allows for the function to run and filter the text. The first parameter is the strings
 * the second is the values '$()'. This is done by spreading them usually (strings, ...values). 
 * There will always be more strings than values. Even hi` hi()` counts as a string
 */