/* Черга - Queue


1. Enqueue - вставляє елемент в кінець черги
2. Dequeue - видаляє елемент з початку черги

*/

class Queue {
    constructor() {
        this._head = 0;
        this._tail = 0;
    }

    get size() {
        return this._tail - this._head;
    }

    enque(value) {
        this[this._tail] = value;
        this._tail++;
        return this.size;
    }

    deque() {
        if (this.size > 0) {
            const firstItem = this[this._head];
            delete this[this._head++];
            return firstItem;
        }
        throw new Error('Queue is empty!')
    }
}

const queue = new Queue();