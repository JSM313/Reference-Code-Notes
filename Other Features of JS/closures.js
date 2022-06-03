function randomFunc() {
  var obj1 = { name: 'Vivian', age: 45 };

  return function () {
    console.log(obj1.name + ' is ' + 'awesome'); // Has access to obj1 even when the randomFunc function is executed
  };
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure();
