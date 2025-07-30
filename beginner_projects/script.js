let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks(filter = 'all') {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  let filteredTasks = tasks;
  if (filter === 'active') {
    filteredTasks = tasks.filter(t => !t.completed);
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(t => t.completed);
  }

  filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;

    li.innerHTML = `
      <div>
        <strong>${task.text}</strong><br/>
        <span class="task-meta">📅 ${task.dueDate || 'No date'} | 🏷 ${task.category}</span>
      </div>
      <div>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleComplete(${index})" />
        <button class="delete-btn" onclick="deleteTask(${index})">&times;</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function addTask(e) {
  e.preventDefault();
  const text = document.getElementById('taskInput').value.trim();
  const dueDate = document.getElementById('dueDate').value;
  const category = document.getElementById('category').value;

  if (!text) return;

  tasks.push({ text, dueDate, category, completed: false });
  saveTasks();
  renderTasks();

  e.target.reset();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function filterTasks(type) {
  renderTasks(type);
}

document.getElementById('taskForm').addEventListener('submit', addTask);
renderTasks();
