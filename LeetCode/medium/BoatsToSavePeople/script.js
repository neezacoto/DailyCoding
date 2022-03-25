//You are given an array people where people[i] is the weight of the ith person, 
//and an infinite number of boats where each boat can carry a maximum weight of limit.
// Each boat carries at most two people at the same time, provided the sum of the weight 
//of those people is at most limit.

// Return the minimum number of boats to carry every given person.

 

// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)
// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
// Example 3:

// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

const numRescueBoats = (people, limit) => {

    let boats = []; // will hold the boats
    /**
     * I want to use the original array as a reference
     * and mutate the amount of people I'm iterating over
     */
    const peopleLeft = [...people];
     
    /**
     * The idea here is that I want to iterate over the list and compare each 
     * Element to see if there is a sum that is under or equal to the limit
     * if not go in a boat alone. 
     * 
     * So, instead of checking to see if I'm checking against the same person, I'll remove
     * them from the array and iterate over it and there will be no need to check. Then
     * once I found my sum I can push it to boats, but if there is non the person I'm holding 
     * gets pushed alone.
     */

    //the number of times I need to iterate is people, but if there are no people left stop
    for(let i = 0; i < people.length && peopleLeft.length; i++) {
        let hold = [];//reseting the boat I need to check for
        hold.push(peopleLeft.shift());//taking the next element to be checked
        //now I want a greatest sum, because for cases like [3,8,7,1,4]
        //I don't want 3,1 to be added, instead I want 3,4 & 8,1, which will allow me less boats
        let greatestSum = 0;

        //now iterating over the people left to find a match
        for(let j = 0; j< peopleLeft.length; j++) {
            //console.log(`${hold[0]} + ${peopleLeft[j]} = ${hold[0] + peopleLeft[j]}`)
            
            //if there is a match, take the match out of the array
            if(hold[0] + peopleLeft[j] <= limit) {

                //check for the greatest sum if the minimum is entered
                if(greatestSum < hold[0] + peopleLeft[j])
                    greatestSum = peopleLeft[j];
                // hold.push(...peopleLeft.splice(j,1));//then add that match to the current holdings
                //break from the array because there need not be anymore checks
            }
        }

        //now that we are outside fo the inner forloop,
        //to get access to the greatest sum index, we use idex of
        //only do so if greatest sum is not 0 
        if(greatestSum)
            hold.push(...peopleLeft.splice(peopleLeft.indexOf(greatestSum),1));

        boats.push(hold);//push what is left in the holdings after match check

    }

    //console.log(boats);
    return boats.length; //now I don't need to return boats, but how many there are
}

console.log(numRescueBoats([1,2],3));
console.log(numRescueBoats([3,2,2,1],3));
console.log(numRescueBoats([3,8,7,1,4],9));
console.log(numRescueBoats([3,8,4,9,2,2,7,1,6,10,6,7,1,7,7,6,4,4,10,1],10)) //wrong

//my answer ended up being wrong, but there is a faster way of doing this, I had a hunch to sort,
//but brushed it off thinking it was not important. Although I'm glad I did do such a complicated
//problem as I was able to practice some more javascirpt than if I had done it the smart way

//here is a better solution

const numRescueBoats2 = (people, limit) => {

    console.log(people);
    people.sort();
    console.log(people);
    people.sort((a, b) => a - b);
    console.log(people);
    let boats = 0;
    let i = 0;
    let j = people.length - 1;

    while (i <= j) {
        boats++;
        if (people[i] + people[j] <= limit) {
        i++;
        }
        j--;
    }

    return boats;
}

console.log(numRescueBoats2([44,10,29,12,49,41,23,5,17,26],50))