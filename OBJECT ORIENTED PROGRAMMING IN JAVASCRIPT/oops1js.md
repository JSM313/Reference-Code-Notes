# OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT

There are many ways to manipulate and create classes and objects in javascript

Several of them are Listed Below

1. ## OBJECT LITERALS

> Syntax

```javascript
const book = {
  title: "Book One",
  author: "John Doe",
  year: "2013",

  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book);
console.log(book1.getSummary());
```

Now, the problem with object literals is that if, code resusablity is compromized in certain scenarios. **_for eg_** if we need to create multiple books then we need to create multiple object literals in order to work which is not a very optimized solution.

So keeping in mind, the above problem we will look at constructors

2. ## Constructors

> Syntax

```javascript
function Book(title, author, year) {
  // They are called the properties or instances
  this.title = title;
  this.author = author;
  this.year = year;

  // They are called as methods
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in the year ${year}`;
  };
}

// Instantiate an object
const bookObj = new Book("Book One", "John Doe", 2013);
console.log(bookObj.getSummary());
```

In these constructors we also use prototypes

```javascript
function Book(title, author, year) {
  // They are called the properties or instances
  this.title = title;
  this.author = author;
  this.year = year;
}
// Creating get summary in the prototype
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

// Get Age of Book
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change the year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate an object
const bookObj = new Book("Book One", "John Doe", 2013);
console.log(bookObj.getSummary());
```

## THE CONCEPT OF INHERITANCE IN CONSTRUCTORS

```javascript
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Get Summary using prototype object
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

function Magazine(title, author, year, month) {
  // Inheritance
  Book.call(this, title, author, year);
  this.month = month;
}

// Inheriting prototypes
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine("Magazine1", "John Doe", 2022, "January");
// console.log(mag1.getSummary());
console.log(mag1);
```
