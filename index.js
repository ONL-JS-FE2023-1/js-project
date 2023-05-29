let number1 = Number(prompt('Введіть перше число')); // 1: prompt -> '5' ; 2: Number('5') -> 5
let number2 = Number(prompt('Введіть друге число')); // 1: prompt -> '10' ; 2: Number('10') -> 10
let result = number1 + number2;

if(Number.isNaN(result)) {
    console.log('Ти не правий, введи число');
} else {
    console.log(result);
}