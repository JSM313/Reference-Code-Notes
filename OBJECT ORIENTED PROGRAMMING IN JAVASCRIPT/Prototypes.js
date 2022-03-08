// Prototypes

function Book(title, author, year) {
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

const book1 = new Book("book1", "John Doe", 2013);
console.log(book1.getSummary());

const book2 = new Book("book2", "Jane Doe", 1973);
console.log(book2);
book2.revise(2022);
console.log(book2);
