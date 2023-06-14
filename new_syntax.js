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

    getSalary() {
        return `Робітник ${this.name} ${this.lastName} заробив ${this.rate * this.days}$`
    }
}

const worker1 = new Worker('John', 'Doe', 300, 12);


// Параметри за замовченням 

function displayArguments(a = 10, b = 5) {
    console.log(a, b);
}

//displayArguments() // 10 5
//displayArguments(100, 200) // 100 200