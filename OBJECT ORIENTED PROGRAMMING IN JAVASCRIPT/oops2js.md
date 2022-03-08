# ES 6 CLASSES AND SUB-CLASSES(INHERITANCE)

Morder Javascript uses the concept of classes which is very identical to what majority of the programming languages uses.

It also provides syntactical sugar

> Syntax

```javascript
class Book{
  constructor(title, author, year);
  this.title = title;
  this.author = author;
  this.year = year;

  getSummary(){
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
```
