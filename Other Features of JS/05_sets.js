// SETS - SET OF UNIQUE VALUES OF ANY TYPE (PRIMITVE/NON-PRIMITIVE).

const set1 = new Set();

// Add value to set
set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);
set1.add(100); // Set will ignore this line because 100 is already present.

const set2 = new Set([1, true, set1]); // We can also put a set inside anotehr set.

// console.log(set1);

//* Get Count
// console.log(set1.size);

//* Check for values
// console.log(set1.has(100));

// console.log(set2.has(set1.has(100)));

// console.log(set1.has(50 + 50)); // gives true

// console.log(set1.has({ name: "John" })); // returns false because the object is a reference

// * DELETE VALUES FROM A SET

// set1.delete(100);
// console.log(set1);

//* ITERATE THROUGH SETS

// For..of loop
// for (let item of set1) {
//   console.log(item);
// }

// if we add entries it will log the result in the form of array

// for (let item of set1.entries()) {
//   console.log(item);
// }

// Using a for each loop

// set1.forEach((value) => {
//   console.log(value);
// });

//* CONVERT SET INTO ARRAY

const set1Arr = Array.from(set1);
console.log(set1Arr);
