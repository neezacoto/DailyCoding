/**
 * Big O Notiation talks about two concepts, time complexity and space complexity. these O notations are written as such O(n)
 * where n represents either the time complexity of n array as it scales, and for space complexity its when adding new information
 */

const arr = ["A","B","C"];

//this array contains three numbers, the array will represent n in time complexity, it could be any variable really

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//this would have a time complexity of O(n): where n is linear and scales one to one. So lets say it would take .3ms to complete
//an array of 3, that means it would take .300ms for an array of 300.

const arr2 = [1,2,3,4]
for(let j = 0; j < arr2.length; j++) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

//this would have a time complexity of O(n * j): n representing the number of elements in 'arr' and j representing the number of 
//elements in 'arr2'

for(let j = 0; j < arr.length; j++) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

//this would have a time complexity of O(n^2): n representing the length of 'arr'

for(let j = 0; j < arr.length; j++) {
    console.log(arr[i])
}

for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

//this would have a time complexity of O(n) not O(n + j): n representing 'arr', and because they are both constant

for(let j = 0; j < arr.length; j++) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        console.log(arr[i]);
        console.log(arr[i]);
        console.log(arr[i]);
    }
}

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


//this would have a time complexity of O(n^2) not O(4n^2 + n): we only care about how data scales not what runs within the loop so there
//so there is no need for the 4. Also, there is no need for the '+ n' becauese we only care about the thing within the algorithm that scales
//the fastest. Since, n scales way less than n^2, there is no need to put it.

if(condition){
    console.log();
}
else{
    console.log();
}

//this if statement has a time complexity of O(n) and the else has a time complexity of O(n^2). Therefore the time complextity is O(n^2)

// O(1) Best < O(logn) Good < O(n) fair < O(nlogn) Bad < O(n!), O(c^n), O(n^c) Worst

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//this has a space complexity of O(1): beacuse we are not really adding anything so the space is alawys constant represented by one

const out = []

for(let j = 0; j < arr.length; j++) {
    for(let i = 0; i < arr.length; i++) {
        out[i][j] = arr[i];
    }
}

//this has a space complexity of O(n^2): where n represents the size of 'arr'. 
//The logic works the same as time complexity, although when doing algorithms you'll be more worried about the time complextity

//more examples of time complexity cheat sheet

//O(1)
const s = 4 + 3 ;

// O(n)
for(let i = 0; i < n; i++) {

}

// O(n)
let a = 0;
for (let i = 0; i < n; i++) {
    a+= i;
}

// O(n^2)
for (let i = 0; i < n; i++) {
    for (let j = 0; j < y; j++) {

    }
}

// O(n)
for (let i = 0; i < n; i++) {}
for (let i = 0; i < n; i++) {}
for (let i = 0; i < n; i++) {}
//...

// O(log n)
while (n > 0) {
    n /= 2;
}

// O(nlog n)
for (let i = 0; i < n; i++) {
    // O(log n)
    while (x > 0) {
        x /= 2;
    }
}