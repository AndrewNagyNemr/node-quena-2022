// const vs let vs var
//=============================================

// declaration && assignment 
// const x = 1;

//let y = 2
// let y;
// y = 2;

// for (let i = 0; i < 5; i++) {

// }
// console.log(i); // => i is not defined 

// for (var i = 0; i < 5; i++) {

// }
// console.log(i); // => i = 5


//=============================================
// arrow functions

// const result  = add(1, 2)
// console.log(result);

// console.log(x);


// var x = 1;

// console.log(x);

// console.log(x);

// let x = 1;

// console.log(x);


// function add(num1, num2) {
//     return num1 + num2
// }

// add(1, 2)

// const add = function (num1, num2) {
//     return num1 + num2
// }

// const add = (num1, num2) => {
//     return num1 + num2
// }

// const add = (num1, num2) => (num1 + num2)

// const add = (num1, num2) => { num1 + num2 }

// const add = (num1, num2) => { return num1 + num2 }

// const result = add(1, 2);

// console.log(result);

// explicit return
// implicit return




//=============================================
// implicit explicit return
//=============================================
// array functions

// const arr = [1, 2, 3, 4, 5];

// const double = [];

// for (let i = 0; i < arr.length; i++) {
//     double.push(arr[i] * 2)
// }

// console.log(double);

//map
// const double = arr.map((num) => {return num * 2 })
// const double = arr.map((num) => num * 2)

// console.log(double);
//filter
// const arr = [1, 2, 3, 4, 5];

// const even = arr.filter(num => num % 2 === 0)
// const even = arr.filter(num => {num % 2 === 0})

// console.log(even);

//find
// const num = arr.find(num => num % 2 === 0);
// const num = arr.find(num => { num % 2 === 0 });
// const num = arr.find(num => true);
// console.log(num);

//====================
//=============================================
//findIndex
//=============================================
// equality

// const x = 1;

// console.log(x == "1");

// console.log(x === "1");

// strict equality



//=============================================
// destructuring
// const person = {
//     name: "Ahmed",
//     age: 25
// }
// const group = {
//     person: {
//         name: "Ali",
//         age: 28
//     }
// }

// const obj = {}

// const { name: personName, age } = person;


// const logger = ({ person }) => {
//     console.log(Object.keys(person));
// }

// logger(obj)
// logger(group);

// const arr = [1, 2, 3, 4];

// const first = arr[0]
// const seconde = arr[1]
// const third = arr[2]

// const [first, second, third] = arr
// const [, , third] = arr

//=============================================
// value type , reference type

// const person = {
//     name: "ahmed"
// }

// person.age = 25;

// person = {

// }

//=============================================
// npm 
//=============================================
//==> npm init 
//==> generate package.json
//==> npm i <package-name>  // within the project 
//==> update package.json dependencies
//==> add package-lock.json 
//==> add node_modules //=> must be added to .gitignore
//==> To install global package => npm i -g <package-name> //sudo
//Alternative
//npx create-react-app <app-name>

//to uninstall => npm un <package-name>
//=============================================
// Install nodejs
// clone the simplified app 
// npm i 

// console.log("hello world")