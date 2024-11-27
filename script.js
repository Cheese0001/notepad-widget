function saveNotes() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('notes', notes);
    alert('Notes saved!');
}

function clearNotes() {
    document.getElementById('notepad').value = '';
}

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
}

function clearAll() {
    document.getElementById('todo-list').innerHTML = '';
}

// Update live timezone function
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
      

        element.innerHTML = `${zone.id.replace('-', ' ').toUpperCase()} <br> ${formattedTime} <br> ${date}`;
    });
}

// Call the updateTimezones function every second to keep it live
setInterval(updateTimezones, 1000);
