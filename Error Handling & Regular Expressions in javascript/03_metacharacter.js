let re;

re = /hello/;
re = /hello/i;

// * METACHARACTER SYMBOLS

re = /^h/i; // ^ means must start with 'h'

re = /d$/i; // $ means must end with

re = /^hello$/i; // this means that it must start with hello and must ends with hello

re = /h.llo/i; // . means mathes any one character we can put any one character in place of the dot and it will return as matched. (Only one time)

re = /h*llo/i; // '*' means it can match any character (more than one time)

re = /gre?a?y/i; // '?' means optional character like the word grey can be spelled as 'gray' as well therefore e is also an option and a is also an option.

// Now this can also cause a problem because it will consider y as an optional character as well so in order to avoid that we will use escape metacharacter '\'

re = /gre?a\y/i;

// ----------------------------------------------------------------------

// String to match
// const str = "Hello World";
const str = "3x3x3x";

// Log Results
const result = re.exec(str);
console.log(result);

reTest = (re, str) => {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
};

reTest(re, str);
