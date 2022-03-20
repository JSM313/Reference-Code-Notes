// const person = {
//   name: 'John Doe',
//   age: 30
// }

// To use this person in other files.
// module.exports = person;

//* ES 6 WAY
// export default person;

class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {

    console.log(`My name is ${this.name} and I'm ${this.age}`);

  }
}

// Exporting the person class.
module.exports = Person;

