// Loops - Цикли

/*

while (умова) {
    код повторюється, поки умова = true
}

*/

// let iterator = 0;

// /* Прохід циклу (коло) - ітерація */
// while (iterator < 10) {
//     console.log(iterator);
//     iterator++;
// }


while (true) {
    console.log('test');
    break;
}

// Задача: зробити 10 повторів циклу, вивести на консоль парні значення лічильнику

let iterator = 0;
while(iterator < 10) {
    if(iterator % 2 === 0) {
        console.log(iterator);
    }

    iterator++;
}

/*

password = qwerty1234;

Запитуйте у користувача пароль через prompt, поки він не співпаде з тим, що лежить в змінній

*/

let pass = 'qwerty1234';

// variant 1
// let userPass = prompt('Введіть свій пароль');
// while(userPass !== pass) {
//     userPass = prompt('Невірний пароль! Введіть ще раз!');
// }

// variant 2
while(true) {
    let userInput = prompt('Введіть свій пароль');
    if(userInput === pass) {
        break;
    }
}
