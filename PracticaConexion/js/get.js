// API endpoint
const API_URL = 'http://localhost:5500/posts';

// Function to get tasks from API and display them
function getData() {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      console.log('Data from API:', data);
      displayTasks(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Function to display tasks in the table
function displayTasks(tasks) {
  const tableBody = document.getElementById('taskTableBody');
  tableBody.innerHTML = '';
  
  tasks.forEach(task => {
    const row = document.createElement('tr');
    
    // Title cell
    const titleCell = document.createElement('td');
    titleCell.textContent = task.titulo || 'Sin título';
    
    // Actions cell
    const actionsCell = document.createElement('td');
    
    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.onclick = () => editTask(task.id);
    
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = () => deleteTask(task.id);
    
    // Add buttons to actions cell
    actionsCell.appendChild(editBtn);
    actionsCell.appendChild(deleteBtn);
    
    // Add cells to row
    row.appendChild(titleCell);
    row.appendChild(actionsCell);
    
    // Add row to table
    tableBody.appendChild(row);
  });
}
