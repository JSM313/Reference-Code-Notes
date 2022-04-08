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

createPost({ title: "Post three", body: "This is post three" })
  .then(getPosts)
  .catch((error) => console.log(error));

// Promise.all function
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "goodbye");
// });

// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );
