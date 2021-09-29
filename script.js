console.clear();
// ES6 - Destructuring

// Destructuring - Arrays
const name = 'Renuka Prasad Yarasu';
const nameArr = name.split(' ');
/* const fName = nameArr[0];
const mName = nameArr[1];
const lName = nameArr[2]; 
console.log(nameArr);
const [fName, lName, ,] = nameArr;
console.log(fName);
console.log(lName);
*/
// Destructuring - Objects

/* const person = {
    fName: 'Renuka',
    mName: 'Prasad',
    lName: 'Yarasu',
}
const {fName, lName} = person;
console.log(fName);
console.log(lName);
 */

let fNmae = 'Renuka';
let mName = 'Prasad';
let lName = 'Yarasu';

const person = {
    fNmae,
    mName,
    lName
}
console.log(person);