# DOM SELECTORS FOR SINGLE ELEMENTS

// 1. ID Selector(getElementbyId)

// document.getElementbyId();

```javascript
console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

// Change styling
document.getElementById("task-title").style.background = "#333";

// Change color
document.getElementById("task-title").style.color = "red";
document.getElementById("task-title").style.display = "none";
document.getElementById("task-title").style.padding = "50px";

// Change content
document.getElementById("task-title").textContent = "Task List";
document.getElementById("task-title").innerText = "My Task List";

// Adding HTML
document.getElementById("task-title").innerHTML =
  '<span style="color:red">Task List</span>';

// We can do all this also by assigning it into a variable
// const taskTitle = document.getElementById("task-title");
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Task List";

// Adding HTML
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//  2. Query Selector(querySelector)

// !Note: - It is a single element selector
// \* It is more powerful and latest

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

// Stying using Query Selector
document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

// We can also add Pseudo selectors in querySelector

document.querySelector("li:last-child").style.color = "red";
document.querySelector("ul li:nth-child(3)").style.color = "yellow";
document.querySelector("ul li:nth-child(4)").textContent = "Hello Jasmeet";

// It will only change for first even as it single element selector
document.querySelector("ul li:nth-child(odd)").style.background = "#ccc";

document.querySelector("ul li:nth-child(even)").style.background = "#f4f4f4";
```
