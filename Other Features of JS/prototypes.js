/*
let arr = ['Jasmeet', 'Taman', 'Varun'];

// Whenever we create a non primitive data type the javascript engine automatically attaches our object/array to the all hidden properties which we can now access once we create the obejct.

// This is all possible due to prototypal inheritance.


let fun = () => {};
*/

let object = {
  name: 'Jasmeet',
  city: 'Agra',
  getIntro: () => console.log(`${this.name} from ${this.city}`),
};

let object2 = {
  name: 'John',
};

// Not Recommended...
object2.__proto__ = object;
