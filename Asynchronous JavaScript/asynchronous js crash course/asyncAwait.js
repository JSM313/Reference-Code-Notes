const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];
getPosts = () => {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
};

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

// Async / Await

// to use await we need to set the function to async
// async function init() {
//   // This means that it is awaiting for getPosts to be done then this line of code will be executed.
//   await createPost({ title: "Post three", body: "This is post three" });

//   getPosts();
// }
// init();

// Async / Await / Fetch
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  console.log(data);
}

fetchUsers();
