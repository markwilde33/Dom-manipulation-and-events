// // document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// // console.log(items);
// // console.log(items[0]);
// items[2].style.color = 'green';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// // console.log(listItems);

// // document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// // console.log(lis);
// console.log(lis[3]);
// lis[0].style.color = 'blue';
// lis[1].textContent = 'Goodbye';

// // Convert HTML Collection into array

// lis = Array.from(lis);

// lis.reverse();

// lis[0].style.color = 'blue';

// lis.forEach(function (li, index) {
//   console.log(li.className, index);
//   li.textContent = `${index}: Who shot cha?`
// })

// console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (item, index) {
  console.log(item.className, index);
  item.textContent = `${index}: Who's the daddy now?`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// for each
liOdd.forEach(function (li, index) {
  li.style.background = 'purple'
  li.style.color = 'pink'
});
liEven.forEach(function (li, index) {
  li.style.background = 'orange'
  li.style.color = 'blue'
});

// for loop
for (let i = 0; i < liOdd.length; i++) {
  liOdd[i].style.background = 'blue'
  liOdd[i].style.color = 'white'
}
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = 'brown'
  liEven[i].style.color = 'yellow'
}

console.log(items);