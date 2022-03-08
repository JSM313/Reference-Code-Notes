<!-- * In this section we will learn about the brief concept of Document Object Model for javascript -->

<!-- * When we access the doucment object from the window in javascript it gives us in the form of containers (which are not actually array because we can't use a for each loop in these containers) -->

<!-- * First we will need to convert it into arrays then we can use it as an object -->

<!-- *It is not a recommended method -->

<!-- * We will do it with the help of selectors in the later part of the document -->

```javascript
let val;

val = document;
val = document.all;
val = document.all[2];

val = document.all.length;

val = document.head;
val = document.body;

val = document.doctype;

val = document.domain;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;

val = document.links[0].className;

val = document.links[0].classList;

// To get attributes
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute("src"));
});

// console.log(val);
```
