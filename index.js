// функція pow(x, n)
// pow(2, 2) = 4 (2*2)
// pow(2, 3) = 8 (2*2*2)
// pow(2, 4) = 16 (2*2*2*2)

// Ітеративне мислення

/**
 * повертає x у n-й ступені
 * @param {number} x число, що потрібно піднести до степеня
 * @param {number} n степінь, натуральне число
 * @return {number} x піднесенне у n-нну степінь
 */
function pow(x, n) {
    let result = 1;

    // множимо result на x n разів в циклі
    for(let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

// Рекурсивне мислення
function powRecursive(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * powRecursive(x, n - 1);
    }
}


/*
                        / if n === 1   = x
powRecursive(x, n) = 
                        \ else    = x * powRecursive(x, n - 1);

*/


/*

powRecursive(2, 4)

1. pow(2, 4) = 2 * pow(2, 3)
2. pow(2, 3) = 2 * pow(2, 2)
3. pow(2, 2) = 2 * pow(2, 1)
4. pow(2, 1) = 2

*/
















/*


let counter = 0;
function powRecursive(x, n) {
    counter++;
    return x * powRecursive(x, n - 1);
}

*/