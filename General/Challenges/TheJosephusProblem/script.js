/**
 * In computer science and mathematics, the Josephus problem is a 
 * theoretical problem related to a certain counting-out game. 
 * People are standing in a circle waiting to be executed. Counting begins 
 * at a specified point in the circle and proceeds around the circle in 
 * a specified direction.
 */

let solveJoeP = (chairs)=> {
    let people = []
    for(let i=0; i < chairs; i++) {
        people[i] = i+1
    } 
    //console.log(people)
    let n
    for(n = 1; n <= (people.length + 1); n++) {
       
        console.log(people + " index: " + n + " length: " + people.length)
        //last survivor
        if(people.length === 1)
            return people[0]
        //added because if the end element is removed, n > people.length
        
        if(n === people.length) {
            console.log("hello")
            n = 0
        }else if (n > people.length) {
            n = 1
        }
            
        //eliminate
        people.splice(n, 1)
        
    }
    console.log(people)
    console.log("Ended with " + n)
    return -1
    //wanted to try something with a linked list sort of pattern, but it quickly 
    //became too complicated
    // for(let i = 0; i < (people.length - 1); i++) {
    //     people[i].next = people[i+1]
    // }
    // people[people.length-1].next = people[0];
    
    // let lastTurn = -1
    // let currentTurn = 0
    // while(lastTurn !== currentTurn) {
    //     if(people[currentTurn].isAlive) {
    //         let toElim = people[currentTurn].next.id
    //         lastTurn = currentTurn
            
    //         while(true) {
    //             if(people[toElim].isAlive){
    //                 people[toElim].isAlive = false;
    //                 break
    //             }
    //             toElim = people[toElim].next.id
    //         }
    //         let next = toElim
    //         while(true) {

    //         }
    //     }
    //  }
    
    //og approach that didn't make much sense, because it did not pay attention to turns
    // let play = (arr)=> {
    //     if(arr.length === 1)
    //         return arr[0]
    //     let temp = []
    //     for(let i = 0; i < arr.length; i++) {
    //         if(i % skip === 0) {
    //             temp.push(i)
    //         }
    //     }
    //     play(temp)
    // }
    //return play(people)


}

console.log(solveJoeP(41))