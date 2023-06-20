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

// Реалізувати функцію, яка перевіряє баланс дужок у виразі

// (a + b) * (c - d)     // true
// (a + b) * (c - d))    // false
// (a + b) * (c - d      // false
// {}
// []
// ()

function checkBalancedBrackets(expression) {
    const stack = new Stack(15);

    for(let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if(char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else if(char === ')' || char === ']' || char === '}') {
            if(stack.isEmpty) {
                return false;
            }
            
            const top = stack.pop();

            if(
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return false; // НЕвідповідність типів дужок
            }
        }
    }

    return stack.isEmpty; // true -> Джужки збалансовані, якщо стек порожній
}

/*


checkBalancedBrackets('(a + b) * (c - d');
false
checkBalancedBrackets('(a + b) * (c - d)');
true
checkBalancedBrackets('(a + b) * (c - d))');
false
checkBalancedBrackets('(a + b) * ((c - d)');
false
checkBalancedBrackets('[a + b] * (c - d)');
true
checkBalancedBrackets('[a + b) * (c - d]');
false


*/