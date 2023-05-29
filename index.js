/* Об'явлення функції

function ім'я_функції(argument1, argument2) {
    // тіло функції
}

*/

function greetingUser(username) {
    console.log('Привіт, ' + username);
    // ... 100 рядків коду
}

/* Використання функції */
greetingUser('Alex'); // Alex - аргумент функції
greetingUser('Ivan');
greetingUser('Kolya');
greetingUser('Simon');

/*
Створіть функцію, яка приймає число, додає до нього 5 і виводить результат на консоль
*/

function addFiveToNumber(number) {
    let result = number + 5;
    console.log(result);
}

addFiveToNumber(15);

/* Задача: написати функцію, яка складає 2 числа і повертає результат розрахунку */

function addTwoNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}

let functionResult = addTwoNumbers(2, 4);
console.log(functionResult);