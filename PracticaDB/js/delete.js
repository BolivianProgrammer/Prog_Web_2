document.addEventListener('DOMContentLoaded', () => {
    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.addEventListener('click', promptDeleteTask);
    window.deleteTask = deleteTask;
});

function promptDeleteTask() {
    const taskId = prompt("Enter the ID of the task you want to delete:");
    if (taskId === null) return;
    const id = parseInt(taskId);
    if (isNaN(id)) {
        alert("Please enter a valid task ID");
        return;
    }
    deleteTask(id);
}

function deleteTask(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`Task with ID ${id} not found.`);
            }
            throw new Error('Network response was not ok');
        }
        console.log('Task deleted successfully');
        getAllTasks();
        alert('Task deleted successfully!');
    })
    .catch(error => {
        console.error('Error deleting task:', error);
        alert(`Error deleting task: ${error.message}`);
    });
}