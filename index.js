// let num1 = Number(prompt('Введіть перше число'));
// let num2 = Number(prompt('Введіть друге число'));

// function addTwoNumbers(arg1, arg2) {
//     const result = arg1 + arg2;
//     return result;
// }

// let result = addTwoNumbers(num1, num2);
// console.log(result);
















// task 1

//const number1 = Number(prompt('Введіть перше число')); // String
//const number2 = Number(prompt('Введіть друге число'));

function getBigger(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else if(num2 > num1) {
        return num2;
    } else if(num1 === num2) {
        return 'Числа рівні!'
    } else {
        return 'Сталась помилка!'
    }
}

//const result = getBigger(number1, number2);
//console.log(result);




// task 2

function average(num1, num2) {
    const avg = (num1 + num2) / 2;
    return avg;
    // return (num1 + num2) / 2;
}


// task 3

function isEven(num) {
    if(num % 2 === 0) {
        return true; // return 'Число парне';
    } else {
        return false; // return 'Число непарне';
    }
}