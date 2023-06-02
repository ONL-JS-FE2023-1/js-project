const user = {
    name: 'John',
    lastName: 'Doe',
    age: 35,
    'favorite color': 'red',
    avatar: 'https://.....'
}

/*
Задача 1

Написати функцію, яка приймає об'єкт і виводить всі значення всіх ключів і значень, оформлені у **

obj = {
    key1: 'value2'
}

/// "key1": *value2*

*/

function task1(obj) {
    for(let key in obj) {
        console.log(`"${key}": *${obj[key]}*`);
    }
}