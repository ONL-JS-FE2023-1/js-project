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