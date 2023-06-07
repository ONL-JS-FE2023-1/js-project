// filter
// array.filter(callback)

const array = [5, 3, -9, -21, -5, 1, -1, -2];

// Задача: отримати новий масив, який складається тільки з додатніх чисел

function filterFunc(elem) {
    // if(elem > 0) {
    //     return true
    // } else {
    //     return false
    // }

    return elem > 0
}

const filteredArray = array.filter(filterFunc);