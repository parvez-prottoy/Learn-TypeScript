type strOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: strOrNum, user: userType) => {
  console.log(`User id is ${id}, Name is ${user.name} and Age is ${user.age}`);
};
const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 40 ? "Sir" : "Mr."} ${user.name}`);
};
sayHello({ name: "Parvez", age: 23 });
userDetails(101, { name: "Parvez", age: 23 });
