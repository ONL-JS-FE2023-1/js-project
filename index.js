/* Перетворення типу даних (Приведення) */
// явне
// неявне

let box1 = 6 - '1'; // неявне перетворення типів
console.log(box1);

let thisIsNumber = Number('45'); // явне перетворювання
console.log(thisIsNumber);
let thisIsNumber2 = '45' - 1; // неявне (автоматичне)
console.log(thisIsNumber2);

let thisIsNumber3 = Number('55') - 5; // явне
console.log(thisIsNumber3);


/*
Boolean автоматично приводиться до типу Number
true = 1
false = 0
*/

/* String */

let str = String(45);
console.log(str);

let str2 = null + 'TEST'; // неявне перетворення
console.log(str2);

let str3 = String(null) + 'TEST'; // явне перетворення
console.log(str3);

let notANumber = 2 * 'Hello';
console.log(notANumber); // NaN => Not-a-Number

/* Typeof */
let box = true;
console.log(typeof thisIsNumber);