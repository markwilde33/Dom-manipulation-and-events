// Event Bubbling

// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('you just clicked the element with a class of card title');

// prevent event bubbling with this method
// event.stopPropagation();
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// });
// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// });

// Event Delegation

// const deleteItem = document.querySelector('.delete-item');


// deleteItem.addEventListener('click', function () {
//   console.log('deleted item');
// })

document.body.addEventListener('click', function (e) {
  if (e.target.className === 'fa fa-remove') {
    console.log('deleted item', e.target);
  }
});

// Very handy for viewing the class being targeted by the event
// console.log(e.target);

document.body.addEventListener('click', function (e) {
  // Using className will not work if more classes are added to any element targeted after the fact
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('Gotcha Sucker', e.target);
  // }
  // Use classList.contains, checks for ANY class listed to fire, can add more classes without issues
  if (e.target.parentElement.classList.contains('secondary-content')) {
    console.log('Gotcha Sucker', e.target);
    //go up 2 elements to delete the list item <i> -> <a> -> <li>--delete
    e.target.parentElement.parentElement.remove();
  }
});