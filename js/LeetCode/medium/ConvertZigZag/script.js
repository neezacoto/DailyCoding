'use scrict'
/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
 */

const convertZigZag = (str, rows) => {
    if(rows < 2)
    return str;
    zigIndex = 0 //col index
    zigCount = 0 //row index inside col
    printCount = 1; //keeps track of how many counted
    zigOut = [[]] //array of zigzag output
    //console.log(rows)
    //loop over string till all characters are used
    for(let i = 0; i < str.length; i++) {
        
        zigOut[zigIndex][zigCount++] = str[i] //printing is regular col
        
        if(printCount % rows === 0) { //if printcount has hit max rows start zig zag
            
            zigCount = rows - 2; //index for zigzag in col
            for(let j = 0; j < (rows - 1); j++) {
                //spacing
                zigIndex++
                zigOut[zigIndex] = []
                zigOut[zigIndex][0] = " " 
                //prints zig
                zigIndex++
                zigOut[zigIndex] = []
                zigOut[zigIndex][zigCount--] = str[i++] //printing in respective row
                
            }
            //reset
            printCount = 0;
            zigCount = 0;
        }
        printCount++
    }

    //convert to string
    strConvert = "";
    for(i = 0; i < rows; i++) {
        for(j = 0; j < zigOut.length; j++) {
            strConvert += zigOut[j][i] || " "
        }
        strConvert += "\n"
    }
    return strConvert;
}
// let choop = [];
// choop[1] = "hi";
// choop[1] = []
// choop[1][2] = "papi"
// console.log(choop)

console.log(convertZigZag("PAYPAAOEUAOEUAOEUEOAEOUEUOLISHIRING",4));
