'use strict'

const powerSort = (arr) => {

    const newArr = [];

    for(const num of arr) {
        newArr.push(Math.pow(num, 2));
    }

    return newArr.sort((a,b) => a - b);
}

console.log(powerSort([-7,-3,2,3,11]));