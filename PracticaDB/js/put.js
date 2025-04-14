let selectedTaskId = null;

document.addEventListener('DOMContentLoaded', () => {
    const putBtn = document.getElementById('putBtn');
    putBtn.addEventListener('click', updateTask);
    window.selectTaskForEdit = selectTaskForEdit; 
});

function selectTaskForEdit(id) {
    console.log("Selecting task for edit:", id);
    fetch(`${API_URL}/${id}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(`Task with ID ${id} not found.`);
                }
                throw new Error('Failed to fetch task details.');
            }
            return response.json();
        })
        .then(task => {
            console.log("Task fetched for edit:", task);
            document.getElementById('taskName').value = task.name;
            document.getElementById('taskValue').value = task.value;
            
            selectedTaskId = task.id || id;
            
            document.getElementById('putBtn').textContent = `Update Task #${selectedTaskId}`;
            
            if (document.getElementById('taskIdDisplay')) {
                document.getElementById('taskIdDisplay').textContent = `Editing Task ID: ${selectedTaskId}`;
            }
        })
        .catch(error => {
            console.error('Error fetching task details:', error);
            alert('Error fetching task details: ' + error.message);
        });
}

function updateTask() {
    if (selectedTaskId === null) {
        alert('Please select a task to update first');
        return;
    }
    
    const taskName = document.getElementById('taskName').value.trim();
    const taskValue = document.getElementById('taskValue').value.trim();
    
    if (!taskName) {
        alert('Please enter a task name');
        return;
    }
    
    if (!taskValue || isNaN(parseInt(taskValue))) {
        alert('Please enter a valid integer for task value');
        return;
    }
    
    const updatedTask = {
        id: selectedTaskId, 
        name: taskName,
        value: parseInt(taskValue)
    };
    
    console.log(`Updating task with ID ${selectedTaskId}:`, updatedTask);
    
    fetch(`${API_URL}/${selectedTaskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(updatedTask => {
        console.log('Task updated successfully:', updatedTask);
        document.getElementById('taskName').value = '';
        document.getElementById('taskValue').value = '';
        document.getElementById('putBtn').textContent = 'Actualizar tarea';
        selectedTaskId = null;
        getAllTasks();
        alert('Task updated successfully!');
    })
    .catch(error => {
        console.error('Error updating task:', error);
        alert('Error updating task: ' + error.message);
    });
}