// Function to save notes to localStorage
function saveNotes() {
  const notes = document.getElementById('notepad').value;
  localStorage.setItem('savedNotes', notes);
}

// Function to load notes from localStorage
function loadNotes() {
  const savedNotes = localStorage.getItem('savedNotes');
  if (savedNotes) {
    document.getElementById('notepad').value = savedNotes;
  }
}

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
      saveTasks(); // Save updated task status
    };

    // Append the button and the list item to the list
    li.appendChild(checkButton);
    todoList.appendChild(li);

    // Clear the input field after adding
    newTodoInput.value = '';
    saveTasks(); // Save tasks to localStorage
  }
}

// Function to save tasks to localStorage
function saveTasks() {
  const tasks = [];
  const taskElements = document.querySelectorAll('.todo-item');
  taskElements.forEach(task => {
    tasks.push({
      text: task.querySelector('span').textContent,
      completed: task.querySelector('span').style.textDecoration === 'line-through'
    });
  });
  localStorage.setItem('savedTasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
  if (savedTasks) {
    savedTasks.forEach(task => {
      const todoList = document.getElementById('todo-list');
      const li = document.createElement('li');
      li.classList.add('todo-item');

      // Create a span to hold the task text
      const taskSpan = document.createElement('span');
      taskSpan.textContent = task.text;
      if (task.completed) {
        taskSpan.style.textDecoration = 'line-through'; // Mark completed tasks
      }
      li.appendChild(taskSpan);

      // Create a checkmark button
      const checkButton = document.createElement('button');
      checkButton.textContent = '✔️';
      checkButton.onclick = function() {
        taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        saveTasks(); // Save updated task status
      };

      // Append the button and the list item to the list
      li.appendChild(checkButton);
      todoList.appendChild(li);
    });
  }
}

// Load notes and tasks when the page loads
window.onload = function() {
  loadNotes();
  loadTasks();
};
