"use strict";
// Explicit Type
const num1 = 20;
// Implicit Type
const num2 = 30;
/*
note: Having TypeScript "guess" the type of a value is called infer.
      Implicit assignment forces TypeScript to infer the value.

*/
// console.log(typeof num1, typeof num2);
// Error In Type Assignment
let firstName = "Parvez"; // type string
// firstName = 400; // Type 'number' is not assignable to type 'string'.
let lastName = "Prottoy"; // inferred to type string
// lastName = 400; // Type 'number' is not assignable to type 'string'.
// Special Types
// Type: any
/*
let u = true;
u = "string"; // Type 'string' is not assignable to type 'boolean'.
Math.random(u);
*/
let u = true;
u = "string";
Math.round(u);
console.log(u);
/*
 warning: : any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...
 */
//  Type: unknown
/*
    unknown is a similar, but safer alternative to any.
*/
let w = 1;
w = "string";
w = {
    add: 2,
};
/*
unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

Casting is when we use the "as" keyword to say property or variable is of the casted type.
*/
