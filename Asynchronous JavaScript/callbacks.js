const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" },
];

// * This method is creating the post after 2 seconds and calling the get posts function after 1 second so whenever we will create a new post it will not be called in the get posts function due to the time gap.

// createPost = (post) => {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// };

// getPosts = () => {
//   setTimeout(() => {
//     let output = "";

//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// };

// createPost({
//   title: 'Post three',
//   body: 'This is post three'
// })
// getPosts();

// * To correct the above mistake we will use callback functions(Asynchornous Way)

createPost = (post, callback) => {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
};

getPosts = () => {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
};

createPost(
  {
    title: "Post Three",
    body: "This is post three",
  },
  getPosts
);
