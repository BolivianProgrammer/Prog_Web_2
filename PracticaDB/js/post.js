document.addEventListener('DOMContentLoaded', () => {
    const postBtn = document.getElementById('postBtn');
    postBtn.addEventListener('click', addTask);
});

function addTask() {
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
    
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(tasks => {
            const maxId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
            const newTask = {
                id: maxId + 1, 
                name: taskName,
                value: parseInt(taskValue)
            };
        
            return fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask)
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(addedTask => {
            console.log('Task added successfully:', addedTask);
            document.getElementById('taskName').value = '';
            document.getElementById('taskValue').value = '';
            getAllTasks();
            alert('Task added successfully!');
        })
        .catch(error => {
            console.error('Error adding task:', error);
            alert('Error adding task. Check console for details.');
        });
}