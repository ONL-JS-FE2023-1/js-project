function sum(a, b) {
    return a + b;
}

/*

Детермінова функція - функція, яка при одних і тих же аргументах повертає один і той самий результат

*/

sum(2, 2); // 4

const variable = 5;

function addToNumberSomeVariable(a) { 
    return a + variable;
}

console.log(addToNumberSomeVariable(5));

variable = 20;

console.log(addToNumberSomeVariable(5));