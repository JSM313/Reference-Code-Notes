// * BRACKETS [] - Character Sets

re = /gr[ae]y/i; //[ae] => implies that this must be an a or e. (Better Solution than '?').

re = /[GF]ray/; // must be G or F.

re = /[^GF]ray/i; // Matches anything except G or F.

re = /^[GF]ray/i; // Must start with G or F.

re = /[A-Z]ray/; // Match any uppercase letter

re = /[a-z]ray/; // Match any lowercase letter

re = /[0-9]ray/; //Matches any digit

// * BRACES {} - Quantifiers

re = /Hel{2}o/i; // Must occur exactly {m} amount of times.

re = /Hel{2,4}o/i; // Must occur exactly between {m, n} m to n times.

re = /Hel{2,}o/i; // Must occur at least {m, } m amount of times.

// * Parenthesis () - Used for grouping, we can use them with quantifiers as well

re = /^([0-9]x){3}$/; // Scenario:- If we want to insert a number along with character x 3 times

// Creating a string to match.
const str = "3x3x3x";

// Log Results

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
