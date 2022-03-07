# Strings in JavaScript

> We can declare strings with single quotes and double quotes both

</br>

```javascript
const firstName = "Jasmeet";
const lastName = "Singh";
const age = 36;
const str = "Hello there my name is Jasmeet";
let val;

val = firstName + lastName;

//* Concatenation
val = firstName + " " + lastName;

//Appending

val = "Brad ";
val += "Traversy";

val = "Hello my name is " + firstName + " and I am " + age;

//Escaping
//// val = 'That's awesome, I can't wait';
val = "That's awesome, I can't wait";

//length
val = firstName.length;

//concat Method
val = firstName.concat(" ", lastName);

val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0]; //Takes the array index of 2

val = firstName.indexOf("1");
val = firstName.lastIndexOf("1"); //Return index from the last of a paticular character

// charAt
val = firstName.charAt("2");

//Get last character
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 4); //similar to substring but if we put a negative number then it will start from the back

//split();
val = str.split(" "); //seperated by space prints each word in different line.

//replace()
val = str.replace("Jasmeet", "jassi"); //Case sensitive

//includes
val = str.includes("Jasmeet"); //returns boolean value if the paticular value is present in the string or not

console.log(val);
```
