# JavaScript Questions & Answers

---

## Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Ans to the question no-1:**

- Searching or select element using **id** → `getElementById`
- Searching or select element using **classname** → `getElementsByClassName`
- Searching or select by **CSS selector** → `querySelector` / `querySelectorAll`

---

## Q-2: How do you create and insert a new element into the DOM?

**Ans to the question no-2:**

```javascript
const newDiv = document.createElement("div");
newDiv.innerText = "Hello, I am practicing JS";

const container = document.getElementById("container");
container.appendChild(newDiv);
````

-----

## Q-3: What is Event Bubbling and how does it work?

**Ans to the question no-3:**

Event bubbling means the event goes from the clicked element up to its parent, and then up to the whole webpage.

### Bookshelf Analogy:

  * Click starts at the book (child element)
  * Then it "bubbles up" to the Shelf (parent element)
  * Then it "bubbles up" to the BookShelf (document)

-----

## Q-4: What is Event Delegation in JavaScript? Why is it useful?

**Ans to the question no-4:**

  * Event delegation means putting the event on the parent instead of every child.
  * It works because of event bubbling.
  * It’s useful for performance and for handling dynamic elements.

-----

## Q-5: What is the difference between preventDefault() and stopPropagation() methods?

**Ans to the question no-5:**

  * `preventDefault()` → Stops the browser default action
  * `stopPropagation()` → Stops the event from bubbling to parents

<!-- end list -->

```
```
