// API endpoint
const API_URL = 'http://localhost:5500/posts';

// Function to delete a task
function deleteTask(id) {
  console.log('deleteTask function called with ID:', id);
  
  if (confirm('¿Estás seguro de eliminar esta tarea?')) {
    console.log('Delete confirmed for task ID:', id);
    
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      console.log('DELETE Response status:', response.status);
      if (!response.ok) {
        throw new Error('Failed to delete task with ID: ' + id);
      }
      console.log('Task deleted successfully');
      getData(); // Refresh the table
    })
    .catch(error => {
      console.error('Error deleting task:', error);
      alert('Error al eliminar tarea: ' + error.message);
    });
  } else {
    console.log('Delete cancelled by user');
  }
}