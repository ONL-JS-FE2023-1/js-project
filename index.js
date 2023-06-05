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
    for (let key in obj) {
        console.log(`"${key}": *${obj[key]}*`);
    }
}


/*

Task2:

Написати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів

*/

const departmentSalary = {
    HR: 20000,
    development: 1000000,
    drive: 300,
    assistant: 5000,
    marketing: undefined
}

function sumSalary(salaryObj) {
    let result = 0;

    for(let key in salaryObj) {
        if(typeof salaryObj[key] === 'number') {
            result = result + salaryObj[key];
        }
    }

    return result;
}