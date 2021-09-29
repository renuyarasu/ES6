console.clear();
// ES6 - Spread  Operator

/* const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9];
const num = num1.concat(num2)
console.log(num);
 */

const obj1 = {
    fname: 'Renu',
    lname: 'yarasu',
}

const obj2 = {
    age: 33
}

const obj3 = {...obj1, ...obj2}

console.log(obj3);