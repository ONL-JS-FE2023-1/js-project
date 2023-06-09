'use strict';

// REST & SPREAD


// REST - ...
// ..., ..., ..., ..., -> []

// Задача: знайти суму двох елементів, а усі інші аргументи, які передали у функцію ззовні, при виклику - поклади у масив
function sum(a, b, ...arrrayOfRestArguments) {
    console.log(arrrayOfRestArguments);
    return a+b;
}

sum(3, 4); // 7
console.log(sum(1, 2, 3,4,5,6,7,89,2)); // 3

const arrowSum = (...rest) => {
    let sum = 0;
    for(let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }

    return sum;
}

const arrowSumReduce = (...restArray) => restArray.reduce((accumulator, current) => accumulator + current);
