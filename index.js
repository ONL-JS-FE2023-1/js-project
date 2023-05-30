function sum(a, b) {
    return a + b;
}

const superFunction = sum;

sum(2, 2); // 4
superFunction(2, 3); // 5

