// ? NOTE:- WE CANNOT USE TRY CATCH BLOCK TO HANDLE SYNTAX ERROR.

// ! Producing a referece error
// try {
//  This will produce a referece error because the function is not declared

//   myFunction();
// } catch (error) {
//   console.log(error);

// * error.messgae will only display the error message not the type or name of the error
//   console.log(error.message);

// * error.name will give the name of the error, like in this scenario this will give reference error.
//   console.log(error.name);

// To see the test what kind of error is in the code. this statement will return a boolean value, in this case it will return true.
//   console.log(error instanceof ReferenceError);
// } finally {
//   console.log("Finally runs no matter what happens regardless of result");
// }

// This statement will still execute, if we use a try catch block to catch the errors

// console.log("Program continues.........");

// ! Producing a type error
// try {
// Produce a type error
//   null.myFunction();
// } catch (error) {
// console.log(error);
// console.log("We cannot call anything from null");
//   console.log(`${error.name} Its null Stupid`);
// }

// ! Produce URL error
// decodeURIComponent("%");

// * We can also create our own errors

const user = [
  { name: "John Doe", email: "jdoe@gmail.com" }, //User 1
  { email: "jd@outlook.com" }, // User 2
];

// Suppose we want to check that this username has a name which in this case it doesn't have one, so to check this we will create our own error which we will throw if the user doesn't give his/her name.

try {
  if (!user.name) {
    // throw "User has no name. Please Enter a name";

    // We can format this into any type of error.
    throw new SyntaxError("User has no name");
  }
} catch (error) {
  // Naming our errors
  console.log(`User Error: ${error.message}`);
} finally {
  console.log("I give Zero Shits, I will run no matter what");
}
