// Save and load notes from localStorage
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('notes', notes);
}

window.onload = function() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes;
    }
    displayTodos();
};

function clearNotes() {
    document.getElementById('notepad').value = '';
    localStorage.removeItem('notes');
}

// Manage tasks with localStorage
function addTodo() {
    const newTodo = document.getElementById('new-todo').value;
    if (newTodo) {
        const todoList = JSON.parse(localStorage.getItem('todos')) || [];
        todoList.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todoList));
        displayTodos();
        document.getElementById('new-todo').value = ''; // Clear the input field
    }
}

function displayTodos() {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    const todoContainer = document.getElementById('todo-list');
    todoContainer.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `${todo} <button onclick="removeTodo(${index})">Remove</button>`;
        todoContainer.appendChild(todoItem);
    });
}

function removeTodo(index) {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todoList));
    displayTodos();
}

function clearAllTasks() {
    localStorage.removeItem('todos');
    displayTodos();
}

// Display live time for each time zone
function updateTimeZones() {
    const timeZoneOffsets = {
        'pacific-time': -8,
        'mountain-time': -7,
        'central-time': -6,
        'eastern-time': -5,
        'philippines-time': 8
    };

    for (let [id, offset] of Object.entries(timeZoneOffsets)) {
        const date = new Date();
        const adjustedDate = new Date(date.getTime() + offset * 3600 * 1000);
        document.getElementById(id).innerText = `${adjustedDate.toLocaleTimeString()} ${adjustedDate.toDateString()}`;
    }
}

setInterval(updateTimeZones, 1000);
window.onload = updateTimeZones;
