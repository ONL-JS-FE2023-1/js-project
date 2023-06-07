// forEach
// array.forEach(callbackFunction)

function square(a) { // приймає число і виводить у консолі квадрат цього числа
    console.log(a*a);
}

const array = [1, 2, 3, 4, 5];

// array.forEach(square); // return undefined

// array.forEach((item, index, array) => {
//     console.log(item * item)
//     console.log(index);
//     console.log(array);
//     console.log('--------------------------');
// })

// function declaration

const arr = [2, 44, 11, 234, 8, 2, 4, 1];

arr.forEach((item, index, array) => {
    console.log(item + 100);
})