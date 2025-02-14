console.log("Hello World!");
const myFun: Function = () => {
  console.log("Hello, I'm myFun.");
};

const addFun = (a: number, b: number, c: number = 0, e?: object) => {
  return a + b + c;
};
addFun(10, 20, 0, { name: "parvez" });

// Function Signatures

let userDetails: (
  id: string | number,
  user: {
    name: string;
    age: number;
  }
) => string; // signature of function

userDetails = (
  id: string | number,
  user: {
    name: string;
    age: number;
  }
) => {
  console.log(`Hello, I'm ${user.name} and age is ${user.age}`);
  return `Hello, I'm ${user.name} and age is ${user.age}`;
};
userDetails(102, { name: "Parvez", age: 30 });
