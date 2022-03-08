// Classes and Sub Classes(Inheritance) in ES6

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // We can define functions in 2 ways
  // (1.)
  getSummary() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  // (2.)
  getAge = () => {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
  };

  // Creating static methods
  // Static methods are those who don't need to be instantiated , they are basically properties of the class.

  static topBookStore() {
    return "Barnes & Noble";
  }
}

// Inheritance => use the extends and the super keyword
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }

  greet() {
    console.log("hello from the author of the magazine");
  }

  // Method Overriding
  getSummary = () => {
    return `${this.title} was republished in ${this.month}`;
  };
}

// Instantiate/ Create an Object
const book1 = new Book("Book One", "John Doe", 2013);
console.log(book1);

// To run a static function use the name of the class not the object
console.log(Book.topBookStore());

const mag1 = new Magazine("Mag One", "Jasmeet Singh", 2016, "April");
console.log(mag1.getSummary());
mag1.greet();
