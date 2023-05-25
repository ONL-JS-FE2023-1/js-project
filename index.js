/*

Переменная
Змінна
Variable

*/

/*
Створення змінної

ключове-слово ім'я-змінної

var -- deprecated

let - CD-RW
const - CR-R
*/

let box; // Оголошення змінної (Variable Declaration)

/* Оператор присвоєння = */

box = 5;
console.log(box);

let box2 = "Hello";
console.log(box2);

box2 = 10;
console.log(box2);

const isActive = false;
const isLogged = true;

const x = 10;
let y = x;
console.log(y);



/* Правила іменування */

let important variable = 0;

/* CamelCase */

let importantVariable = 0;

let a = 6; // bad practice

// Ім'я змінної змінної має пояснювати, що в ній зберігається

let data; // bad practice
let value; // bad practice

let _; // lodash
let $; // jquery

let #value; // private field
let _value; // private field

let 123value; // Це заборонено