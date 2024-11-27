// Save notes to local storage
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('savedNotes', notes);
}

// Load notes from local storage
function loadNotes() {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes;
    }
}

// Clear notes
function clearNotes() {
    document.getElementById('notepad').value = '';
    localStorage.removeItem('savedNotes');
}

// Add a new task
function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const todoText = newTodoInput.value.trim();
    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.classList.add('todo-item');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = todoText;
        li.appendChild(taskSpan);

        const checkButton = document.createElement('button');
        checkButton.textContent = '✔️';
        checkButton.onclick = function() {
            taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
            saveTasks();
        };

        li.appendChild(checkButton);
        todoList.appendChild(li);

        newTodoInput.value = '';
        saveTasks();
    }
}

// Save tasks to local storage
function saveTasks() {
    const tasks = [];
    const taskElements = document.querySelectorAll('.todo-item');
    taskElements.forEach(task => {
        tasks.push({
            text: task.querySelector('span').textContent,
            completed: task.querySelector('span').style.textDecoration === 'line-through'
        });
    });
    localStorage.setItem('savedTasks', JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
    if (savedTasks) {
        savedTasks.forEach(task => {
            const todoList = document.getElementById('todo-list');
            const li = document.createElement('li');
            li.classList.add('todo-item');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = task.text;
            if (task.completed) {
                taskSpan.style.textDecoration = 'line-through';
            }
            li.appendChild(taskSpan);

            const checkButton = document.createElement('button');
            checkButton.textContent = '✔️';
            checkButton.onclick = function() {
                taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
                saveTasks();
            };

            li.appendChild(checkButton);
            todoList.appendChild(li);
        });
    }
}

// Clear all tasks
function clearAllTasks() {
    document.getElementById('todo-list').innerHTML = '';
    localStorage.removeItem('savedTasks');
}

// Display date and time
function updateTime() {
    const timeZones = {
        'Eastern': 'America/New_York',
        'Central': 'America/Chicago',
        'Mountain': 'America/Denver',
        'Pacific': 'America/Los_Angeles',
        'Philippines': 'Asia/Manila'
    };

    let timeDisplay = '';
    for (let [zone, timeZone] of Object.entries(timeZones)) {
        const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
        timeDisplay += `${zone} Time: ${time} <br>`;
    }

    document.getElementById('date-time').innerHTML = timeDisplay;
}

// Adjust the font size of the notepad and time zone display
function resizeText(action) {
    const notepad = document.getElementById('notepad');
    const dateTime = document.getElementById('date-time');
    const newSize = parseInt(window.getComputedStyle(notepad).fontSize);

    if (action === 'increase') {
        notepad.style.fontSize = (newSize + 2) + 'px'; // Increase font size by 2px
        dateTime.style.fontSize = (newSize + 2) + 'px';
    } else if (action === 'decrease') {
        notepad.style.fontSize = (newSize - 2) + 'px'; // Decrease font size by 2px
        dateTime.style.fontSize = (newSize - 2) + 'px';
    }
}
