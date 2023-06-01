/*

1. Ім'я з великої літери
2. Функція-конструктор повинна виконуватись лише за допомогою операртора new

*/

// Функція-конструктор

function Cat(name, color, breed, age) {
    this.name = name; // this - посилання на ось цього новоствореного кота
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.run = function() {
        return this.name + ' is running!';
    }
}

const cat1 = new Cat('Bublik', 'red', 'siam', 2);
const cat2 = new Cat('Murzik', 'black', 'siam', 4);
const cat3 = new Cat('Barsik', 'white', null, 4);