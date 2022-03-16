// MAPS - key-value pairs - CAN use any type as a key or a value.

const map1 = new Map();

// Set keys
const key1 = "some string",
  key2 = {},
  key3 = function () {};

// Set map values by key

map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

// Get Values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
// console.log(map1.size);

// ITERATIING MAPS

// Loop using for...of to get keys and values

// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// Iterate keys only

// for (let key of map1.keys()) {
//   console.log(`${key}`);
// }

// Iterate Values only

// for (let value of map1.values()) {
//   console.log(`${value}`);
// }

// We can also loop using forEach

// map1.forEach((key, value) => {
//   console.log(`{key}: ${value}`);
// });

// CONVERT MAP TO ARRAYS

//* CREATE AN ARRAY OF KEY VALUE PAIRS

// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// * CREATE AN ARRAY OF THE VALUES(SAME FOR KEYS).

const keyValArr = Array.from(map1.values());
console.log(keyValArr);
