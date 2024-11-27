// Save notes to localStorage
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('notes', notes); // Save the notes
    alert('Notes saved!');
}

// Clear notes from the textarea
function clearNotes() {
    document.getElementById('notepad').value = ''; // Clear the textarea
    localStorage.removeItem('notes'); // Remove notes from localStorage
}

// Add a task to the To-Do list
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-task');
    deleteBtn.onclick = function () {
        li.remove();
    };

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-task');
    completeBtn.onclick = function () {
        li.classList.toggle('completed');
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);

    taskInput.value = '';
    saveTasks(); // Save the updated task list to localStorage
}

// Clear all tasks from the To-Do list
function clearAll() {
    document.getElementById('todo-list').innerHTML = '';
    localStorage.removeItem('tasks'); // Remove tasks from localStorage
}

// Save the tasks to localStorage
function saveTasks() {
    const tasks = [];
    const taskItems = document.querySelectorAll('#todo-list li');
    taskItems.forEach(item => {
        tasks.push({
            text: item.firstChild.textContent,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save task data to localStorage
}

// Load notes from localStorage
function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes;
    }
}

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.text;
            if (task.completed) {
                li.classList.add('completed');
            }

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-task');
            deleteBtn.onclick = function () {
                li.remove();
                saveTasks(); // Update localStorage after task removal
            };

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.classList.add('complete-task');
            completeBtn.onclick = function () {
                li.classList.toggle('completed');
                saveTasks(); // Update localStorage after task completion
            };

            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            document.getElementById('todo-list').appendChild(li);
        });
    }
}

// Call the loadNotes and loadTasks functions when the page loads
window.onload = function () {
    loadNotes();
    loadTasks();
};

// Update timezones function remains unchanged
function updateTimezones() {
    const timezones = [
        { id: 'pacific-time', offset: -8 }, 
        { id: 'mountain-time', offset: -7 },
        { id: 'central-time', offset: -6 },
        { id: 'eastern-time', offset: -5 },
        { id: 'philippines-time', offset: 8 },
    ];

    timezones.forEach(zone => {
        const element = document.getElementById(zone.id);
        const currentTime = new Date();
        const localTime = new Date(currentTime.getTime() + zone.offset * 60 * 60 * 1000);
        const hours = localTime.getHours() % 12 || 12;
        const minutes = localTime.getMinutes().toString().padStart(2, '0');
        const ampm = localTime.getHours() < 12 ? 'AM' : 'PM';
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        
        element.innerHTML = `${zone.id.replace('-', ' ').toUpperCase()} <br> ${formattedTime} <br> ${date}`;
    });
}

setInterval(updateTimezones, 1000);
