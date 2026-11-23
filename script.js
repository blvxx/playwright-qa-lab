const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const footer = document.getElementById('footer');
const taskCount = document.getElementById('taskCount');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

const STORAGE_KEY = 'tasks';

function loadTasks() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        if (!Array.isArray(stored)) return [];
        return stored.filter(
            (task) => task && typeof task.text === 'string' && typeof task.completed === 'boolean'
        );
    } catch {
        return [];
    }
}

let tasks = loadTasks();

function saveTasks() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error('Could not save tasks to local storage:', error);
    }
}

function updateUI() {
    taskList.replaceChildren();

    const hasTasks = tasks.length > 0;
    emptyState.hidden = hasTasks;
    footer.hidden = !hasTasks;

    tasks.forEach((task, index) => {
        const item = document.createElement('li');
        if (task.completed) item.classList.add('completed');

        const label = document.createElement('label');
        label.className = 'task-content';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${index}`;
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));

        const text = document.createElement('span');
        text.className = 'task-text';
        text.textContent = task.text;

        label.append(checkbox, text);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.type = 'button';
        deleteButton.setAttribute('aria-label', 'Удалить задачу');
        deleteButton.title = 'Удалить задачу';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" aria-hidden="true"></i>';
        deleteButton.addEventListener('click', () => deleteTask(index));

        item.append(label, deleteButton);
        taskList.appendChild(item);
    });

    const activeTasks = tasks.filter((task) => !task.completed).length;
    taskCount.textContent = `${activeTasks} активных`;
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({ text, completed: false });
    taskInput.value = '';
    saveTasks();
    updateUI();
    taskInput.focus();
}

function toggleTask(index) {
    if (!tasks[index]) return;
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    updateUI();
}

function deleteTask(index) {
    if (index < 0 || index >= tasks.length) return;
    tasks.splice(index, 1);
    saveTasks();
    updateUI();
}

function clearCompleted() {
    tasks = tasks.filter((task) => !task.completed);
    saveTasks();
    updateUI();
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addTask();
});
clearCompletedBtn.addEventListener('click', clearCompleted);

updateUI();
