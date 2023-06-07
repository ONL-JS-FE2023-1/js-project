
// Задача: написати функцію, яка повертає суму БУДЬ-ЯКОЇ кількості переданих їй аргументів

// Array.from(iterable)

function sum () {
    const arrayArgs = Array.from(arguments); // нормальний масив з об'єкту arguments
    let sum = 0;
    for(let i = 0; i < arrayArgs.length; i++) {
        sum += arrayArgs[i];
    }

    console.log(sum / arrayArgs.length);

    return sum;
}

console.log(sum(1, 2, 3));
