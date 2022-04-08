const http = new EasyHTTP();

// Get users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// User Data
const data = {
  name: "John Doe",
  username: "johnDoe",
  email: "jDoe@email.com",
};

// Create Post
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Updae post request/ making a put request
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Delete users
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
