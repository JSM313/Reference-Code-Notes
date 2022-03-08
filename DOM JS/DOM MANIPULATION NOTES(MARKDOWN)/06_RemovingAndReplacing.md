# REMOVING AND REPLACING ELEMENTS

```javascript
//  Replaing Elements

// Create an element
const newHeading = document.createElement("h2");

// Add Id
newHeading.id = "task-title";

// new text node

const textNode = document.createTextNode("Task List");
newHeading.appendChild(textNode);

//newHeading.appendChild(document.createTextNode('Task List');

// Get the old Heading
const oldHeading = document.getElementById("task-title");

// Parent
const cardAction = document.querySelector(".card-action");

// ! Replace
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// \*Remove element

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list item
lis[0].remove();

// Remove Child
list.removeChild(lis[3]);

// Classes And Attributes

// \* 1. Classes
const firstli = document.querySelector("li:first-child");

const link = firstli.children[0];
// console.log(firstli.children[0]);

let val;
val = link.className;
val = link.classList;

val = link.classList[0];

val = link.classList.add("test");
val = link;

//\* 2. Attributes

val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
val = link.hasAttribute("href");

link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;

console.log(val);
```
