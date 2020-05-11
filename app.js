// Keyboard and Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent)
// Keyup
// taskInput.addEventListener('keyup', runEvent)
// Keypress
// taskInput.addEventListener('keypress', runEvent)
// Focus
// taskInput.addEventListener('focus', runEvent)
// Blur
// taskInput.addEventListener('blur', runEvent)
// Cut
// taskInput.addEventListener('cut', runEvent)
// Paste
// taskInput.addEventListener('paste', runEvent)
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e) {
  // e.preventDefault();
  // Log event type
  console.log(`Event Type: ${e.type}`);
  // Get input value
  console.log(e.target.value);
  // console.log(taskInput.value);

  // heading.innerText = e.target.value;
}

// Clear input
taskInput.value = '';