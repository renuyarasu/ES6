console.clear();
// ES6 - Array Functions: reduce()

let numbers = [1, 2, 3, 4, 5];

let result = numbers.reduce((acc, item) => {
    console.log(item);
    return acc + item
}, 0)

console.log(result);