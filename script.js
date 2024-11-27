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
        checkButton.textContent = '✔️';
        checkButton.onclick = function() {
            taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        };

        // Append the button and the list item to the list
        li.appendChild(checkButton);
        todoList.appendChild(li);

        // Clear the input field after adding
        newTodoInput.value = '';
    }
}

// Function to save the notes (implementation depends on your storage method)
function saveNotes() {
    const notes = document.getElementById('notepad').value;
    alert('Notes saved!');
    // Add logic for actual saving if needed (e.g., localStorage or database)
}

// Function to clear the notes
function clearNotes() {
    document.getElementById('notepad').value = '';
}
