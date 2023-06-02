// [] - Обчислювальні властивості

const user = {
    'name': 'John',
    'favorite color': 'red',
    '0': 'value'
}


/*

Ключем може бути рядок або тип даних Symbol

*/

// . - оператор доступу за ім'ям властивості

user.name // 'John'
// user.'favorite color' // syntax error
// user.0 // syntax error

// [] - Оператор доступу до обчислюваної властивості
user['favorite color']; // 'red'
user[0]; // 'value'




const someObj = {
    2: 10
}

// someObj.2 // syntax error
someObj[2] // 10
someObj['2'] // 10