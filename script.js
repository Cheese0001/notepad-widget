// Time zone display
function updateTimeZones() {
    const pacificTime = document.getElementById('pacific-time');
    const mountainTime = document.getElementById('mountain-time');
    const centralTime = document.getElementById('central-time');
    const easternTime = document.getElementById('eastern-time');
    const philippinesTime = document.getElementById('philippines-time');

    const options = { timeStyle: 'short', dateStyle: 'short', hour12: true };

    pacificTime.textContent = `Pacific Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', ...options })}`;
    mountainTime.textContent = `Mountain Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Denver', ...options })}`;
    centralTime.textContent = `Central Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', ...options })}`;
    easternTime.textContent = `Eastern Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', ...options })}`;
    philippinesTime.textContent = `Philippine Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila', ...options })}`;
}

// Run the time zone function every second
setInterval(updateTimeZones, 1000);

// Notes functionality
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('savedNotes', notes);
    alert('Notes saved successfully!');
}

function loadNotes() {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes;
    }
}

function clearNotes() {
    document.getElementById('notepad').value = '';
    localStorage.removeItem('savedNotes');
    alert('Notes cleared successfully!');
}

// To-do list functionality
function addTodo() {
    const newTodo = document.getElementById('new-todo').value;
    if (newTodo) {
        const ul = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
            <span>${newTodo}</span>
            <button onclick="removeTodo(this)">❌</button>
        `;
        ul.appendChild(li);
        document.getElementById('new-todo').value = '';
    }
}

function removeTodo(button) {
    button.parentElement.remove();
}

function clearAllTasks() {
    document.getElementById('todo-list').innerHTML = '';
}

// Load notes on page load
document.addEventListener('DOMContentLoaded', loadNotes);
