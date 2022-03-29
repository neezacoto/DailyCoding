/** Recursion just means that a function calls itself over and over again
 *  until it hits a base case, at which point it shoots back up the stack */

//This is an example of a binary search done with recursion
 let recursiveFunction = function (arr, x, start, end) {
      
    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (arr[mid]===x) return true;
         
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}

//here is also the famous question, reverse a binary tree done using recursion

const trav = (currNode) => {
    if (currNode === null) {
      return;
    }
    const temp = currNode.lNode;
    currNode.lNode = currNode.rNode;
    currNode.rNode = temp;
    trav(currNode.lNode);
    trav(currNode.rNode);
  };
trav(root);
  
