const arr= [5,1,3,2,6];

//filter

function isodd(x){
    return x % 2 === 0;
}

const output = arr.filter(isodd);

console.log(output);