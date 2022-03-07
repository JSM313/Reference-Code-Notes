# VARIABLES

To declare a variable, there are 3 different ways in javascript

1. var (no longer used in javascript)
1. let
1. const.

- ## let

```javascript
let greeting = "hello";
console.log("Hello");

let num = 2;
console.log(num);

num = 4;
console.log(num);
```

> In _let_ we can reintialize variables and modify values in them .

---

- ## const

```javascript
const name = "Jasmeet Singh";
console.log(name);

const nums = [1, 2, 3];
console.log(nums);
nums.add(4);
console.log(nums); // This is legal

const marks = [1, 2, 3, 4];
marks = [1, 2, 3, 4, 5]; //This is illegal

const person = {
  name: "Ashish",
  age: 18,
};

// This is legal
person.name = "Jasmeet";
person.age = 18;
```

const marks = [1, 2, 3, 4];

~~marks = [1, 2, 3, 4, 5];~~ **Don't do this**

> In const we can modify add or delete values using methods but we cannot redeclare/reinittialize them because they are treated as constant.

---
