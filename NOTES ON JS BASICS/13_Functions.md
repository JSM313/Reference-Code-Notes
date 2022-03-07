# FUNCTIONS

### DECLARATION

</br>

> We can assign default values with the parameters itself in javascript

> We can use these parameters as base cases so if a value is remainded undefined then upon parsing the value it can automatically assign.

</br>

```javascript
function greet(firstName, lastName) {
  return "Hello " + firstName + " " + lastName;
}
```

// Assigning functions to variables

```javascript
const square = function (x) {
  return x * x;
};
```

`console.log(square(8));`

### IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS(IIFEs)

````javascript
// SYNTAX:-

(function () {
  console.log("IIFE Ran...");
})();

(function (name) {
  console.log("Hello" + "" + name);
})("Jasmeet");

```javascript

// Property Methods
const todo = {
  add: function(){
    console.log('Add todo...')
  },

  edit: function(id){
    console.log('Edit todo... ${id}')
  }
}
````

```javascript
todo.add();
todo.edit(22);
todo.delete();
```
