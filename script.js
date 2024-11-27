// Live Timezone Functionality
// Live Timezone Functionality
function updateTimezones() {
    const timezones = {
        pacific: "Pacific/Auckland",
        mountain: "America/Denver",
        central: "America/Chicago",
        philippines: "Asia/Manila"
    };

    for (const [key, value] of Object.entries(timezones)) {
        const timeElement = document.getElementById(key);
        const date = new Date().toLocaleString("en-US", {
            timeZone: value,
            hour12: true,  // Set to true to use 12-hour format
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        timeElement.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)} Time: ${date}`;
    }
}

// Call the update function every second
setInterval(updateTimezones, 1000);

// Initial call to update on page load
updateTimezones();

// To-Do List Functionality
document.getElementById('add-task').addEventListener('click', function() {
    const newTask = document.getElementById('new-todo').value;
    if (newTask) {
        const li = document.createElement('li');
        li.innerHTML = `${newTask} <button onclick="deleteTask(this)">Delete</button>`;
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('new-todo').value = ''; // Clear the input field
    }
});

// Delete individual task
function deleteTask(button) {
    button.parentElement.remove(); // Removes the task item
}

// Clear All Tasks Functionality
document.getElementById('clear-all').addEventListener('click', function() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear all tasks
});

// Save Notes Functionality
document.getElementById('save-notes').addEventListener('click', function() {
    const notes = document.getElementById('notepad').value;
    if (notes) {
        localStorage.setItem('savedNotes', notes); // Save notes to localStorage
        alert('Notes saved successfully!');
    } else {
        alert('Please write something in the notepad!');
    }
});

// Clear Notes Functionality
document.getElementById('clear-notes').addEventListener('click', function() {
    document.getElementById('notepad').value = ''; // Clear the notes field
    localStorage.removeItem('savedNotes'); // Remove notes from localStorage
});

// Load saved notes from localStorage on page load
window.addEventListener('load', function() {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes; // Load notes into notepad
    }
});
