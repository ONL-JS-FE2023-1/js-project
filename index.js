/*

Задача:

Вивести на консоль таблицю множення від 1 до 5 у вигляді:

1x1 = 1
1x2 = 2
...
2x1 = 2
2x2 = 4
...
5x1 = 5
5x2 = 10
5x3
5x4
5x5

*/

for(let i = 1; i <= 5; i++) { // 1
    for(let j = 1; j <= 5; j++) { // 1..2..3..4..5
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

const number = [[1,2,3], [4,5,6], [7,8,9]];

function sumArray(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }

    return sum;
}

console.log(sumArray(number));