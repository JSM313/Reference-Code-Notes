# Arrays

```javascript
//Creating Arrays

const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 43, 123, 12, 51);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

let values;
values = numbers.length;

//Check if is Array
values = Array.isArray(numbers);

// Get single value
values = numbers[3];

//Inserting in an array
console.log(numbers);

// Find index of value
values = numbers.indexOf(36);

//MUTATING ERRORS

// Adds number to the end
// numbers.push(250);

// Add to the front
// numbers.unshift(120);

//Take off from the end
// numbers.pop();

// Take from the front
// numbers.shift();

//Splice Values
// numbers.splice(1, 3);

//Reverse the array
// numbers.reverse();

//Concatenate Array
values = numbers.concat(numbers2);

//Sorting arrays
// Only the first number will be sorted
// values = numbers.sort();

//Use the compare function

//In ascending order
// val = numbers.sort(function(x , y){
// return x - y;
// });

//Descending Order
// val = numbers.sort(function(x, y){
// return y - x;
// });

// Returns the first number in the array which is under50
function under50(num) {
  return num < 50;
}

values = numbers.find(under50);

// Returns the first number in the array which is over50
function over50(num) {
  return num > 50;
}

values = numbers.find(over50);

console.log(numbers);
console.log(values);
```
