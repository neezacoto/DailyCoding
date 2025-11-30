function pascal(n){
/**
 * The idea here was to create a pascal triangle in an organized object format
 * the strategy was to first get the two rows out the way, then focus on this pattern
 * on the first go just add the first digit of the previous array, and then add the current index with the next
 * then stop the for loop just one before because we are counting two up. Let's also account for the last digit, so 
 * with the last index also add it right after the the adding has been done.
 */
    let triList = {}
    for(let i = 0; i < n; i++) {
        if(i === 0) {
            triList[1] = [1]
        } else if(i === 1){
            triList[2] = [1, 1]
        }
        else {
            let temp = []
            for(let j = 0; j < triList[i].length-1; j++) {
                
                if(j === 0) {
                    temp.push(triList[i][j])
                }

                temp.push(triList[i][j] + triList[i][j+1])

                if(j === triList[i].length-2) {
                    temp.push(triList[i][j+1])
                }
            }
        
            triList[i+1] = temp;
        }

    }

    return triList;
}

console.log(pascel(50))

