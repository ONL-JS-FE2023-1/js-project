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