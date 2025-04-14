const API_URL = 'http://localhost:3001/tasks';
document.addEventListener('DOMContentLoaded', () => {
    const getBtn = document.getElementById('getBtn');
    getBtn.addEventListener('click', getAllTasks);
    getAllTasks();
});
function getAllTasks() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayTasks(data);
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
            alert('Error fetching tasks. Check console for details.');
        });
}

function displayTasks(tasks) {
    const taskTableBody = document.getElementById('taskTableBody');
    taskTableBody.innerHTML = '';
    
    if (!tasks || tasks.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="4">No tasks found</td>';
        taskTableBody.appendChild(row);
        return;
    }
    
    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.setAttribute('data-id', task.id);
        
        row.innerHTML = `
            <td>${task.id}</td>
            <td class="task-name">${task.name}</td>
            <td>${task.value}</td>
            <td>
                <button class="action-btn edit-btn" onclick="selectTaskForEdit(${task.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </td>
        `;
        
        taskTableBody.appendChild(row);
    });
}