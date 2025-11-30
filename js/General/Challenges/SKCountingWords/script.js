
/**
 *  Input2
    a string (max length = 10,000).

    Output2
    000 1
    10 1
    a 1
    length 1
    max 1
    string 1

    {'.', '?', '!', ',', ';', ':', '=', '(', ')', '[', ']'}
 */

function countWords(string) {

    let cut = 0;
    let check = ['.', '?', '!', ',', ';', ':', '=', '(', ')', '[', ']', ' ','\n']
    let list = [];
    //check last for sorting the actul order

    //a string (max length = 10,000).
    for(let i = 0; i < string.length; i++){
        if(check.includes(string[i])) {

            //careful end of string
            list.push(string.slice(cut, i));
            cut = i+1;
        }
    }
    let trimmed = list.filter((i)=> i);

    trimmed.sort((a,b)=> {
        if(!isNaN(parseInt(a))){
            if(!isNaN(parseInt(b))){
                return  parseInt(a) - parseInt(b) 
            }

           return -1
        }
        
        return (a[0] > b[0])? 1 : -1; 
    });
    console.log(trimmed);

    let str = "";
    let size = trimmed.length;
    for(let i = 0; i < size-1; i++) {
        let temp = trimmed.shift();
        
        let c = 1;
        if(trimmed[0] === temp) {
            
            trimmed.shift();
            c++;
        }
        str += temp +" "+ c + "\n";
    }

    return str;

}
console.log(countWords('a string (max length = 10,000,200,000).'));
// let string = "hi";
// let str = string;
// str += "hello"
// console.log(string);
// console.log(str)

// //splice only works on arrays
// // let brug = str.splice(1,2);

// console.log(str.slice(1,3));
// console.log( 'a' === 'b');