const name = {
  firstName: 'Jasmeet',
  lastName: 'Singh',
};

const name2 = {
  firstName: 'John',
  lastName: 'Doe',
};

function printFullName(hometown, state) {
  console.log(
    `${this.firstName} ${this.lastName} belongs to ${hometown} which is located in ${state}`
  );
}

// Call method simply joins the function with the object, and for the arguments, it simply borrows the arguments as it is in a normal function.
printFullName.call(name, 'Agra', 'Uttar Prades');

// Apply method,
printFullName.apply(name2, ['Salt lake city', 'Florida']);

// Bind method:- It simply gives us the copy which can be invoked later.
let printMyName = printFullName.bind(name, 'New Delhi', 'Delhi');
printMyName();
