'use strict'

/**
 * an iterator: an iterotar otherwise given by [Symbol.iterator] returns a way for an object to be iterable
 * this function contains has a function called next() that will return the next item
 * each item has a value and a done. The done will be true when it's over and the value will be undefined
 * , otherwise values have values and or not done.
 * 
 * essentially this is what a for each loop is doing. It's taking the iterable and calling next over and over again
 * until it the done property is true
 * 
 * that's how we can loop over strings and arrays and such, because they themself are objects and will return a way to
 * iterate overthemself
 * 
 * so Symbol.iterotor is a Symbol{} object, obj[Symbol.iterator] returns an { [Iterator] }, which is expected to have a next() function.
 * The next() function returns a value: and a done: property which tell gives inforation about the current next().value is, and if it's
 * done: or not
 */

//here is an example from MDN

//here is our function that gives us the information on how to itorate 
function makeRangeIterator(start, end, step) {
    let nextIndex = start;
    let iterationCount = 0;

    //so this is where the magic happens, this is an object that contains the next() function. The next() function will give us
    //an object, this object is our entry, with it's value: and done: properties.
    //calling next() will host the current entry until next() is called again.
    const rangeIterator = {
       next: function() {
           let result;
           //if the start is less than the end
           if (nextIndex < end) {
               //return our object with the current index
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           //if not, this return entry will indicate the end of the iteration
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

//const it = makeRangeIterator(1, 10, 2);

// let result = it.next();
// while (!result.done) {
//  console.log(result.value); // 1 3 5 7 9
//  result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
//Then we can call the function and let it do it's thing; However it's very fincky how the value: gets difined. See how we 
//were putting the value in sort of manually, and limited.
//There's a better way we can do this with generators. It was great to know what's really going on under the hood, but now let's
//go a step up and see how we can make our custom iterators with an object.
//lets look at the above funciton made easier with a function* generator

//this way is a lot easier to read
function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

//now here is the challenge make shakespear instult generator list
//inspired by Generators in Js by funfunfunctions
const insultGenerator = {

    //setting the words I want
    words:
    [
        [
            'artless',
            'bawdy',
            'beslubbering',
            'bootless'
        ],
        [
            'base-court',
            'bat-fowling',
            'beef-witted',
            'beetle-headed'
        ],
        [
            'apple-john',
            'baggage',
            'barnacle',
            'bladder'
        ]
    ],
    //
    createInsult: () => {
        let str = 'thou'
        for(const col of this.words) {
            str += " " + col[Math.floor(Math.random() * col.length)]; // gives me random element from a col
        }
        return str;
    },

    [Symbol.iterator]: function* () {
        while(true) {
            const enoughInsults = Math.random() > 0.90;
            if (enoughInsults) return
            yield this.createInsult();
        }
    }
}

let insultIterable = insultGenerator[Symbol.iterator]();
//console.log(insultIterable.next());
while(!insultIterable.next().done){
    console.log(insultIterable.next().value);
}