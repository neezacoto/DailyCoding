'use strict'

/**1. So Array.unshift() has a Linear Time Complexity and is O(n). 
 * The Array.pop() and Array.shift() methods which are used to remove an element from 
 * the end and beginning of an array respectively, work similarly. Array.pop() is O(1) 
 * while Array.shift() is O(n). We can use the Array.splice() method to remove an element 
 * and/or insert elements at any position in an array. When we use this method, the number
 *  of indices that need to be changed depend on which index you splice.
 *  But in the worst case scenario which is if you splice at the very start is O(n). */

const countLastWord = (str) => {
    //split the string into an array seperated by spaces,
    // pop out the last array and give it's length
    return str.split(' ').pop().length
}

console.log(countLastWord("hello world pie"))

const isAnagram = (str1, str2) => {
    let isCorrect = false;
    if(str1.length === str2.length) {
        //spread to an array b/c strings don't have sort()
        //sort to unscramble and see if they have the same letters
        let check1 = [...str1].sort();
        let check2 = [...str2].sort();
        isCorrect = true;
        for(const i in str1) {
            //if there is one wrong entry stop looping and set isCorrect to false;
            if( check1[i] !== check2[i]) {
                isCorrect = false;
                break;
            }
        }
    }
    return isCorrect
}

const isAnagram2 = (str1, str2) => {
    let isCorrect = false;
    if(str1.length === str2.length) { //check to see if they are even the same length
        let currIndex; //check to see if the letter is still there
        let check1 = [...str1]; //spreading into an array to get the splice function
        let check2 = [...str2];
        isCorrect = true; //set true unless proven otherwise in the loop

        for(let i = 0; i < str1.length && check1; i++) {
            currIndex = check2.indexOf(check1[0]);
        
            if( currIndex === -1) {
                isCorrect = false;
                break;
            }
            //remove each letter as they are found
            check1.splice(0,1);
            check2.splice(currIndex,1);
        }
    }
    return isCorrect
}

//longer
const isAnagram3 = (s, t) => {
    //check to see if they are even the same length
    let sArray = s.split('').sort().join('');
    let tArray = t.split('').sort().join('');
    return sArray === tArray;
}

console.log(isAnagram3("hello", "elhlo"));

//you can check 
console.log("helo" === "heeo")