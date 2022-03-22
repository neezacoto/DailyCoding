// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

const countTrue = (arr) => arr.filter(a => a).length;

const test = [true,false,true,false,false];

console.log(countTrue(test))

const seven = [2,6,9,6,17,0]

const sevenBoom = (s) => {
    const ref = s.join('');
    console.log([...ref])
    for(const i of [...ref]) {
        if(parseInt(i) === 7)
            return "Boom!";
    }
    return "there is no 7 in the array"
};

console.log(sevenBoom(seven));