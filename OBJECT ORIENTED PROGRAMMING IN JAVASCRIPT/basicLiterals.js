// const s = "Hello";
// console.log(typeof s)

// const s2 = new String('Hello');
// console.log(typeof s2);

// DOM OBJECTS
// console.log(window);

// * OBJECT LITERALS

const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year} year`;
  },
};

// console.log(book1.getSummary());

// To access keys and values in the object

// * We can also get the keys of the object
// console.log(Object.keys(book1));

// * To look at the value of the object
// console.log(Object.values(book1));

// Constructors
function Book(title, author, year) {
  // Defining the properties of the class
  this.title = title;
  this.author = author;
  this.year = year;

  // The methods of the class
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in the year ${year}`;
  };
}

// Instantiate an object
const bookObj = new Book("Book One", "John Doe", 2013);
console.log(bookObj.getSummary());

const bookObj2 = new Book("Book Two", "Jane Doe", 2016);
