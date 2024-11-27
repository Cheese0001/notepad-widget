// Save notes to local storage
function saveNotes() {
  const notes = document.getElementById('notepad').value;
  localStorage.setItem('savedNotes', notes);
}

// Clear notes
function clearNotes() {
  document.getElementById('notepad').value = '';
  localStorage.removeItem('savedNotes');
}

// Load notes on page load
window.onload = function() {
  const savedNotes = localStorage.getItem('savedNotes');
  if (savedNotes) {
    document.getElementById('notepad').value = savedNotes;
  }
  updateDateTime();
};

// Add task function
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const checkButton = document.createElement('button');
    checkButton.textContent = '✔️';
    checkButton.onclick = function() {
      taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
      saveTasks();
    };

    li.appendChild(checkButton);
    todoList.appendChild(li);
    taskInput.value = '';
    saveTasks();
  }
}

// Save tasks to local storage
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

// Load tasks from local storage
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
  if (savedTasks) {
    const todoList = document.getElementById('todo-list');
    savedTasks.forEach(task => {
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

// Clear all tasks
function clearAllTasks() {
  document.getElementById('todo-list').innerHTML = '';
  localStorage.removeItem('savedTasks');
}

// Date and time function for displaying current time
function updateDateTime() {
  const dateTimeElement = document.getElementById('date-time');
  const now = new Date();
  const options = {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  dateTimeElement.textContent = `Eastern Time: ${now.toLocaleTimeString('en-US', options)}`;
  // Add other time zones here as needed...
}
