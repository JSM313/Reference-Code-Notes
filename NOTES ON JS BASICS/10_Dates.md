# DATES in Javascript

```javascript
let val;

const today = new Date();

// ! DATE FORMAT IS 'MM/DD/YYYY'

let birthday = new Date("03-31-2000 11:25:00");
birthday = new Date("March 31 2000");

//To get month
// ! Note that the date data type is 0 based for Jan 1 for Feb and so on

//Getters
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getTime();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

// Setters
val = birthday.setMonth(2);
val = birthday.setDate(12);

// val = today.toString();// TO make it as a string
console.log(birthday);
// console.log(typeof val)
console.log(val);
```
