# TYPE CONVERSION

</br>

> ## 1. String to Other Types

</br>

```javascript
let val;

val = 5;

val = String(555);
val = String(4 + 4);

val = String(true);

val = String(new Date());

val = String([1, 2, 3, 4]);

//*To string method

val = (5).toString();
val = true.toString();

console.log(val);
console.log(typeof val);
console.log(val.length); //* only works on strings the length func
```

</br>

> ## Numbers to other types

```javascript
let value;

//Converting String to numbers
value = Number("5");
value = Number(true); // gives 1
value = Number(null); // gives 0
value = Number("hello"); //gives NaN (Not a number)
value = Number([1, 2, 3]); //gives Nan

value = parseInt("100"); // equivalent of toString but in numbers
value = parseFloat("100.30");

console.log(value);
console.log(typeof value);
console.log(value.toFixed(2)); //By adding to fixed we determine the no of decimal points after the number here 2 means upto 2 decimal places
```
