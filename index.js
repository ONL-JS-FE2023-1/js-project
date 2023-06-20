function linearSearch(array, searchValue) { // лінійна складність
    for(let i = 0; i < array.length; i++) {
        if(array[i] === searchValue) {
            return i;
        }
    }

    return -1;
}

// Квадратична

function multyTable(limit) {
    const table = [];
    for(let i = 1; i <= limit; i++) {// 1
        for(let j = 1; j <= limit; j++) { // 1..2..3..4..limit
            table.push(`${i}*${j} = ${i*j}`);
        }
    }

    return table;
}

// Логарифмічна

const arr = [2,3,4,5,6,7,8,9,10];

function binarySearch(array, whatToFind) { 

    // NEED CODE REVIEW!

    if((whatToFind > array[array.length - 1]) || (whatToFind < array[0])) {
        return -Infinity; 
    }

    let start = 0; // початковий індекс масиву
    let end = array[array.length - 1];
    let middle = Math.round(start + end / 2);

    while(true) { // нескінченний цикл
        if(array[middle] === whatToFind) {
            return middle;
        }
        if(array[middle] < whatToFind) { // середній елемент менший за шуканий
            start = middle;
            middle = Math.ceil((start + end) / 2);
        } else { // середній елемент більший за шуканий
            end = middle;
            middle = Math.ceil((start + end) / 2);
        }
    }
}