# Object Literals

//Object Literals

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
  email: "J.Doe@example.com",
  hobbies: ["music", "reading"], // We can declare arrays
  address: {
    // We can declare another objects
    city: "Miami",
    state: "FL",
  },

  getBirthYear: function () {
    // We can declare functions inside objects
    return 2021 - this.age;
  },
};

let val = person;

//Syntax 1

//Syntax2
// val = person['firstName'];

val = person.firstName;
val = person.lastName;
val = person.lastName;
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.getBirthYear();
console.log(val);

//Arrays of objects

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 21 },
  { name: "Steve", age: 43 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
```
