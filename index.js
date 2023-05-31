/*

Objects

Об'єкти мають:
- властивості
- методи

*/

let obj = {
    color: 'red',
    fontSize: 2,
    'favorite food': 'fish'
}

/*

Об'єкт Автобіль

Властивості
- марка
- модель
- рік випуску
- швидкість

Методи
- прискоритись
- гальмувати
- змінити напрямок

*/

/*

Об'єкт банківський рахунок

Властивості
- номер рахунку
- баланс
- власник
- тип рахунку

Методи
- зняти гроші
- поповнити рахунок
- переказати кошти

*/

let bulb = {
    lightness: 200,
    power: '200W',
    cap: 'small',
    on: function() {
        return 'The light on!'
    }
}

console.log(bulb.lightness);

console.log(bulb.on());

let dog = {
    name: 'Tuzik',
    'favorite food': 'meat'
}

console.log(dog['favorite food']);


// Створення об'єктів

// 1
const cat = {

} // літеральне створення об'єкта

// 2
const cat2 = Object(); // функція-конструктор

// 3
const cat3 = new Object(); // функція-конструктор з оператором new