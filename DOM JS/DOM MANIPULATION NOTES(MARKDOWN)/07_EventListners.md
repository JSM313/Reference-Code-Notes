# Event Listners

```javascript
// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
// console.log("Hello World");

// e.preventDefault();
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  // console.log("Clicked");

  let val;
  // val = e;

  val = e.target;

  val = e.target.className;
  val = e.target.classList;

  val = e.target.innerText = "Welcome Jasmeet";

  val = e.timeStamp;

  // Cordinates relative to the window
  val = e.clientY;
  val = e.clientX;

  // Cordinates relative to the element
  val = e.offsetX;
  val = e.offsetY;

  console.log(val);
}
```
