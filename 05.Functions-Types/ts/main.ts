console.log("Hello World!");
const myFun: Function = () => {
  console.log("Hello, I'm myFun.");
};

const addFun = (a: number, b: number, c: number = 0, e?: object) => {
  return a + b + c;
};
addFun(10, 20, 0, { name: "parvez" });
