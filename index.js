const arr = [1, 2, 3];

function sumArray(array) {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
}

console.log(sumArray(arr));