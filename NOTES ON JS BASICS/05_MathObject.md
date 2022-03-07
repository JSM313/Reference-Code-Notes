# Math Functions

const num1 = 100;
const num2 = 50;
let value;

```javascript
// ! Simple Mathematical Operations
value = num1 + num2;
value = num1 - num2;
value = num1 * num2;
value = num1 / num2;
value = num1 % num2;

//! Math Object
value = Math.PI;
value = Math.E; //Euler's Number
value = Math.round(2, 4);
value = Math.ceil(2.4); //Gives 3
value = Math.floor(2.8); //Gives 2
value = Math.sqrt(64); // Gives 8
value = Math.abs(-5); //Gives 5
value = Math.pow(8, 2); //Gives 64
value = Math.min(2, 44, -1, 45, 12, 43); //Gives minimum number
value = Math.max(2, 44, -1, 45, 12, 43); //Gives maximum

//Random class
value = Math.random(); //It gives a random decimal number
value = Math.random() * 20; //It gives number of random decimals between 0 and 19

value = Math.random() * 20 + 1; //It gives number of random decimals between 0 and 20.

value = Math.floor(Math.random() * 20); //Random non decimal number between 1 and 19
console.log(value);
```
