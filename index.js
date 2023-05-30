/*

High Order Function - Функція вищого порядку - це функція, яка приймає іншу функцію в якості аргумента

Callback - Колбек (функція зворотнього виклику) - це функція, ЯКУ передали як аргумент іншій функції

*/

function sum(a, b) {
    return a + b;
}

function div(a, b) {
    return a / b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function doingSomething(arg1, arg2, fun) { // HOF 
    const result = fun(arg1, arg2);
    return result;
}

doingSomething(2, 4, sum); // 6
doingSomething(2, 4, sub); // -2


// function яка сортує
// HOF

doingSomething(3, 5, function (a, b) {
    return a*b;
})