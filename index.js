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

/*

arrMy
MyArray {length: 0}length: 0[[Prototype]]: Object
arrMy.push(1,2,3,4,5)
5
arrMy
MyArray {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5}0: 11: 22: 33: 44: 5length: 5[[Prototype]]: Object
arrMy.pop()
5
arrMy
MyArray {0: 1, 1: 2, 2: 3, 3: 4, length: 4}0: 11: 22: 33: 4length: 4[[Prototype]]: Object
arrMy.forEach((item) => {
    console.log(item);
})
VM4884:2 1
VM4884:2 2
VM4884:2 3
VM4884:2 4

*/

/*

arrMy.push(1,2,3,4,5)
5
arrMy
MyArray {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5}
arrMy.map((item) => item*2)
MyArray {0: 2, 1: 4, 2: 6, 3: 8, 4: 10, length: 5}0: 21: 42: 63: 84: 10length: 5[[Prototype]]: Object
const test = arrMy.map((item) => item*2);
undefined
test
MyArray {0: 2, 1: 4, 2: 6, 3: 8, 4: 10, length: 5}

*/