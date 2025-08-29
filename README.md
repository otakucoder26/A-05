1.
•with getElementById, we can call an element by it's id and we can get only one element by this.
• With getElementsByClassName, we can call multiple elements with it's given class name. And it comes with an array form.
• With querySelector, we can call the first element matching by its id or css class name or attributes. 
• With querySelectorAll, we call multiple elements matching by its id or css class name or attributes etc.


2.(create the element) const textarea = document.createElement("textarea"); (Use it in the body tag) document.body.appendChild(textarea);


3.When we make an event like click, at first the handler runs on that element then it moves upward to its parent then the parent's parent until it reaches the root.


4.Event Delegation means we put an event listener on a parent element to handle events for all the child elements For that we do not need to add an event listener to every child element.


5.Using preventDefault() we can stop the default action of an element. Using stopPropagation() we stop bubbling to the parent element 