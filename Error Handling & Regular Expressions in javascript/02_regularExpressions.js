//* Regular expression is used to describe a pattern of characters.

// They are used for pattern matching/pattern searching

// *Typically used for form validation

let re;

// /regular expression literal/
re = /hello/;

// console.log(re); // gives /hello/

// console.log(re.source); // gives hello (removes the literal);

// ----------------------------------------------------------------------

//* exec() - Return result in an array if there is a match, and null if there is no match. (CASE SENSITIVE).

// let result = re.exec("hi hello world"); // also returns the index from    which matching word is starting

// result = re.exec("hi world"); //gives null.

// result = re.exec("HELLO world"); // will give null.

// console.log(result);

// console.log(result[0]); // first index of the array in re.exec.

// console.log(result.index); // will give the starting index of the matching word

// console.log(result.input); // will give the input that we entered.

// * test() - Simply returns true or false. (CASE SENSITIVE).

// let result = re.test("Hello"); // will give false because of the uppercase 'H'.

// console.log(result);

//! To make this case insensitive we will use i flag.

// re = /hello/i; //* passing an i flag
// result = re.test("HEllo");

// console.log(result);

// re = /hello/g; //* global flag (this measns global search) The 'g' flag indicates that the regular expression should be tested against all possible matches in a string.

const str = "Hello There";
const result = str.match(re);
console.log(result);

// * match() - Return result array or null. similar to exec() with a little difference

// * instead of using it with re we will create a string and then it will compare

// re = /hello/i;
// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

//* search() - Returns index of the first match if not found returns -1

re = /hello/i;
// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

//* replace() - Return a new string with some or all matches of a pattern.

// re = /hello/i;
// const string = "hello There";
// const newStr = string.replace(re, "Hi");
// console.log(newStr);
