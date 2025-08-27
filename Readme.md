Ans to the question no-1:

Searching or select element using id we will use getElementById.
Searching or select element using classname we will use getElementsByClassName.
Searching or select by CSS selector we will use querySelector / querySelectorAll.

Ans to the question no-2:

<!-- create element  -->
const newDiv = document.createElement("div");
newDiv.innerText = "Hello, I am practicing JS";
<!-- Insert it into the DOM -->
const container = document.getElementyById("container");
contiainer.appendChild(newDiv);


Ans to the question no-3:

Event bubbling means the event goes from the clicked element up to its parent, and then up to the whole webpage.

<!-- Let's see how does it work with bookshelf analogy-->

Click starts at the book (child element)
Then it "bubbles up" to the Shelf (parent element)
Then it "bubbles up" to the BookShelf (document)


Ans to the question no-4:

Event delegation means putting the event on the parent instead of every child. It works because of event bubbling. It’s useful for performance and for handling dynamic elements.


Ans to the question no-5:

preventDefault() stops the browser default action.
stopPropagation() stops the event from bubbling to parents.

