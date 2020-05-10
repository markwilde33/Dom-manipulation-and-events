// Replace An Element

// Create element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('New List'));

// Get the heading to be replaced
// get parent
const cardAction = document.querySelector('.card-action');
// Get heading
const oldHeading = document.getElementById('task-title');

// How to replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove an element
// Get the parent
const list = document.querySelector('ul');
// get the children
const lis = document.querySelectorAll('li');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes & Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link

console.log(val);