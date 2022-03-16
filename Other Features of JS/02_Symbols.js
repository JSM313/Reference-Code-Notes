// Create a symbol

// const sym1 = Symbol();
// const sym2 = Symbol("sym2");

// console.log(typeof sym2);

// Note:- No 2 Symbols can be the same.

// console.log(Symbol() === Symbol()); // returns false;

// console.log(`Hello ${sym1.toString()}`); // to convert it into a string

// Main reason for using Symbols:- Unique Object Keys

const KEY1 = Symbol();

const KEY2 = Symbol("sym2");

const myObj = {};

// myObj.KEY1 = 'Prop1'; //* This is not looking the KEY1 variable as a key, it is looking it like a normal property

// To use a variable as a key use - []

myObj[KEY1] = "Prop1";

myObj[KEY2] = "Prop2";

myObj.key3 = "Prop3";

myObj.key4 = "Prop4";

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in loops

// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`); // Only logs key3 and key4
// }

// Symbols are ignored by JSON.strigify();

console.log(JSON.stringify({ key: "prop" }));

console.log(JSON.stringify({ [Symbol("sym1")]: "prop" })); // gives an empty object.
