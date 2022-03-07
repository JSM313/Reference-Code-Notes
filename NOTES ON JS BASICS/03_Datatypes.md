# DATATYPES

In JavaScript there are 2 types of datatypes:-

1. Primitive
2. Non Primitive

**Primitive** :- Stored directly in the location
Stored on the stack

**Reference**:- Accessed by Reference
Objects that are stored on the heap. A pointer to a location in memory

1.  Primitive data types:-
    - String
    - Number
    - Boolean
    - Null
    - Undefined //\* when we just initialize and don't define the value.
    - Symbols(ES6)

</br>

2.  Reference Data Types:-
    - Objects
    - Literals
    - Functions
    - Dates
    - Anything else..

</br>

> JavaScript is a dynamically typed language
> </br>

- Types are assocaited with values not variables.

- The same variable can hold multiple data types

- We do not need to specify types

- Most other languages are statistically typed(Like Java, C#, C++)

- There are supersets of JS and addons to allow static typing(Like TypeScript, Flow)

```javascript
PRIMITIVE

String
const name = 'John Doe';

Number
const age = 45;

Boolean
const hasKids = true;

Null
const car = null;

Undefined
let test;

Symbol
const sym = Symbol();

REFERENCE TYPES - Objects


Array
const hobbies = ['movies', 'music'];

Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}

const today = new Date();
console.log(today);
console.log(typeof today);
```
