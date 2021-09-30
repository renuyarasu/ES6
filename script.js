console.clear();
// ES6 - Array Functions: filter()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = numbers.filter((item) => {
    // console.log(item);
    return item % 2 === 0
})

console.log('Result Array: ', result);