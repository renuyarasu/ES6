console.clear();
// ES6 - Destructuring

// Destructuring - Arrays
const name = 'Renuka Prasad Yarasu';
const nameArr = name.split(' ');
/* const fName = nameArr[0];
const mName = nameArr[1];
const lName = nameArr[2]; */
console.log(nameArr);
const [fName, lName, ,] = nameArr;
console.log(fName);
console.log(lName);

