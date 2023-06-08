function MyArray() {
    this.length = 0;

    // push
    this.push = function (value) {
        // v1
        // this[this.length] = value; // this[key] = value
        // this.length++;
        // return this.length;

        // v2
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }

        return this.length;
    }

    // pop
    this.pop = function () {
        if (this.length > 0) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        }
    }

    // forEach
    this.forEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
}

const arr = new MyArray();

arr.push(1, 2, 3, 4, 'test', 5, 6)

arr.forEach((item) => {
    console.log(item);
})