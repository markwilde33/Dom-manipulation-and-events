// Event listeners and the event object

document.querySelector('.clear-tasks').addEventListener('click', function (e) {
  console.log('Hello Clarice');
  //e.preventDefault();
})


document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  let val;

  // Event target element
  val = e;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Press me';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  //Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  //Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}