// sort
// array.sort([compareFunction])

const array = [5, 3, 9, 21, 5, 1, 2, 4];
array.sort(); // default sort

const arrayWords = ['bbb', 'abb', 'aaa', 'aba'];
arrayWords.sort(); // default sort

function compareFunction(a, b) { // функція-компарартор
    // if(b > a) {
    //     return -1;
    // } else {
    //     return 1;
    // } 
    // сортування за зростанням (варіант 1)

    // return a - b; // сортування у порядку зростання (варіант 2)

    return b - a; // сортування у порядку спадання
}

array.sort(compareFunction);

/*

returning:
-1 - спочатку a, потім b
0 - елементи залишаються на місці
1 - спочатку b, потім a

*/

// a і b - два сусідні елементи в масиві