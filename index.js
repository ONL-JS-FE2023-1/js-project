const arr = [3, 6, 8, 2, 3, 5, 1];

function maxArray(array) {
    let max = array[0];

    for(let i = 0; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

console.log(maxArray(arr));