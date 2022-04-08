//demonstarting closures

function multiply(a) {
    return function (b) {
        return function (c) {
            return (a*b) /c
        }
    }
}
//console.log(multiply(6))
console.log(multiply(6)(8)(9))

//find palindrome
const isPalin = (word) => word.split('').reverse().join('') === word;

console.log(isPalin('racecar'));
console.log(isPalin('raceca'));

//fizzbuzz

/**
 * 1-100
 * logs fizz mul 3
 * logs buzz on mul 5
 * fizzbuzz when both apply
 */

const fizzBuzz = () => {
    //I made an object so it doesn't clutter my console
    const obj = {}
    for(let i = 1; i <= 100; i++) {
        let str = '';
        if(i % 3 === 0 ) {
            str += 'fizz'
        }
        if(i % 5 === 0 ) {
            str += 'buzz'
        }
        if(!str) {
            str = i
        }

        obj[i] = str;
    }

    return obj
}

console.log(fizzBuzz())

//interate over object