// reduce
// зводить якусь кількість елементів до одного результуючого значення
// array.reduce(callback, initialValue)

const array = [2, 3, 1];

function reducer(accumulator, elem) {
    return accumulator + elem
}

const sum = array.reduce(reducer, 0);