/**
 * All higher order functions mean is that it's a 
 * function that eaither takes in a function as a parameter or returns a function. This can be
 * demonstrated with the sort function
 */

const arr = [1,4,33,20,2,4,9];

console.log(arr.sort())// as stated before in previous notes this will not order correctly
//because by default the sort will just sort by UTF-16 when given a mix of numbers such as this
//so to counter thil we will pass this sort a function, sort being the higher order function

console.log(arr.sort((a,b)=> a-b));

//this can be seen with timeout and other function, and is popularly seen used in React.

