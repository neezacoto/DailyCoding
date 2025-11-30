
const spiralMe = (input) => {
    //I want to do [1,4,6,7,3] -> [1,3,4,7,6]
    //so it's ocelating
    //this will be all the words I want to work with
    let words = input.split(" "); //[how,to,eat,pie]
    let output = [];
    //this will change between telling me whether I print the front or back, via shift and pop
    for(const word of words) {
        let isFront = true;
        let shave = [...word]; //[h,o,w]
        let c_word = [];

        //loop over the letters going back and forth
        for(let i = 0; i < word.length; i++) {          
            (isFront)? c_word.push(shave.shift()) : c_word.push(shave.pop()); //is front, shift, is not front?, back
            isFront = !isFront; //swap values
        }
        output.push(c_word.join(""));
    }     
    return output.join(" ");
}

console.log(spiralMe("hello"));
console.log(spiralMe("how to eat pie"));
console.log(spiralMe("Tish is an eapelmx of cytgahypropr :)"));
