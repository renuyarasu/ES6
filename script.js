console.clear();
// ES6 - Array Functions: map()

let myArr = [1, 2, 3, 4, 5];

let newArr = myArr.map((data, pos) => {
    console.log(`Item at pos: ${pos} is ${data*2}`);
    // console.log(data * 2);
})

console.log(newArr);