body {
    margin: 0;
    padding: 0;
    background-color: #F1F1F1;
    font-family: 'Press Start 2P', cursive;
}

.timezones-container {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

.timezone {
    padding: 10px;
    border-radius: 5px;
    color: #FFF;
    font-size: 14px;
    text-align: center;
}

.timezone:nth-child(1) { background-color: #007ACC; }
.timezone:nth-child(2) { background-color: #FF6F61; }
.timezone:nth-child(3) { background-color: #FFD700; }
.timezone:nth-child(4) { background-color: #4CAF50; }

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #FFF;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
}

.notepad-todo-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.notepad-container, .todo-container {
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    background-color: #F9F9F9;
    text-align: left;
}

textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    border: 1px solid #CCC;
    border-radius: 5px;
    font-size: 14px;
    resize: none;
}

button {
    background-color: #FEEEEB;
    color: #6B6D76;
    border: 1px solid #6B6D76;
    border-radius: 5px;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Press Start 2P', cursive;
}

button:hover {
    background-color: #6B6D76;
    color: white;
}

#todo-list li {
    background: #E0E0E0;
    margin-bottom: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

#todo-list li .delete-task {
    background-color: #D32F2F;
    color: #FFF;
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
}

#todo-list li .delete-task:hover {
    background-color: #C2185B;
}

.footer {
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    color: #777;
}

button:focus {
    outline: none;
}
