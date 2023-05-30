//const value = Number(prompt('Введіть число'));

// if(value % 5 === 0) {
//     console.log('ділиться на 5');
// } else if(value % 3 === 0) {
//     console.log('ділиться на 3');
// } else if(value % 2 === 0) {
//     console.log('ділиться на 2');
// } else {
//     console.log('не ділиться на 5, 3 чи 2');
// }


/* 

switch (вираз) {
    case значення_виразу: робимо щось одне;
    case значення2_виразу: робимо щось інше;
    case значення3_виразу: робимо щось інше;
    default: робимо щось, якщо інші значення не підійшли
}


*/

const monthNumber = 1;
const winter = 'winter';
switch (monthNumber) {
    case 1:
    case 2:
    case 12: {
        console.log(winter);
        break;
    }
    case 3:
    case 4:
    case 5: {
        console.log('весна');
        break;
    }
    case 6:
    case 7:
    case 8: {
        console.log('літо');
        break;
    }
    case 9:
    case 10:
    case 11: {
        console.log('осінь');
        break;
    }
    default: {
        console.log('Введіть число від 1 до 12');
        break;
    }
}