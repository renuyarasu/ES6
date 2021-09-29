console.clear();
// ES6 - Rest Operator

const total = (num1, num2,...arg) => {
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    console.log(sum);
    console.log(num1);
    console.log(num2);
}
total(1, 2, 3, 4, 5, 6, 7, 8, 9)