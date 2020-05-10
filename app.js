let val;
let val2;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
// val = list;

// get child nodes
val2 = list.childNodes;
// val2 = list.childNodes[0];
// val2 = list.childNodes[0].nodeName;
val2 = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// get child element nodes only (without text nodes)
val = list.children;
// val = list.children[1];
// list.children[0].textContent = 'Hello';
// list.children[1].textContent = ' you fool';
// list.children[2].textContent = ' I';
// list.children[3].textContent = ' love';
// list.children[4].textContent = ' you';

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get next siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

// console.log(val2);
console.log(val);