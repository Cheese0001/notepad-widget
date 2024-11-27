// Function to add a new task to the to-do list
function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const todoText = newTodoInput.value.trim();

    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.classList.add('todo-item');

        // Create a span to hold the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = todoText;
        li.appendChild(taskSpan);

        // Create a checkmark button
        const checkButton = document.createElement('button');
        checkButton.textContent = '✔️';
        checkButton.onclick = function() {
            taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        };

        // Append the button and the list item to the list
        li.appendChild(checkButton);
        todoList.appendChild(li);

        // Clear the input field after adding
        newTodoInput.value = '';
    }
}

// Function to save the notes (implementation depends on your storage method)
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    alert('Notes saved!');
    // Add logic for actual saving if needed (e.g., localStorage or database)
}

// Function to clear the notes
function clearNotes() {
    document.getElementById('notepad').value = '';
}
function saveNotes() {
  let notes = document.getElementById('notes').value; // Get the content of the note
  localStorage.setItem('savedNotes', notes); // Save it to localStorage
}
function loadNotes() {
  let savedNotes = localStorage.getItem('savedNotes'); // Get the content from localStorage
  if (savedNotes) {
    document.getElementById('notes').value = savedNotes; // Display the content in the notepad
  }
}
function addTask() {
  let taskInput = document.getElementById('taskInput').value; // Get the input value
  if (taskInput.trim() !== '') {
    // Create a new task element with a checkmark button
    let taskElement = document.createElement('div');
    taskElement.textContent = taskInput;
    taskElement.classList.add('task');
    let checkButton = document.createElement('button');
    checkButton.textContent = '✓';
    checkButton.onclick = function() {
      taskElement.style.textDecoration = 'line-through'; // Mark the task as completed
      saveTasks(); // Save the updated task status
    };
    taskElement.appendChild(checkButton);
    document.getElementById('taskList').appendChild(taskElement);
    document.getElementById('taskInput').value = ''; // Clear the input
    saveTasks(); // Save the task to localStorage
  }
}

function saveTasks() {
  let tasks = [];
  let taskElements = document.querySelectorAll('.task');
  taskElements.forEach(task => {
    tasks.push(task.textContent);
  });
  localStorage.setItem('savedTasks', JSON.stringify(tasks));
}

function loadTasks() {
  let savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
  if (savedTasks) {
    savedTasks.forEach(task => {
      let taskElement = document.createElement('div');
      taskElement.textContent = task;
      taskElement.classList.add('task');
      let checkButton = document.createElement('button');
      checkButton.textContent = '✓';
      checkButton.onclick = function() {
        taskElement.style.textDecoration = 'line-through'; // Mark the task as completed
        saveTasks(); // Save the updated task status
      };
      taskElement.appendChild(checkButton);
      document.getElementById('taskList').appendChild(taskElement);
    });
  }
}

window.onload = function() {
  loadNotes();
  loadTasks();
};
