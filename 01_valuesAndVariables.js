// Here are five practice questions about values and variables in JavaScript:

// Declaring Variables:
// 1. What is the difference between var, let, and const when declaring variables in JavaScript? Provide an example of each.

// var is redeclarable and reassignable and functional scope
// let is notredeclarable and reassignable and block scope
// const is not redeclarable and not reassignable and block scope

var age1 = 23;
var age1 = 24;

let age2 = 23;
age2 = 24;
// let age2 = 24; // SyntaxError: Identifier 'age2' has already been declared

// const age3; // SyntaxError: Missing initializer in const declaration
const age3 = 23;
// age3 = 24; // TypeError: Assignment to constant variable.

//////////////

// Data Types:
// 2. Identify the data type of the following variables:

let a = 42;
let b = "Hello";
let c = true;
let d;
let e = null;

// console.log(typeof a); // number
// console.log(typeof b); // string
// console.log(typeof c); // boolean
// console.log(typeof d); // undefined
// console.log(typeof e); // object

/////////////

// Variable Naming Rules:
// 3. Which of the following variable names are valid in JavaScript? Explain why.

// myVariable // valid
// 123name // invalid
// _privateVar // valid
// $price // valid
// let // invalid

// Variable naming should be not start with digit, and cannot contain special characters excpet '$' and "_" and can not contain space and best way to declara name is camelCase

//////////////

// Variable Reassignment:
// 4. What will be the output of the following code snippet? Explain your answer.

let x = 10;
x = 20; // let is reassignable
const y = 30;
// y = 40; // const is not reassignable
//         20  TypeError: Assignment to constant variable. 
console.log(x, y);

/////////////

// Type Coercion:
// 5. Predict the output of the following expressions and explain why:

console.log("5" + 3); // "53" concate both numbers
console.log("5" - 3); // 2 first it will type coercion on "5" to 5 and then basic math
console.log(true + 1); // 2 first it will type coercion true to 1 and then basic math
console.log(null + 5); // 5 first it will type coercion null to false == 0 and then basic math
console.log(undefined + 5); // 5 first it will type coercion undefined to number then NaN is created behind the scene and then basic math