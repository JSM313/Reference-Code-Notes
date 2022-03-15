// Shorthand character classes

re = /\w/; //* looks for only letter number or '_'

re = /\w+/; // * Looks for more than one character '+' symbol.

re = /\W/; // * Non - word characters looks for other than word, number or _.

re = /\d/; // * Matches any digit

re = /\D/; // * Matches any non digit

re = /\s/; // * Matches white space character.

re = /\S/; // * Matches non white space character.

re = /Hell\b/i; // * Word boundary

// ! Assertions
re = /x(?=y)/; // * Match x only if it is followed by y

re = /x(?!y)/; // * Match x only if it NOT equal to y.

// STRING TO MATCH

// const str = "3x3x3x";

const str = "x"; // Example for assertions

// const str = "Hello, welcome to Hell "; // specific for 'Word boundary'

const result = re.exec(str);
console.log(result);

reTest = (re, str) => {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not matches ${re.source}`);
  }
};

reTest(re, str);
