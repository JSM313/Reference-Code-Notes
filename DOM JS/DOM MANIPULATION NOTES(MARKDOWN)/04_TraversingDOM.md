# Traversing the DOM

```javascript
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child Nodes
// val = list.childNodes;
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;
// Get children element Nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hi Jasmeet";

// children of children
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// Count Child
val = list.childElementCount;

// 1 -> element
// 2 -> Attribute(deprecated)
// 3 -> Text Node
// 8 -> comment
// 9 -> document iteself
// 10 -> Doctype

val = listItem.parentNode;
val = listItem.parentElement;

val = listItem.parentElement.parentElement;

// Get Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

val = listItem.parentElement.nextElementSibling;

// Get Previous Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

val = document.getElementById("task-title");
val = document.querySelector("#task-title");
val = document.querySelector(".collection-item");

val = document.querySelectorAll("ul.collection li.collection-item");

console.log(val);
```
