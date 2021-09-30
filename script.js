console.clear();
// ES6 - Array Functions: find() and findIndex()

let numbers = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5];

let results = numbers.find((item) => {
    return (item % 2 === 0 && item >= 2)
})

console.log('Results: ', results);