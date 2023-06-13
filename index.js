
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns {number} Sum of a and b
 * @throws {RangeError} If a or b is not a positive number
 * @throws {TypeError} If a or b is not a number
 */
function sumOfPositiveNumber(a, b) {
    if(a < 0 || b < 0) {
        // треба сповістити користувача, що число не підходить
        const error = new RangeError('Число менше нуля!');
        throw error; // return, тільки для помилок
    }
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('a && b мають бути числом!')
    }

    return a + b;
}


// throw <об'єкт помилки>

/* try..catch

try {

} catch(error) {

}

....

*/

try {
    sumOfPositiveNumber(2, -2);
    // щось робимо, очікуючи, що може статись помилка
} catch(error) {
    console.log(error.message);
    // обробка помилки (що ми робимо із помилкою?)
}

console.log('Usual code flow');