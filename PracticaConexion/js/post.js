// API endpoint
const API_URL = 'http://localhost:5500/posts';

// Simple function to add a task with basic debugging
function postData() {
  console.log('postData function called');
  
  // Get values from inputs
  const titulo = document.getElementById('titulo-input').value;
  const descripcion = document.getElementById('descripcion-input').value;
  const nombre = document.getElementById('nombre-input').value;
  const valorEntero = document.getElementById('valorEntero-input').value;
  
  console.log('Input values:', { titulo, descripcion, nombre, valorEntero });
  
  // Create task object
  const newTask = {
    titulo: titulo,
    descripcion: descripcion,
    nombre: nombre,
    valorEntero: valorEntero
  };
  
  console.log('Task to add:', newTask);
  
  // Send POST request
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  })
  .then(response => {
    console.log('Response status:', response.status);
    if (!response.ok) {
      console.error('Server error:', response.status);
      return;
    }
    return response.json();
  })
  .then(data => {
    if (data) {
      console.log('Task added:', data);
    }
    
    // Clear input fields
    document.getElementById('titulo-input').value = '';
    document.getElementById('descripcion-input').value = '';
    document.getElementById('nombre-input').value = '';
    document.getElementById('valorEntero-input').value = '';
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

// Add a test function to check if the post.js file is loaded correctly
console.log('post.js loaded successfully');