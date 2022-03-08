# DOM SELECTORS FOR MULTIPLE ELEMENTS

```javascript
// document.getElementsByClassName

const items = document.getElementsByClassName("collection-item");

console.log(items);

console.log(items[0]);

items[0].style.color = "red";
items[3].textContent = "Hello Jasmeet";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(listItems);

// document.getElementsByTagname

let lis = document.getElementsByTagName("li");

console.log(lis);

console.log(items[0]);

items[0].style.color = "red";
items[3].textContent = "Hello Jasmeet";

lis[0].style.color = "red";
lis[3].textContent = "hello";

// Convert HTML collection into array

lis = Array.from(lis);

lis.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

lis.reverse();
console.log(lis);

//  * QUERY SELECTOR ALL
// * We don't have to convert it into array to perform forEach operations as it is a Node List.

const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function (item, index) {
  // console.log(item);
  item.textContent = `${index}: 'Hello World'`;
});

console.log(items);

const liOdd = document.querySelectorAll("li:nth-child(odd)");

liOdd.forEach(function (li, index) {
  li.style.color = "green";
});

const liEven = document.querySelectorAll("li:nth-child(even)");

liEven.forEach(function (li, index) {
  li.style.background = "lightgray";
});

// * With the help of a for loop we can also access HTML collections because they have the .length funciton
for (let i = 0; i < liEven.length; i++) {
  liEven[i].textContent = "Hi Jasmeet";
}
```
