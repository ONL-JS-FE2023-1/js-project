class Test {
    constructor(value1, value2) {
        this.key1 = value1;
        this.key2 = value2;
    }

    method() {
        // todo
    }

    static newMethod2() {
        // todo
        // this в статичних методах не використовується
        console.log('Hello from newMethod2!')
    }
}

Test.newMethod = function(value) {
    // щось робите
    // this в статичних методах не використовується
    console.log('Hello from newMethod!')
}

const obj1 = new Test(); // створює нову сутність
obj1.method(); // виклик методу екземпляра

/* static methods */

Test.newMethod();
Test.newMethod2();
