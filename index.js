// task 1

function truncate(str, strLength) {
    if(str.length <= strLength) {
        return str;
    }

    const newStr = str.slice(0, strLength);
    return newStr + '...';
}

// task 2

// xxx
// viagra -> Viagra -> VIAgra

// v1

function checkSpam(str) {
    const lowStr = str.toLowerCase();
    return lowStr.includes('viagra') || lowStr.includes('xxx');
}

// v2

function checkSpam2(str) {
    const spamArray = ['viagra', 'xxx', 'drugs'];

    let flag = false;

    for(let i = 0; i < spamArray.length; i++) {
        if(str.toLowerCase().includes(spamArray[i])) {
            flag = true;
        }
    }

    return flag;
}


// task 3

// str(reverse) === str

function palindrom(str) {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}