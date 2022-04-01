'use strict'

/**
 * Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const longestSub = (str) => {

    let temp = [];
    let longest = [];
    //I want to check each possible combination, so I need a starting index, and if that starting
    //index fails, I start again with one index higher
    //then save each attempt to compare
    let attempt = 0;
    for(let i = 0; i < str.length - 1; i++) {
        //reset on failure
        if(temp.includes(str[i])) {
            i = attempt++;
            longest.push(temp);
            temp = [];
        }
        temp.push(str.slice(i,i+1));
    }

    let max = -Infinity;
    let index = -1;

    //most efficient way is to iterate manually to find the max number
    longest.forEach((a, i) => {
        if(a.length > max) {
            max = a.length;
            index = i;
        }
    })
    return longest[index].length;
    

    // return longest
    // [
    //     longest
    //     .map(a=>a.length)
    //     .indexOf(Math.max(...longest.map(a=>a.length)))
    // ].join('');
}

let arr = 'abcabbcaccbbacb';

console.log(arr);
console.log(longestSub(arr));