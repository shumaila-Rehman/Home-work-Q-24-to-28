"use strict";
//                ======>   Test For Equality with String   <========
let a = "Equal";
let b = "Equal";
console.log(a === b);
// //                =======> Test For Inequality with String <=========
console.log(a !== b);
//                   ======>  Test using Lower Case Function  <======
const greeting = "Hello world";
const LowerCase = greeting.toLowerCase();
console.log(greeting === LowerCase);
if (greeting !== LowerCase) {
    console.log("They are not Equal");
}
else {
    console.log("They are Equal");
}
//                ========> Numerical Test For Equality <========
let num1 = 5;
let num2 = 10;
console.log(num1 === num2);
//             =========> Numerical Test For InEquality <==========
console.log(num1 !== num2);
// //              ========> Numerical Test For Greater than <========
console.log(num1 > num2);
// //                  ========> Numerical Test For Less Than <========
console.log(num1 < num2);
// //           =======> Numerical Test For Greater Than Or Equal To <=========
console.log(num1 >= num2);
// //         =========> Numerical Test For Less Than Or Equal To <============
console.log(num1 <= num2);
// //                =======>Test Using "And" Operator <=========
const firstName = "shumaila";
const lastName = "Rehman";
console.log(firstName === lastName && firstName !== lastName);
//               ======> Test Using "Or" Operator <=========
console.log(firstName === lastName || firstName !== lastName);
// //               ======> Another Example <=======
let c = 10;
let d = 15;
console.log(c === d && c !== d);
let m = " Hello ";
let n = "world";
console.log(m === n || m !== n);
// // //                ========> Test Whether An Item is An Array <========
const fruits = ["apple", "banana", "oranges"];
if (fruits[3]) {
    console.log("There is an index 3 ");
}
else {
    console.log("There is not an index 3");
}
//                   ========> Another Example <========
const studentAge = [20, 25, 30];
if (studentAge.includes(25)) {
    console.log("The item is an Array");
}
else {
    console.log("The item is not an Array");
}
