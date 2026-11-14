const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const footer = document.getElementById('footer');
const taskCount = document.getElementById('taskCount');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateUI() {
    taskList.innerHTML = '';
    
    // Проверка на пустой список
    if (tasks.length === 0) {
        emptyState.style.display = 'block';
        footer.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        footer.style.display = 'flex';
    }

    let activeTasks = 0;

    tasks.forEach((task, index) => {
        if (!task.completed) activeTasks++;

        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        const div = document.createElement('div');
        div.className = 'task-content';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleTask(index);

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        // Клик по тексту тоже переключает статус
        span.onclick = () => toggleTask(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Иконка корзины
        deleteBtn.onclick = () => deleteTask(index);

        div.appendChild(checkbox);
        div.appendChild(span);
        li.appendChild(div);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
    });

    // Обновляем счетчик
    taskCount.textContent = `${activeTasks} активных`;
}

function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        taskInput.value = '';
        saveTasks();
        updateUI();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    updateUI();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    updateUI();
}

function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    updateUI();
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
clearCompletedBtn.addEventListener('click', clearCompleted);

// Запуск при загрузке
updateUI();
