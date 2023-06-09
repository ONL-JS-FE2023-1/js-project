'use strict';

// REST & SPREAD


// REST - ...
// ..., ..., ..., ..., -> []

const arrowSumReduce = (...restArray) => {
    return restArray.reduce((accumulator, current) => {
        return accumulator + current
    }, 0)
}

// SPREAD 
// [] -> ..., ..., ..., ...,

const numbers = [1,2,3,4,5];
console.log(arrowSumReduce(numbers)); // не спрацює
console.log(arrowSumReduce(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]));
console.log(arrowSumReduce(...numbers));


Math.min(2,3,1,5,4);
//1
Math.min([2,3,1,5,4]);
//NaN
const number = [2,3,1,5,4]
//undefined
Math.min(number)
//NaN
Math.min(...number);
//1

