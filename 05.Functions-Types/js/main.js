"use strict";
console.log("Hello World!");
const myFun = () => {
    console.log("Hello, I'm myFun.");
};
const addFun = (a, b, c = 0, e) => {
    return a + b + c;
};
addFun(10, 20, 0, { name: "parvez" });
// Function Signatures
let userDetails; // signature of function
userDetails = (id, user) => {
    console.log(`Hello, I'm ${user.name} and age is ${user.age}`);
    return `Hello, I'm ${user.name} and age is ${user.age}`;
};
userDetails(102, { name: "Parvez", age: 30 });
