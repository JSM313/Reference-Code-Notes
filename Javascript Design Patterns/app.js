//* A re-usable solution that can be applied to occuring problems in software design (JavaScript Applications).

//* Can also be thought of as programming templates.

//* Situations very significantly.

// ! Pattern 1 => Module Pattern & Module revealing pattern

// It allows to break our code into self contained patterns called modules with private properties and methods.

// Basic Structure.

// (function() { // Declare private variables and functions.

//   return{ // Declare public variable and functions.
//   }
// })();

// Creating a module called UI controler

// Creating an iffy. Immedialely invokable expressions

// STANDARD MODULE PATTERN
const UICtrl = (function () {
  // All private stuff goes here.
  let text = "Hello World";

  const changeText = function () {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    // All this is called, outside the scope.
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();

console.log(UICtrl.text);

// * REVEALING MODULE PATTERN

const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added");
  }

  function get(id) {
    return data.find((item) => item.id === id);
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
console.log(ItemCtrl.get(1));
