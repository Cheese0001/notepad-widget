// Function to display current time in each timezone
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
        element.textContent = `${id.replace('-', ' ').replace('time', 'Time').toUpperCase()}: ${new Intl.DateTimeFormat('en-US', options).format(new Date())}`;
    }
}

setInterval(updateTimeZones, 1000); // Update every second

// Save notes to local storage
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('notes', notes);
}

// Load notes from local storage
window.onload = function() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes;
    }
};

// Clear notes
function clearNotes() {
    document.getElementById('notepad').value = '';
    localStorage.removeItem('notes');
}

// Add a new task
function addTodo() {
    const newTodoText = document.getElementById('new-todo').value;
    if (newTodoText) {
        const todoList = document.getElementById('todo-list');
        const newItem = document.createElement('li');

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function() {
            newItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        };

        newItem.appendChild(checkbox);
        newItem.appendChild(document.createTextNode(newTodoText));
        
        // Add the new item to the list
        todoList.appendChild(newItem);
        document.getElementById('new-todo').value = ''; // Clear input
    }
}


// Clear all tasks
function clearAllTasks() {
    document.getElementById('todo-list').innerHTML = '';
}
