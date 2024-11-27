// Live Timezone Functionality
function updateTimezones() {
    const timezones = {
        Pacific: "Pacific/Auckland",
        Mountain: "America/Denver",
        Central: "America/Chicago",
        Philippines: "Asia/Manila"
    };

    // Loop over each timezone and update the corresponding div
    const timezoneElements = document.querySelectorAll('.timezone');
    const timezoneNames = Object.keys(timezones);

    timezoneElements.forEach((element, index) => {
        const timezoneName = timezoneNames[index];
        const timeZoneValue = timezones[timezoneName];
        
        // Get the current time in that timezone
        const date = new Date().toLocaleString("en-US", {
            timeZone: timeZoneValue,
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        // Update the element with the corresponding timezone and time
        element.textContent = `${timezoneName} Time: ${date}`;
    });
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
        li.innerHTML = `${newTask} <button onclick="this.parentElement.remove()">Remove</button>`;
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('new-todo').value = ''; // Clear the input field
    }
});

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
