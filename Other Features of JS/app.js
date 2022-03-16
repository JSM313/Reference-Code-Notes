//* Iterators:- They are advanced loops that can be paused.

// Iterator

nameIterator = (names) => {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
};

const namesArr = ["Jack", "Jill", "John"]; // Creating the names array

const names = nameIterator(namesArr); //Init iterator and pass in the names array

console.log(names.next().value); // done -> false; returns Jack
console.log(names.next().value); // done -> false; returns Jill
console.log(names.next().value); // done -> false; returns John
console.log(names.next()); // done -> true; returns undefined;

//* Generators:- They are used for yielding values.

// function* sayNames() {
// Add '*' for making a function, a generator.
//   yield "Jack";
//   yield "Jill";
//   yield "John";
// }

// const name = sayNames();
// console.log(name.next().value);

// ID Creator

function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
