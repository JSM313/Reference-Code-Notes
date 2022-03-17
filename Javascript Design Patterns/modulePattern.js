// Advantages of Using Modules.

/*
1. Avoid Collisions (Namespace).
2. Reusablity 
3. Maintainibility.
*/

function communication() {
  let greet = "Hello",
    goodbye = "So long";

  const getGreet = function () {
    let d = new Date();

    if (d.toLocaleTimeString().includes("AM")) {
      greet = "Good Morning fella !!";
    } else {
      greet = "Hi ! Nice to meet you";
    }

    return greet;
  };

  const greeting = function (name) {
    console.log(`${getGreet() + name} Welcome`);
  };
}
