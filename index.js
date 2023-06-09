'use strict';

function sum(a, b) {
    return a + b;
}

const arrow = (a, b) => a + b; // a+b === {return a+b}


const pow = x => x*x; // якщо 1 аргумент, то () можна опустити


const t1 = function () {
    console.log(arguments);
}

t1(1,2,3,4,5);

const t2 = () => {
    console.log(arguments); // Arrow Function не мають arguments
}

t2();

/*

1. Стрілочна функція не має власного контексту (її this буде вказувати на середовище її виконання)
2. Стрілочна функція не може бути функцією-конструктором
3. Стрілочна функція не має колекції arguments

*/