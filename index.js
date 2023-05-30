//let num1 = Number(prompt('Введіть перше число'));
//let num2 = Number(prompt('Введіть друге число'));

function addTwoNumbers(arg1, arg2) {
    const result = arg1 + arg2;
    return result;
}

//const result = addTwoNumbers(num1, num2);
//console.log(result);

const globalVariable = 10;

console.log(globalVariable);

globalFunction()
function globalFunction() {
    // код функції
    let num1 = 0;
    console.log('Hi from global function!')
}

globalFunction()

if(true) {
    globalFunction();
}

function testFunction() {
    const localVariable = 0; // локальна змінна

    console.log(globalVariable);

    if(true) {
        const innerVariable = 30;
        console.log(innerVariable); // Доступ до змінної innerVariable
        console.log(globalVariable);
        console.log(localVariable);
    }

    console.log(innerVariable); // Помилка: innerVariable недоступна тут

    return localVariable;
}

console.log(localVariable);

// var -- deprecated
