// Destructuring Assingments

// let a, b;

// [a, b] = [100, 200];

// Rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// console.log(rest); // will log the remaining values 400, 500.

// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(a, b);

// console.log(rest);

//* Array Destructuring

// const people = ["John", "Beth", "Mike"];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

//* Parse array returned from a function

// getPeople = () => ["John", "Beth", "Mike"];

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// * Object Destructuring

const person = {
  name: "John Doe",
  age: "32",
  city: "Austin",
  gender: "Male",
  sayHello: () => {
    console.log(`${name} says Hello`);
  },
};

// OLD ES5 WAY

// const name = person.name,
//   age = person.age,
//   city = person.city;

// ES6 DESTRUCTURING

const { name, age, city, sayHello } = person;
console.log(name, age, city, sayHello());
