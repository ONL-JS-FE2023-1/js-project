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