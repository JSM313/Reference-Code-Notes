// * Function currying can be achived by 2 ways:- 1). Bind Method 2.) Closures.

/*
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(5);

let multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(5);
*/

// What if we add more than 2 arguments in the function

// let multiplyBy2 = multiply.bind(this, 2, 3); //* this will overwrite the 5 present in the below argument and the 5 will be replaced by 3.

/*
multiplyBy2(5);

let multiplyBy3 = multiply.bind(this);

multiplyBy3(2, 3);
*/

// Using Closures...
let multiply = (x) => {
  return (y) => {
    console.log(x * y);
  };
};

let multiplyBy2 = multiply(2);
multiplyBy2(5);

let multiplyBy3 = multiply(3);
multiplyBy3(5);
