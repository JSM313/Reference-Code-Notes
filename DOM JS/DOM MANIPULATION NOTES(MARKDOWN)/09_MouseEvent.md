# MOUSE EVENTS

```javascript
const clearButton = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");

const heading = document.querySelector("h5");

// Click btn
clearButton.addEventListener("click", runEvent);

// Double Click event
clearButton.addEventListener("dblclick", runEvent);

// Mouse Down(Holding the mouse)
clearButton.addEventListener("mousedown", runEvent);

// Mouse Up(After holding the mouse button)
clearButton.addEventListener("mouseup", runEvent);

// MouseEnter
card.addEventListener("mouseenter", runEvent);

// MouseLeave
card.addEventListener("mouseleave", runEvent);

// \* Mouseover and MouseOut:- They are similar to mouseover and mouseleave but the difference is that mouseover will trigger even when we are inside the element that we have entered i.e within the child of that element.

// Mousemove
card.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}
```
