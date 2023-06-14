/* class - клас

class MyClass {
    // властивості класу.....

    // методи класу
    constructor() {...}
    method1() {...}
    method2() {...}
    methodN() {...}
}

*/


class User {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`
    }
}

const us1 = new User('John', 'Doe', 59);
const us2 = new User('Jane', 'Doe', 65);

/* Rules

1. constructor() при створенні класу - обов'язковий
2. Ми не можемо самостійно звернутись до конструктора
3. Конструктор може бути тільки один
4. Ім'я класу пишеться завжди з великої літери

*/


// _
/*

Геттер - метод для отримання значення
Сеттер - метод для встановлення значення

*/

const MIN_ZP = 6000;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZP/WORK_DAYS;
class Worker {
    constructor(name, lastName, rate = MIN_RATE, days = 0) {
        this.name = name;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }

    set rate(value) {
        if(typeof value !== 'number') {
            throw new TypeError('Rate must be a number!');
        }

        if(value < 0) {
            throw new RangeError('Rate must be a positive number')
        }

        this._rate = value;
    }

    get rate() {
        return this._rate;
    }

    getSalary() {
        return `Робітник ${this.name} ${this.lastName} заробив ${this.rate * this.days}$`
    }
}

const worker1 = new Worker('John', 'Doe', 300, 12);
worker1.rate = 5000 // setter
worker1.rate // getter


// Параметри за замовченням 

function displayArguments(a = 10, b = 5) {
    console.log(a, b);
}

//displayArguments() // 10 5
//displayArguments(100, 200) // 100 200



/*

Задача: порахувати загальну вагу автомобіля

Клас авто
Клас паливо


*/

class Fuel {
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }

    getWeight() {
        return this.volume * this.density;
    }
}

const benzin = new Fuel(50, 0.9);


const MIDDLE_WEIGHT_PASSENGER = 80;
class Auto {
    constructor(name, ownWeight, fuel, passengersCount) {
        this.name = name;
        this.ownWeight = ownWeight;
        this.fuel = fuel;
        this.passengersCount = passengersCount;
    }

    // метод, який обраховує вагу власну автомобіля + вага палива
    getFullWeight() {
        return this.ownWeight + this.fuel.getWeight() + (this.passengersCount * MIDDLE_WEIGHT_PASSENGER);
    }
}

const auto = new Auto('Lexus..', 4000, benzin, 2);