// Function to display current time in each timezone
function updateTimezones() {
        const timezones = {
            pacific: "Pacific/Auckland",  // Adjust the timezone identifiers as necessary
            mountain: "America/Denver",
            central: "America/Chicago",
            philippines: "Asia/Manila"
        };

        for (const [key, value] of Object.entries(timezones)) {
            const timeElement = document.getElementById(key);
            const date = new Date().toLocaleString("en-US", {
                timeZone: value,
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            // Update the time inside the timezone div
            timeElement.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)} Time: ${date}`;
        }
    }

    // Call the update function every second
    setInterval(updateTimezones, 1000);

    // Initial call to update on page load
    updateTimezones();
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

        newItem.appendChild(checkButton);
        todoList.appendChild(newItem);
        document.getElementById('new-todo').value = '';
    }
}

// Clear all tasks
function clearAllTasks() {
    document.getElementById('todo-list').innerHTML = '';
}
function markAsDone(taskItem) {
    taskItem.style.textDecoration = taskItem.style.textDecoration === 'line-through' ? 'none' : 'line-through';
}

