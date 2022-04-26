function pascelString(n){

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

console.log(pascelString(50))

