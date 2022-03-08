// THE CONCEPT OF INHERITANCE

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
