# Creating Elements

```javascript
const li = document.createElement("li");

// Adding a class
li.className = "collection-item";

// Adding ID
li.id = "newItem";

// Adding Attribute
li.setAttribute("title", "New Item");

// Creating Text Node and append

// Make a variable and insert
insertTextNode = document.createTextNode("Hello Jasmeet");
li.appendChild(insertTextNode);

// Use Directly
// li.appendChild(document.createTextNode("Hello Jasmeet"));

// Create New link element
const link = document.createElement("a");

// Adding the classes to the link element
link.className = "delete-item secondary-content";

// Adding icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Appending link to li
li.appendChild(link);

// Appending li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
```
