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
function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes;
    }
}

// Clear notes
function clearNotes() {
    document.getElementById('notepad').value = '';
    localStorage.removeItem('notes');
}

// Function to add a new task
function addTodo() {
    const newTodo = document.getElementById('new-todo').value;
    if (newTodo) {
        const todoList = document.getElementById('todo-list');
        const newItem = document.createElement('li');
        newItem.textContent = newTodo;

        // Create a button to mark as done
        const checkButton = document.createElement('button');
        checkButton.textContent = '✔';
        checkButton.onclick = function() {
            markAsDone(newItem);
        };

        // Create a button to delete the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.onclick = function() {
            newItem.remove();
            saveTasks(); // Save tasks after deletion
        };

        newItem.appendChild(checkButton);
        newItem.appendChild(deleteButton);
        todoList.appendChild(newItem);
        document.getElementById('new-todo').value = '';

        // Save the current tasks to local storage
        saveTasks();
    }
}

// Function to mark a task as done
function markAsDone(taskItem) {
    taskItem.style.textDecoration = taskItem.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    saveTasks(); // Save updated tasks to local storage
}

// Function to save tasks to local storage
function saveTasks() {
    const todoList = document.getElementById('todo-list');
    const tasks = [];
    for (const taskItem of todoList.children) {
        tasks.push({
            text: taskItem.textContent.replace('✔', '').replace('❌', '').trim(),
            completed: taskItem.style.textDecoration === 'line-through'
        });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        const todoList = document.getElementById('todo-list');
        tasks.forEach(task => {
            const newItem = document.createElement('li');
            newItem.textContent = task.text;

            if (task.completed) {
                newItem.style.textDecoration = 'line-through';
            }

            const checkButton = document.createElement('button');
            checkButton.textContent = '✔';
            checkButton.onclick = function() {
                markAsDone(newItem);
            };

            // Create a button to delete the task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.onclick = function() {
                newItem.remove();
                saveTasks(); // Save tasks after deletion
            };

            newItem.appendChild(checkButton);
            newItem.appendChild(deleteButton);
            todoList.appendChild(newItem);
        });
    }
}

// Function to clear all tasks
function clearAllTasks() {
    document.getElementById('todo-list').innerHTML = '';
    localStorage.removeItem('tasks');
}

// Load tasks and notes when the page loads
window.onload = function() {
    loadTasks();
    loadNotes();
};
