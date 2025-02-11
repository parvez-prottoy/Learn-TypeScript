"use strict";
console.log("Hello World!");
//  Arrays
const names = [];
names.push("Parvez");
names.push("Prottoy");
// names.push(4);  // Argument of type 'number' is not assignable to parameter of type 'string'.
// Readonly => The readonly keyword can prevent arrays from being changed.
const persons = [];
// persons.push("Parvez"); // Property 'push' does not exist on type 'readonly string[]'.
// persons.push(26); // Property 'push' does not exist on type 'readonly string[]'.
