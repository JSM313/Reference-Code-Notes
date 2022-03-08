# EVENT BUBBLING AND EVENT DELEGATION

```javascript
const card = document.querySelector(".card-title");
const cardContent = document.querySelector(".card-content");

card.addEventListener("click", runTask);

function runTask(e) {
  console.log("card title");
}

cardContent.addEventListener("click", runEvent);

function runEvent(e) {
  console.log("card-content");
}

// EVENT DELEGATION

const deleteItem = document.querySelector(".delete-item");

deleteItem.addEventListener("click", delItem);

document.body.addEventListener("click", delItem);

function delItem(e) {
  if (e.target.parentElement.className === "delete-item secondary-content") {
    console.log("delete item");
  }
}

function delItem(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
  }
}
```
