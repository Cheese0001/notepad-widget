// Update Timezones
function updateTimeZones() {
    const timeZones = {
        'pacific-time': 'America/Los_Angeles',
        'mountain-time': 'America/Denver',
        'central-time': 'America/Chicago',
        'eastern-time': 'America/New_York',
        'philippines-time': 'Asia/Manila'
    };

    for (const [id, timeZone] of Object.entries(timeZones)) {
        const element = document.getElementById(id);
        const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        element.textContent = `${id.replace('-', ' ').toUpperCase()}: ${new Intl.DateTimeFormat('en-US', options).format(new Date())}`;
    }
}

setInterval(updateTimeZones, 1000);

// Notes Functionality
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('notes', notes);
}

window.onload = function() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes;
    }
};

function clearNotes() {
    document.getElementById('notepad').value = '';
    localStorage.removeItem('notes');
}

// To-Do List Functionality
function addTodo() {
    const todoInput = document.getElementById('new-todo');
    if (todoInput.value.trim()) {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');
        listItem.textContent = todoInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✔';
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
}

function clearAllTasks() {
    document.getElementById('todo-list').innerHTML = '';
}
