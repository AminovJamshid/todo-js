const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
let todos = [];

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText) {
        todos.push(taskText);
        todoInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    todoList.innerHTML = '';
    todos.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => removeTask(index));

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function removeTask(index) {
    todos.splice(index, 1);
    renderTasks();
}

todoInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') addTask();
});