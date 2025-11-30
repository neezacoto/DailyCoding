/**
 * 
 * The original problem dealt with a diamond square shape that we had to find the area of. The n would represent the area,
 * the idea behind how I solved it is that I first tried going around the perimeter, but then I wondered what if I found the 
 * full square and then cut off the sides to find the diamond, and that's what I did
 * 
 */

function solution(n) {
    //1
    //5
    //13
    //25
    
    //5: n=2: 0TR 0TR 0TR 0TR
    //n-2: 0;
    //13: n3: 0TR 0R 0TR
    //cas: n-2: 1 
    //n = 1 1
    //9:1 n =2 p = 3
    //25:3 n = 3 p = 5
    //49:6 n = 4 p = 7
    //81:10 
    
    //on n-2 on cascades
    // let casc = n-2;
    // let area = 0;
    // for(let i = 0; i < n.length-1; i++) {
    //     if(i % casc === 0) {
    //         area++;
    //     }else {
    //         area +=2;
    //     }
    // }
    let key = 1;
    let cut = 0;
    for(let i = 0; i < n-1; i++) {
        key += 2;
    }
    for(let i = 1; i < n; i++) {
        cut += i
    }
    
    // console.log(n)
    // console.log(cut);
    // console.log(key);
    return key * key - (4 * cut);
    
}

