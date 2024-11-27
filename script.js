// Function to save notes to local storage
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('notes', notes);
    alert('Notes saved!');
}

// Function to clear notes and reset the textarea
function clearNotes() {
    document.getElementById('notepad').value = '';
}

// Function to add a new task to the to-do list
function addTodo() {
    const newTodo = document.getElementById('new-todo').value.trim();
    if (newTodo) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.innerHTML = `<span onclick="toggleCompleted(this)">${newTodo}</span> <button onclick="removeTodo(this)">❌</button>`;
        todoList.appendChild(li);
        document.getElementById('new-todo').value = '';
    }
}

// Function to toggle the completion of a task
function toggleCompleted(span) {
    span.parentElement.classList.toggle('completed');
}

// Function to remove a task from the to-do list
function removeTodo(button) {
    button.parentElement.remove();
}
