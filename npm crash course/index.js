const _ = require("lodash");

const numbers = [33, 43, 23, 12, 42, 1];

_.each(numbers, (number, index) => {
  console.log(number);
});
