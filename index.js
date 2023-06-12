/*

Задача: 
Написати функцію, яка робить кожне слово у переданому рядку з великої літери

('test testovich'); // Test Testovich

*/

/*

Декомпозиція:

1. Розділити рядок на слова (split)
2. Зробити першу літеру кожного слова великою
- Пройтись циклом по кожному елементу масиву слів
- Першу літеру слова (charAt) зробити великою буквою (toUpperCase)
- Використати метод slice(1) для отримання підрядку, що починається з другого символу слова
- Об'єднати першу велику літеру з рештою слова, використовувати оператор +
3. З'єднати слова знову в рядок
- Використати метод join(' ') для з'єднання слів масиву в один рядок, розділених пробілами
4. Повернути новий рядок з великими літерами слів

*/

function capitalizeWords(str) {
    const words = str.split(' ');

    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }


    return words.join(' ');
}


/*
Тести:


capitalizeWords('hello world')
'Hello World'
capitalizeWords('hello world test testovich')
'Hello World Test Testovich'
capitalizeWords('hello to you')
'Hello To You'

*/