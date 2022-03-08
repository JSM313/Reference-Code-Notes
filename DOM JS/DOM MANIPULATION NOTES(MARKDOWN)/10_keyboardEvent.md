# KeyBoard Event Listeners

```javascript
const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const heading = document.querySelector("h5");
// const selectList = document.querySelector("select");

// form.addEventListener("submit", runTask);

// To clear out the input
taskInput.value = "";

// taskInput.addEventListener("keydown", runTask);
// taskInput.addEventListener("keyup", runTask);

// taskInput.addEventListener("keypress", runTask);

// Focus("When we click and type")
taskInput.addEventListener("focus", runTask);

// Blur(Without clicking)
taskInput.addEventListener("blur", runTask);

// Cut
taskInput.addEventListener("cut", runTask);

// Copy
taskInput.addEventListener("copy", runTask);

// Same for Paste

// Input(All Operations in one)
taskInput.addEventListener("input", runTask);

// Change Event for selectLists
// For this to run on this paticular file first create a selectlist and comment out materialize css in order for this to work
selectList.addEventListener("change", runTask);

function runTask(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // Get Input value
  console.log(taskInput.value);

  // e.preventDefault();
  heading.innerText = e.target.value;
}
```
