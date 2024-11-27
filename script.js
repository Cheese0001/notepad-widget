// Function to add a new task to the to-do list
function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const todoText = newTodoInput.value.trim();

    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.classList.add('todo-item');

        // Create a span to hold the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = todoText;
        li.appendChild(taskSpan);

        // Create a checkmark button
        const checkButton = document.createElement('button');
        checkButton.textContent = '✔';
        checkButton.classList.add('check-btn');
        checkButton.onclick = () => {
            li.classList.toggle('completed');
        };
        li.appendChild(checkButton);

        // Add the new task to the list
        todoList.appendChild(li);
        newTodoInput.value = ''; // Clear the input field
    }
}

// Function to save the notes (example logic)
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('savedNotes', notes);
    alert('Notes saved!');
}

// Function to clear the notes
function clearNotes() {
    document.getElementById('notepad').value = '';
}
