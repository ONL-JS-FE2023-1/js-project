class Stack {
    // push - додає елемент на вершину стеку
    // pop - повертає верхній елемент після видалення зі стеку
    // isEmpty - повертає true, якщо стек пустий
    // pick - повертає нам останній елемент, але нічого не робить із ним і не видаляє зі стеку

    constructor(maxSize) {
        this._maxSize = maxSize;
        this._size = 0;
    }

    get isEmpty() {
        return this._size === 0;
    }

    get size() {
        return this._size;
    }

    get maxSize() {
        return this._maxSize;
    }

    set size(value) {
        throw new Error('Access denied!');
    }

    set maxSize(value) {
        throw new Error('Access denied!');
    }

    push(value) {
        if(this.size >= this.maxSize) {
            throw new Error('Stack overflow');
        }

        this[`_${this.size}`] = value;
        this._size++;
        return this.size;
    }

    pop() {
        if(this.size > 0) {
            const lastItem = this[`_${this.size - 1}`];
            delete this[`_${this.size - 1}`];
            this._size--;
            return lastItem;
        }
    }

    pick() {
        return this[`_${this.size - 1}`];
    }
}

const myStack = new Stack(4);