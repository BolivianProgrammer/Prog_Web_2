// API endpoint
const API_URL = 'http://localhost:5500/posts';

// Function to edit a task
function editTask(id) {
  console.log('editTask function called with ID:', id);
  
  // Get the current task
  fetch(`${API_URL}/${id}`)
    .then(response => {
      console.log('GET Response status for edit:', response.status);
      if (!response.ok) {
        throw new Error('Failed to fetch task with ID: ' + id);
      }
      return response.json();
    })
    .then(task => {
      console.log('Task to edit:', task);
      
      // Prompt for new title
      const newTitle = prompt('Editar título:', task.titulo);
      console.log('New title:', newTitle);
      
      if (newTitle !== null) {
        // Create updated task - keep all original properties
        const updatedTask = {
          ...task,
          titulo: newTitle
        };
        console.log('Updated task to be sent:', updatedTask);
        
        // Send PUT request to update the task
        return fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedTask)
        });
      } else {
        console.log('Edit cancelled by user');
        return null;
      }
    })
    .then(response => {
      if (response) {
        console.log('PUT Response status:', response.status);
        if (!response.ok) {
          throw new Error('Failed to update task');
        }
        return response.json();
      }
      return null;
    })
    .then(data => {
      if (data) {
        console.log('Task updated successfully:', data);
        getData();
      }
    })
    .catch(error => {
      console.error('Error editing task:', error);
      alert('Error al editar tarea: ' + error.message);
    });
}