let test;

function sum(a, b) {
    test = 1;
    return a + b;
}

// Side effect - Побічний ефект

console.log('Hello');
alert();
fetch(); // Запити на сервер або будь-які міжмережеві запити


/* 

Чиста функція (Pure function):
1. Детермінована функція
2. Не має побічних ефектів

*/