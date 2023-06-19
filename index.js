Object
Boolean
String
Number
BigInt
null
undefined
Symbol

const symb = Symbol(); // без new!!

const symb2 = Symbol('My second symbol'); // label for human

// У об'єктах ключами можуть бути або рядки, або символи
const obj = {
    test: 1,
    [symb2]: 123
}