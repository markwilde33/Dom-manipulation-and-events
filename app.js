// Create an element
const li = document.createElement('li');

// Add a class
li.className = 'collection-item';

// Add an id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello Clarice'));

// Creat new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link inside li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);