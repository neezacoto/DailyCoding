'use strict'
/**Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15 */

const diagDif = (matrix) => {

    let Ldif;
    let Rdif;
    //check if it can do diag math
    if ( matrix[0].length === matrix.length) {
        Ldif = 0;
        Rdif = 0;
        //to find the diagnol all I need to do is iterate through each row increasing the index
        let i = 0;
        for(const row of matrix) {
            Ldif += row[i++];
        }
        //then all I need to do is do the same thing in reverse, but since i already has the max length of a given row, I'll use that
        for(const row of matrix) {
            Rdif += row[i-- -1];
        }
    }

    //this function has a time complexity of O(n) where n represents the size of the matrix,
    //and a space complextity of O(1) as data stored stays constant
    return Math.abs(Ldif - Rdif);
}
let arr = [[11,2,4],[4,5,6],[10,8,-12]];
// let sub = arr[0];
// console.log(sub[0]+arr[1][1])
console.log(diagDif(arr));

