// Live Timezone Functionality
function updateTimezones() {
function updateTimezones() {
    const timezones = [
        { id: 'pacific-time', offset: -8 },  // Pacific Time (UTC-8)
        { id: 'mountain-time', offset: -7 }, // Mountain Time (UTC-7)
        { id: 'central-time', offset: -6 }, // Central Time (UTC-6)
        { id: 'eastern-time', offset: -5 }, // Eastern Time (UTC-5)
        { id: 'philippines-time', offset: 8 }, // Philippines Time (UTC+8)
    ];

    timezones.forEach(zone => {
        const element = document.getElementById(zone.id);
        const currentTime = new Date();
        const localTime = new Date(currentTime.getTime() + zone.offset * 60 * 60 * 1000);
        const hours = localTime.getHours() % 12 || 12;
        const minutes = localTime.getMinutes().toString().padStart(2, '0');
        const ampm = localTime.getHours() < 12 ? 'AM' : 'PM';
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        const date = localTime.toDateString().slice(4);  // Format: 'Nov 27, 2024'

        element.innerHTML = `${zone.id.replace('-', ' ').toUpperCase()} <br> ${formattedTime} <br> ${date}`;
    });
}

setInterval(updateTimezones, 1000); // Update time every second

// To-Do List Functionality
document.getElementById('add-task').addEventListener('click', function() {
    const newTask = document.getElementById('new-todo').value;
    if (newTask) {
        const li = document.createElement('li');
        li.innerHTML = `${newTask} <button onclick="deleteTask(this)">Delete</button>`;
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.onclick = function() {
            if (checkBox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        };
        li.prepend(checkBox);
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
