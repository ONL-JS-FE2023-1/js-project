// Задача: вивести користувачу привітання, залежно від значення, яке користувач ввів

const greets = {
    1: 'Hi',
    2: 'Ya, whats up',
    3: 'Hello',
    4: 'Good morning'
}

const valueFromUser = 15;
console.log(greets[valueFromUser]);

// in
// 'key' in obj
console.log('15' in greets);