"use strict";
console.log("Hello World!");
const myFun = () => {
    console.log("Hello, I'm myFun.");
};
const addFun = (a, b, c = 0, e) => {
    return a + b + c;
};
addFun(10, 20, 0, { name: "parvez" });
