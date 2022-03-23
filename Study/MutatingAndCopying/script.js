const array = [1,2,3,4,5,6,7];

//spread array does create a copy
let copy = [...array];
//this creates a direct reference and is not a copy
let copy2 = array

//pop is mutating
copy.pop();

console.log("copy: "+copy);
console.log("orig: "+array);

copy2.pop();
console.log("copy2: "+ copy2);
console.log("orig: "+ array);

//map is non mutating
copy.map((a) => a+1); // non mutating

console.log(copy) 
console.log("map: "+copy.map((a) => a+1))

//splice is non mutating
copy.slice(1,3);//non mutating //also 3 is the index before so 1-3 is non-inclusive of the last index
//so it's 1-2

console.log(copy)
console.log("splice: "+copy.slice(1,3));

const anim = ["cat","dog","bird"];



