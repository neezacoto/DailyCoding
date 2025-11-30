function solution(prices) {

    //[6, 3, 1, 2, 5, 4]
    //max 5: i 4
    //min 1: i 2


    //3
    //100
    //97
    //100 - 3
    
    //100
    //1
    // 1 - 100
    let buy = 0; // taking
    let sell = 0; 
    //0 buy 1 sell
    let pairs = [];
    
    //
    for(let i = 0; i < prices.length; i++) {
        for(let j = 0; j < prices.length; j++) {
            pairs.push( prices[j] - prices[i])
        }
        }
    
    let arr = [3,56,6]
    
    Math.max(arr)
    
    /**
    * [
         0, -3, -5, -4, -1, -2,  3,  0, -2,
        -1,  2,  1,  5,  2,  0,  1,  4,  3,
        4,  1, -1,  0,  3,  2,  1, -2, -4,
        -3,  0, -1,  2, -1, -3, -2,  1,  0
        ]
     */
    
    console.log(pairs);
    console.log( Math.max(...pairs))
    
    return Math.max(pairs);
     
    //[3, 100, 1, 97]
    //
    
    
    
    // for(let i = 0; prices.length; i++) {
    //     //0
    //     //6
    //     if(min > prices[i]){
    //         min = prices[i]
    //     }
        
    //     if(max < prices[i]){
    //         max = prices[i]
    //     }
    // }
    // console.log(max)
    // console.log(min)
}

console.log(solution([3, 100, 1, 97]))