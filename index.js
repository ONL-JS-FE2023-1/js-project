/*

Set (множина) - структура, де зберігаються унікальні значення

const set = new Set();

Set.prototype.add(value) - додає value у кінець Set

Set.prototype.has(value) - перевіряє, чи є value у Set (булеве значення)

Set.prototype.delete(value) - видаляє value з Set


*/


/*

Задача:
Дано масив: [2, 3, 3, 5, 6, 6, 6, 6, 7, 7, 1, 1, 1]
Повернути масив без повторень

*/

const arrayWithDoubles = [2, 3, 3, 5, 6, 6, 6, 6, 7, 7, 1, 1, 1];

function arrWithoutDoubles(arr) {
    const set = new Set(arr);
    const arrFromSet = [...set.values()];
    return arrFromSet;
}

// const arrWithoutDoublesV2 = arr => [...new Set(arr)];