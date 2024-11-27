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
function addTask() {
  const taskInput = document.getElementById('taskInput').value.trim();
  if (taskInput) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskInput;
    li.appendChild(taskSpan);

    const checkButton = document.createElement('button');
    checkButton.textContent = '✔️';
    checkButton.onclick = function() {
      taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
      saveTasks();
    };

    li.appendChild(checkButton);
    todoList.appendChild(li);

    document.getElementById('taskInput').value = '';
    saveTasks();
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

      const taskSpan = document.createElement('span');
      taskSpan.textContent = task.text;
      if (task.completed) {
        taskSpan.style.textDecoration = 'line-through';
      }
      li.appendChild(taskSpan);

      const checkButton = document.createElement('button');
      checkButton.textContent = '✔️';
      checkButton.onclick = function() {
        taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        saveTasks();
      };

      li.appendChild(checkButton);
      todoList.appendChild(li);
    });
  }
}

// Function to clear all tasks from the list and localStorage
function clearAllTasks() {
  document.getElementById('todo-list').innerHTML = '';
  localStorage.removeItem('savedTasks');
}

// Load notes and tasks when the page loads
window.onload = function() {
  loadNotes();
  loadTasks();
};
