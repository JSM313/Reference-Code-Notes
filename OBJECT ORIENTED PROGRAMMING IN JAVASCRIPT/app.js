class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting = () => {
    console.log(`Hello there ${this.firstName} ${this.lastName}`);
  };

  walk = () => {
    console.log(`${this.firstName} is walking.`);
  };

  walk = (steps) => {
    console.log(`${this.firstName} is walking ${steps} steps`);
  };
}

class Customer extends Person {
  constructor(firstName, lastName, itemPurchased, MobileNo) {
    super(firstName, lastName);

    this.itemPurchased = itemPurchased;
    this.MobileNo = MobileNo;
  }

  greeting = (greetMessage) => {
    console.log(
      `${greetMessage} ${this.firstName} ${this.lastName} thank you for purchasing ${this.itemPurchased}`
    );
  };
}

// const p1 = new Person("Jasmeet", "Singh");
// p1.greeting();

// const john = new Customer("John", "Doe", "eggs", "938181014");
// console.log(john);
// john.greeting("Good Morning");

const Jasmeet = new Person("Jasmeet", "Singh");

Jasmeet.greeting();
// Jasmeet.walk();
Jasmeet.walk(100);
