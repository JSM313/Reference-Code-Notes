# Local Storage and Session Storage

local storage will stay until we manually clear the browser and session storage will clear once we close the browser.

```javascript
// Set local item

localStorage.setItem("name", "John");
localStorage.setItem("age", "30");

// set session storage
sessionStorage.setItem("name", "Atul");

// Remove local from storage
localStorage.removeItem("name");

// Get from storage
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

// localStorage.clear();
console.log(name, age);

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  e.preventDefault();
});

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.querySelector("#task").value;

  let tasks;
  // \* if local storage has any tasks in the form then pull it out and add to it and else if it is empty then just add the task
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task Saved");

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});
```
