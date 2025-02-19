// Generics
// 🎯 Basic Generics Example
function identity<T>(value: T) {
  return value;
}
console.log(identity<string>(""));
console.log(identity<number>(300));
//
const addId1 = <T>(obj: T) => {
  let id = Math.round(Math.random() * 100);
  return { id, ...obj };
};
const user1 = addId1({
  name: "Parvez",
  age: 40,
});
//
const addId2 = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.round(Math.random() * 100);
  return { id, ...obj };
};
const user2 = addId2({
  name: "Parvez",
  age: 40,
  country: "Bangladesh",
});

/* 
🚀 Generics সংক্ষেপে
    Feature	কাজ
    - Generic Function	Dynamic টাইপের ফাংশন তৈরি করে
    - Generic Interface	টাইপ-সেইফ অবজেক্ট তৈরি করে
    - Generic Class	টাইপ-সেইফ ক্লাস তৈরি করে
    - Generic Constraints	নির্দিষ্ট টাইপের জন্য generics সীমাবদ্ধ করে

✨ তুমি Generics কোথায় ব্যবহার করতে পারবে?
    - Reusable Utility Functions (যেমন fetchData<T>())
    - Data Structures (Linked List, Stack, Queue)
    - Form Handling (Generic Input Fields)
    - API Response Handling (Generic API Calls)
*/
