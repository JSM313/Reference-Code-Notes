// By adding async keyword before this function this will make it a promise

// To use await we need to add the async keyword

// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 1000);
//   });

//   const error = true;

//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunc()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// Using async with fetch

async function getUsers() {
  // First we will fetch the response from the website
  const response = await fetch("http://jsonplaceholder.typicode.com/users");

  // Now instead of using .then function in promises in async/await we can use this
  const data = await response.json();

  return data;
}

getUsers().then((users) => console.log(users));
