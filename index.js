/* Замикання (closure) */

// scope - лексична область видимості

let value = 10; // глобальна область видимості

function log() {
    console.log('LOG function', value);
}

function wrapper() {
    let value = 20; // локальна область видимості
    console.log('WRAPPER function', value);

    return function log() {
        console.log('LOG function', value);
    }
}

// log();
//wrapper();

// log(); // 10
// wrapper(); // 20


/* */

// function counter() {
//     let i = 0;
//     i++;
//     return i;
// }

/////////

function makeCounter() {
    let i = 0;
    return function() {
        return ++i;
    }
}

function makeCounter2() {
    let counter = 0;
    return {
        increment() {
            return ++counter;
        },
        decrement() {
            return --counter;
        }
    }
}

const fnObj = makeCounter2();


//////



function remeberParametr(param) {
    return function() {
        return param;
    }
}

/*

Задача:
Написати функцію, яка приймає параметр і повертає іншу функцію, що очікує другий параметр
друга функція повертає суму двох параметрів

*/

function createAdder(first) {
    let accumulator = 0;
    return function(second) {
        return accumulator += first + second;
    }
}

const adder = createAdder(5);


/*


Створіть функцію isCorrectPassword, яка буде приймати правильний пароль і яка буде повертати внутрішню
функцію, яка приймає введену строку (також пароль) та повертає значення true, якща введена строка
(у другій функції) співпадає з паролем, false - якщо ні

*/

function isCorrectPassword(truePassword) {
    return function(checkedPassword) {
        if(checkedPassword === truePassword) {
            return true
        } else {
            return false;
        }
    }
}

const checkPassword = isCorrectPassword('123');

checkPassword('abracadabra'); // false
checkPassword('123'); // true


// https://developer.mozilla.org/ua/docs/Web
// protocol - https
// ://
// hostName - developer.mozilla.org
// path - /ua/docs/Web

const createURL = function(protocol) {
    return function(hostname) {
        return function(path) {
            return `${protocol}://${hostname}/${path}`
        }
    }
}

const rememberHost = createURL('https');

const site1 = rememberHost('test.org');
const site2 = rememberHost('site.com');
const site3 = rememberHost('wiki.org');

/*

site2('home')
'https://site.com/home'

site1('products/smartphones')
'https://test.org/products/smartphones'

*/

// ---------------------------

function createTodoList() {
    const tasks = []; // массив з завданнями у замиканні

    return {
        viewTasks() {
            return tasks;
        },
        addTask(task) {
            tasks.push(task);
            console.log('Додано завдання: ', task);
        },
        removeTask(taskText) {
            const index = tasks.indexOf(taskText);
            if(index !== -1) {
                tasks.splice(index, 1);
                console.log('Видалено завдання: ', taskText);
            } else {
                console.log('Завдання не знайдено: ', taskText);
            }   
        }
    }
}

// Створення списку завдань

const todoList = createTodoList();

todoList.addTask('task 1');
todoList.addTask('task 2');
console.log(todoList.viewTasks());
todoList.removeTask('task 2');
console.log(todoList.viewTasks());
todoList.removeTask('abracadabra');