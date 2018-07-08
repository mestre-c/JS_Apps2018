// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(event) {
  if (taskInput.value === '') { // if nothing is entered   
        alert('Please add a task');
  }

  
  const li = document.createElement('li'); // Create li element
 
  li.className = 'collection-item';  // Add a class
  
  li.appendChild(document.createTextNode(taskInput.value)); // Create text node and append to the li
 
  const link = document.createElement('a');  // Create new link element
  
  link.className = 'delete-item secondary-content'; // Add a class
  
  link.innerHTML = '<i class="fa fa-remove"></i>'; // Add icon html

  li.appendChild(link); // Append the link to li

  taskList.appendChild(li); // Append the li to the ul

  taskInput.value = ''; // Clear the input


  event.preventDefault(); 
}