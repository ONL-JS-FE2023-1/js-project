// function MyArray() {
//     this.length = 0;
// }

// function MyProtoArray() {
//     this.push = function () {
//         for (let i = 0; i < arguments.length; i++) {
//             this[this.length] = arguments[i];
//             this.length++;
//         }

//         return this.length;
//     },
//     this.pop = function () {
//         if (this.length > 0) {
//             let lastItem = this[this.length - 1];
//             delete this[this.length - 1];
//             this.length--;
//             return lastItem;
//         }
//     },
//     this.forEach = function (callback) {
//         for (let i = 0; i < this.length; i++) {
//             callback(this[i], i, this);
//         }
//     }
// }

// MyArray.prototype = new MyProtoArray();

// const arr = new MyArray();

class MyArray {
    constructor() {
        this.length = 0;
    }

    static isMyArray(obj) {
        return obj instanceof MyArray;
    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }

        return this.length;
    }
    pop() {
        if (this.length > 0) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        }
    }
    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }

    map(callback) {
        const newArr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArr.push(callback(this[i], i, this));
        }

        return newArr;
    }

    unshift(...value) {
        // створюємо пустий масив
        // на початок пустого масиву (push) додалюємо value
        // масив, на якому викликали unshift, додаємо його всі елементи до кінця пустого масиву

        const temp = new MyArray();
        temp.push(...value);

        this.length += value.length;

        for(let i = 0; i < this.length - 1; i++) {
            temp.push(this[i]);
        }

        for(let i = 0; i < this.length; i++) {
            this[i] = temp[i];
        }

        return this.length;
    }
}

const arrMy = new MyArray();
arrMy.push(1,2,34,5);