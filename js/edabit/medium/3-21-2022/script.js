
const countTrue = (arr) => arr.filter(a => a).length;

const test = [true,false,true,false,false];

console.log(countTrue(test))

const seven = [2,6,9,6,17,0]

const sevenBoom = (s) => {
    const ref = s.join('');
    console.log([...ref])
    for(const i of [...ref]) {
        if(parseInt(i) === 7)
            return "Boom!";
    }
    return "there is no 7 in the array"
};

console.log(sevenBoom(seven));
