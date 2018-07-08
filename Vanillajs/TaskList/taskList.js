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
    
  form.addEventListener('submit', addTask); // Add task event
  
  taskList.addEventListener('click', removeTask);// Remove task event
  
  clearBtn.addEventListener('click', clearTasks);// Clear all task events
  
  filter.addEventListener('keyup', filterTasks); // Filter tasks event
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

// Remove task
// Here, parentElement refers to 
// <a class="delete-item secondary-content"><i class="fa fa-remove"></i></a>
// The event.target refers to <i class="fa fa-remove"></i>
function removeTask(event) {
  
    if (event.target.parentElement.classList.contains('delete-item')) {

        if (confirm('Are you Sure?')) {

            event.target.parentElement.parentElement.remove(); // remove the li dynamically
        }
        
    }
    
}

// Clear Tasks
function clearTasks() {
    // remove all, but slow
    //taskList.innerHTML = '';

    // remove Faster
    while (taskList.firstChild) { // if there is any li, the remove it
        taskList.removeChild(taskList.firstChild);
    }

}

// Filter tasks
function filterTasks(event) {
    const text = event.target.value.toLowerCase();
    // console.log(text);

    document.querySelectorAll('.collection-item').forEach(function(task) { // task = li

        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
                
            task.style.display = 'block';
       
        } else {
            task.style.display = 'none';
        }

    });
    
}