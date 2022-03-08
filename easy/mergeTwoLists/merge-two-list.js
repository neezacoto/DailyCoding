/**You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order. */

/**
 * I feel as though for this problem I could just combine both the list then sort again
 * although I don't know if that is actually faster than other ways, I'll just do it
 * for the sake of time. 
 * 
 * My other thoughts are doing something like this
 * seeing which list is the biggest
 * let [main, adding] = (list1.length > list2.length)? [list1, list2] : [list2, list1];
 * 
 * than using something like reduce, or a forloop to run through each and check if
 * the main lists entry is smaller than the current if so input adding idex here
 */

//ok this solution was way too easy, and not much fun, I'll go ahead and implement
//what I was thinking before, I might keep it simple because reduce might
//be slower than a regular forloop. 
//Just read it and yup, forloop is faster than than map/reduce/filter/find
//cool to know, and I should just use multiline comments if I'm going to 
//type like this.
/**
 * note to self noted
 */
const mergeTwoLists1 = (list1, list2) =>  list1.concat(list2).sort();
console.log(mergeTwoLists1([1, 2, 4], [1 , 3, 4]));

const mergeTwoLists = (list1, list2) => {

    //checking to see which lists are bigger
    //let [main, adding] = (list1.length > list2.length)? [list1, list2] : [list2, list1];
    //on the other hand, this is just unreadable and I could just be a simple andy 
    //and do a simple if else and not try to do something fancy, which might take more time
    let main;//main body
    let adding;//merging to main
    if(list1.length > list2.length) {
         main = list1;
         adding = list2;
    }else {
        main= list2;
        adding = list1;
    }

    console.log("main: " + main);
    console.log("adding: " + adding);
    //I know I want to loop over the list
    for(let i = 0; i < adding.length; i++) {

        //I want to check if the current less than the current one being added on to
        //at this point I'm assuming that there are no duplicates in the list
        //as that would cause issues
        // if(main[i] <= adding[i])
        // {
        //     main.splice(i, 0, adding[i]);
            
            
        // }

        /**
         * I want to have the current adding n number go over 
         * the main until it finds it's place, then continue 
         * with the next element of adding
         * so what it sounds like is this
         * insetad of checking main length I want to check for
         * adding's length because I'm spreading that 
         * over the main
         * */


        /**
         * now that I have my number I want to check if the number
         * I'm trying to find a space for the number 
         * so I'll loop over main until I find one, then break out
         * */
        for(let j = 0; j < main.length; j++) {
            //the current n to be srpead checking with the main's n
            //the idea is that if it's less it's equal two it doesn't really matter
            //just plop it in
            //then if it's less than, splice will place the number before that index
            //on insertion
            if(adding[i] <= main[j]){
                main.splice(j, 0, adding[i]);
                //is it good to use break?
                //I remember being told by someone I shouldn't use
                //them like this
                break;
            }
        }
    }
        return main;

}
//yeah this solution was a lot more fun, probably way faster, and helped me understand splice better
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
//again, for some reason, LeetCode says it's wrong when it's not? It's somehow not modifying main on the website
/**
 * Key takeaways:
 * 
 * array insertion at idex goes as followed arr.splice(index, deletionAmount, toInsert)
 * when inserting without deletion, it will place the item right before the last, pushing the replace up
 */

