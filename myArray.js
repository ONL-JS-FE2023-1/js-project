function MyArray() {
    this.length = 0;
}

function MyProtoArray() {
    this.push = function () {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }

        return this.length;
    },
    this.pop = function () {
        if (this.length > 0) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        }
    },
    this.forEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
}

MyArray.prototype = new MyProtoArray();

const arr = new MyArray();