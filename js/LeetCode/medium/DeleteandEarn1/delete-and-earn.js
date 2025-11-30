// You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

// Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
// Return the maximum number of points you can earn by applying the above operation some number of times.

 

// Example 1:

// Input: nums = [3,4,2]
// Output: 6
// Explanation: You can perform the following operations:
// - Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
// - Delete 2 to earn 2 points. nums = [].
// You earn a total of 6 points.
// Example 2:

// Input: nums = [2,2,3,3,3,4]
// Output: 9
// Explanation: You can perform the following operations:
// - Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
// - Delete a 3 again to earn 3 points. nums = [3].
// - Delete a 3 once more to earn 3 points. nums = [].
// You earn a total of 9 points.
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

//maybe I want to create a set to pick the possiblee choices whet iterating
var greatestPossibleCombination = (nums) => {
    
    //The idea here is that the set will only contain the possible choices one can make
    const possibleChoices = new Set(nums);
    //I'm thinkinng maybe I iterate over the list with the possible choices and store the results in a value pair.
    //Then once I'm finished I'll loop over the dictionary to see which one has the greatest output, then return the key.
    let results = {};
    let currentCheck;

    for(const choice of possibleChoices) {
        //once I get a choice I want to iterate over the list removing what I need to remove, then add up what is remaining.
        //to me in the problem it says it deletes the choicen integer over and over again, but I don't really have to.
        //I can keep it in there, see the first element in the remaning array then multiply it by the length.

        //I went back and created current check because I need a temperary array to preform the changes, then store the
        //results in the results dictionary
        //now when I say the actions outloud it sounds like I need to filter the list to get rid of n+1 & n-1, so I'll use filter()
        //what this implies is that if the filter n is not +1 or -1 of the current choice bring into current check.
        currentCheck = nums.filter( n => !(choice+1 === n || choice-1 === n) );

        //appraently there is some bug with this code, it's adding up a lot for some reason so
        //I'm going to test it out a little
        //console.log('currentCheck: ' + currentCheck)


        //this was not accounting for if there are different numbers in than it'self.
        //results[choice] = currentCheck[0] * currentCheck.length

        //I at first was thinkining of doing some sort of for loop, but I wondered if there was a better wat to find the sum of an array
        //I came accross this solution:
        //using reduce (introduced in ES6) returns a callback of the original passthrough. So I can use this to find the sum of an 
        //array easily by passing the prev iteration + the current, which gives me the sum.
        results[choice] = currentCheck.reduce( (prev, cur) => prev + cur );
    }

    //checking to see if everything is coming out how I want it.
    // console.log("nums: " + nums);
    // console.log(possibleChoices);
    // console.log(results);

    //now that I have my list of possible choices 
    //what's interesting now is that I don't see the problem account for two choices being the same.
    //I guess I'll see what I'll do when I get there

    //I'm thinking of iterating over the list to find the greatest value pair by keeping a greatestNumber varibable and swapping it out
    //if any other numbers are greater; however I wanted to find a better solution for this task:
    //using the math function max() from ES6, we can pass a series of numbers and get the maximum number
    
    //this is what I want to do, but dictionaries aren't iterable, mabye I'll have to use Object.keys() to get the array
    //let max = Math.max([...results]);

    //It seems to be that my array is a string, maybe I should have used maps? but I'll keep going with this
    // max = Math.max(Object.keys(results));
    // console.log(Object.keys(results))
    // console.log(max);

    //so it seems it can't litterally be passed an array
    //maybe I can spread the array twice somehow to give it some valid input?
    //I've checked and it seems to not care about strings being passed into max
    // let max = Math.max();
    // let findMax = Object.keys(results)
    // console.log([...findMax])
    // console.log(max);

    //I seem to not be getting anywhere with this, and I read that reduce is much more preformant in the comments of a stackoverflow
    //so I guess it honestly wouldn't be that hard to translate that logic into a rudce function
    //using a ternary operator, if the previous in greater than the current return current, if not return curr

    //haha, this returns the keys, I don't want that, maybe I should have started with a map, but im too far in
    //to turn back.
    // let max = Object.keys(results).reduce( (prev, curr) => (prev > curr)? prev : curr);
    // console.log(max)
    
    //trying to use reduce in the way I'm thinking might be too much of what I'm looking for, maybe I'll just be
    //simple and use a foreach

    //after writing line 105, maybe I should store it in an array format for simplcity sake so I can return
    //the key one time when I'm finished. 
    //key 0 val 1
    let max = [0,0];
    for(const [key, val] of Object.entries(results)) {

        //this way honestly might just be eaier
        //also it will allow me to get the key one time
        max = (max[1] > val)? max : [key,val];

    }

    //checking my results
    //console.log(max);   

    //now return the key with the greatest possible result
    //return max[0];

    //oh, it appears it wants the value not the number
    return max[1];

    //solution complete :)
    //I just realized I solved the wrong problem it makes sense now why they call it delete and earn. It's not n+1 n-1
    //n representing the choice.
    //it's arr[n+1] and arr[n-1] to delete, so I guess that might honestly be somewhat easier than what I'm doing
    //I'll start a new selution bellow
    
}

