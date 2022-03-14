// Event Delegation

const divs = document.querySelectorAll("div");

// divs.forEach((div) => {
//   div.addEventListener("click", () => {
//     console.log("hi");
//   });
// });

globalEventListener("click", "div", (e) => {
  console.log("hi");
});

function globalEventListener(type, selector, callBack) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callBack(e);
    } else {
      console.log("Not a div");
    }
  });
}

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "violet";
document.body.appendChild(newDiv);

// const grandparent = document.querySelector(".grandparent");

// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener("click", (e) => {
//   console.log("Grandparent");
// });

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("parent");
//   }
//   //* { once: true }
// This means that this function will execute only once and then will wipe out automatically.
// );

// parent.addEventListener("click", printHi);

// setTimeout(() => {
//   parent.removeEventListener("click", printHi);
// }, 2000);

// child.addEventListener("click", (e) => {
//   console.log("child");
// });

// function printHi() {
//   console.log("Hi");
// }

// * Event Bubbling and Event capturing
// grandparent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandparent capture");
//   },
//   { capture: true }
// );

// grandparent.addEventListener("click", (e) => {
//   console.log("grandparent bubble");
// });

// parent.addEventListener(
//   "click",
//   (e) => {
//     //! To stop the propagation => Stops all capture and bubbling phases after this function no function will be executed

//     e.stopPropagation();
//     console.log("parent capture");
//   },
//   { capture: true }
// );

// parent.addEventListener("click", (e) => {
//   console.log("parent bubble");
// });

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child capture");
//   },
//   { capture: true }
// );

// child.addEventListener("click", (e) => {
//   console.log("child bubble");
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     console.log("document capture");
//   },
//   { capture: true }
// );

// document.addEventListener("click", (e) => {
//   console.log("document bubble");
// });
