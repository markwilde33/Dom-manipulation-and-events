// // set local storage item
localStorage.setItem('intent', 'git gud');
localStorage.setItem('reason', 'freedom');
// localStorage.setItem('task', '');

// // set session storage item
// sessionStorage.setItem('intent', 'git right gud');

// remove from storage
// localStorage.removeItem('intent');

// get from storage
const intent = localStorage.getItem('intent');
const reason = localStorage.getItem('reason');

// clear local storage
// localStorage.clear();

console.log(`${intent} gain ${reason}`);


document.querySelector('form').addEventListener('submit',
  function (e) {
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('taskItems') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('taskItems'));
    }

    tasks.push(task);

    localStorage.setItem('taskItems', JSON.stringify(tasks));
    alert('Got dat sucker')

    console.log(tasks);
    e.preventDefault();
  });

const tasks = JSON.parse(localStorage.getItem('taskItems'));

tasks.forEach(function (task) {
  console.log(task);
});