console.log(greatestPossibleCombination([1,1,1,2,4,5,5,5,6]));

const deleteAndEarn = (nums) => {

    //so I'll start with the poinsts, and do if statements to check if it's going to go out of bounds or not
    //I'll have to run this senerio with each number so I guess I'll make points an array then check at the 
    //end which has the greatest value, since I don't need to know the number just the result it should be
    //easier than the logic above

    //scratching this and starting a new
        //I'll start with some of the same logic
        // const possibleChoices = new Set(nums);
        
        // //we only need an array this time, keys don't matter
        // let results = [];
        // let currentCheck;
        // let currentPoints;

        // for(const choice of possibleChoices) {
        //     currentPoints = 0;

        //     //I want to get the final result after all the deletions
        //     currentCheck = nums.filter( n => !(choice+1 === n || choice-1 === n) );
        //     results[choice] = currentCheck.reduce( (prev, cur) => prev + cur );
        // }

    let result = [];

    let points;
    let currentCheck;
    let right;
    let left;
    let newList;
    //so I want to run through nums and find the solution for each entry
    for(let i = 0; i < nums.length; i++) {
        
        //now that I have one entry I'll remove [n-1] and [n+1] duplicates
        //so it looks like another for loop
        //maybe I dont' have to remove the from an array persay, but not just count them

        //the idea is to set what I don't want count beforehand then check
        // let left = (i !== 0)? nums[i-1] : -1;
        // let right = (i !== nums.length -1)? nums[i+1] : -1;

        // console.log("index: " + i);
        // console.log("left: " + left);
        // console.log("right: " + right);

        //I probably don't even need a forloop, I have some filter conditions right here

        // let currentCheck = nums.filter( (n) => (n !== right || n !== left) );

        //print to see what we got 
        // console.log(currentCheck)
        //Actually I think I'll stop here, I don't understand this problem and I with I could ask questions.
        //It originally says take away an element then delete that elements previous index and next index and their duplipcates
        //however in the example [3,4,2] 2 is not deleted for some reason. so I really don't understand what they are trying to
        //ask. Also even in the case of [2,2,3,3,3,4,4] why aren't the other three's removed, that's not indexed based at all.

        //nevermind, to be honest, I'll just finish it for the fun of it. I really don't care about the leet code
        //"solution" and their points. I'm here to grind out a problem I set on, and I'm going to finish it. 

        //maybe I'll just literally delete elements in the array, and do literally what it says and see what happens.
        //maybe I'm over thinking it to try and find a hacky solution

        points = 0;
        currentCheck = [...nums];
        points += parseInt(currentCheck.splice(i, 1));
        currentCheck.splice(i, 1)
        // console.log(points);
        // console.log(i)
        left = (i !== 0)?  currentCheck[i - 1] : -1;
        right = (i !== currentCheck.length - 1)? currentCheck[i + 1] : -1;
        
        // console.log("left: " + left);
        // console.log("right: " + right);

        // console.log(currentCheck)

        newList = currentCheck.filter( (n) => !(n === right || n === left) );

        // console.log(newList);

        // console.log(newList.reduce( (prev, cur) => prev + cur ) + points )
        // console.log(newList.reduce( (prev, cur) => prev + cur ))

        sum = (!newList)? newList.reduce( (prev, cur) => prev + cur ) : 0;

        result.push(  sum + points )
        
    }
    //I kept putting result in brackets making it an array. For some reason I thought the ... operator must be in brackets
    //guess I don't need to do that, but it would only make sense to do that for paremeters.
    // console.log(Math.max(...result))

    return Math.max(...result)
}

//this should be the correct solution for the way how I understood the problem.
console.log(deleteAndEarn([3,4,2]))

/**
 * key learning points from this exercise:
 * 
 * you can use reduce( (previous_callback, current_index) => solution ) for things like adding the sum of on index
 * 
 * apparently Math.max() is slower than reduce, I'd have to double check
 * 
 * Math.max(...array) will return the greatest value in the array
 * 
 * and that the spread operator dosen't have to be in brackets, and can be passed as an operator without them
 * 
 * refreshing up on splice(index, how_much_splicing):
 * 
 * if you do it outright it will modify the list, but if you assign it, no changes will be made
 * 
 * 
 * Object.entries can be used to iterate over an object dictionary:
 * 
 * for(const [key, val] of Object.entries(results)) {

        //this way honestly might just be eaier
        //also it will allow me to get the key one time
        max = (max[1] > val)? max : [key,val];

    }
 * 
    this reminds me about iterating over a dictionary with Object.keys:

    Object.keys(array).filter( (key, value) => do something)


    one completes an action based on each entry .vs the other filtering the dictionary
 * */