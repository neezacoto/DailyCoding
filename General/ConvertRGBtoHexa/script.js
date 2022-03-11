'use strict'

//Challenge is to convert rgb to hexadecimal
/**
 * rgb is (255,255,255) white, channels red, green, blue. This is in base 10
 * 
 * hex is #FFFFFF white, still the same channels, just in base 16 0123456789ABCDEF (FF,FF,FF)
 * 
 */

//I want a function that takes in the 3 values
const rgbToHex = function(r, g, b) {

    

    //Create a custom error to catch if it's not an RGB
    class RGBError extends Error {
        constructor() {
            super(`(${r},${g},${b}) is not a valid RGB`)
            this.name = RGBError.name;
        }
    }

    try{
        //I was going to check a bunch of ifs, but I was thinking, is there a check that
        //I can do it all at once, and yes, the sum of an rgb will never be greater than 765
        //but I'll still need to check, just doing it for the short curcuit
        // and it can't be negative or not a number
        if( 
            (r > 255 || g > 255 || b > 255) || 
            (r < 0 || g < 0 || b < 0)       || 
            (isNaN(r) || isNaN(g) || isNaN(b)) 
          )
            throw new RGBError()
        //this will be my final output
        const hex = [];
        //I'll put them into an array to iterate over
        const rgb = [r, g, b];

        //this is what I want to do to translate the 
        const dict = {
            10: "A",
            11: "B",
            12: "C",
            13: "D",
            14: "E",
            15: "F"
        }

        //now I want to check how many 16s go into that number. Find it,
        //then take that number from the total, and that will be my ones place
        for(const value of rgb) {
            
            let sixteensPlace = Math.floor(value / 16);
            let onesplace = value - sixteensPlace * 16 ;
            //this is saying if the key in dictionary does not exist just use the number itself
            hex.push( (dict[sixteensPlace] || sixteensPlace) + "" + (dict[onesplace] || onesplace));
        }
        
        return "#" + hex.join("");
    }catch(error) {
        console.log(error.message);
    }
    
}

console.log(rgbToHex(255,255,255)); //#FFFFFF
console.log(rgbToHex('a','b','c')); //error
console.log(rgbToHex(500,430,1000)); //error
console.log(rgbToHex(-100,200,100)); //error
console.log(rgbToHex(192,255,120)) //#C0FF78
