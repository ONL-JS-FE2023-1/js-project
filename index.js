// const time1 = new Date();

console.time('operation');

let sum = 0;
for(let i = 0; i < 50000; i++) {
    sum += i;
}

console.timeEnd('operation');

// const time2 = new Date();

// console.log(time2.getTime() - time1.getTime());