const table = (() => {
    const cuerpoTabla = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    
    if (!cuerpoTabla) {
        console.error('Table body element not found');
        return {
            addTask: () => {},
            getTask: () => [],
            getCompletedTasks: () => []
        };
    }
    
    const addTask = (task) => {
        const nuevaFila = cuerpoTabla.insertRow(0);
        
        nuevaFila.insertCell(0).textContent = task.tarea;
        nuevaFila.insertCell(1).textContent = task.descripcion;
        nuevaFila.insertCell(2).textContent = task.fecha;
        nuevaFila.insertCell(3).textContent = task.prioridad;
        
        const accionCell = nuevaFila.insertCell(4);
        const accions = document.createElement('div');
        accions.className = 'actions';
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completar';
        completeButton.className = 'view';
        completeButton.addEventListener('click', () => {
            if (!nuevaFila.classList.contains('completed')) {
                nuevaFila.classList.add('completed');
                
                const taskData = {
                    tarea: nuevaFila.cells[0].textContent,
                    descripcion: nuevaFila.cells[1].textContent,
                    fecha: nuevaFila.cells[2].textContent,
                    prioridad: nuevaFila.cells[3].textContent,
                    completed: true
                };
                
                document.dispatchEvent(new CustomEvent('taskCompleted', {
                    detail: taskData
                }));
            }
        });
        accions.appendChild(completeButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            const taskData = {
                tarea: nuevaFila.cells[0].textContent,
                descripcion: nuevaFila.cells[1].textContent,
                fecha: nuevaFila.cells[2].textContent,
                prioridad: nuevaFila.cells[3].textContent,
                completed: nuevaFila.classList.contains('completed')
            };
            
            cuerpoTabla.deleteRow(nuevaFila.rowIndex - 1);
            
            document.dispatchEvent(new CustomEvent('taskDeleted', {
                detail: taskData
            }));
        });
        accions.appendChild(deleteButton);
        accionCell.appendChild(accions);
    };
    
    const getTask = () => {
        return Array.from(cuerpoTabla.rows).map(row => ({
            tarea: row.cells[0].textContent,
            descripcion: row.cells[1].textContent,
            fecha: row.cells[2].textContent,
            prioridad: row.cells[3].textContent,
            completed: row.classList.contains('completed')
        }));
    };
    
    const getCompletedTasks = () => {
        return Array.from(cuerpoTabla.rows)
            .filter(row => row.classList.contains('completed'))
            .map(row => ({
                tarea: row.cells[0].textContent,
                descripcion: row.cells[1].textContent,
                fecha: row.cells[2].textContent,
                prioridad: row.cells[3].textContent,
                completed: true
            }));
    };
    
    return {
        addTask,
        getTask,
        getCompletedTasks
    };
})();

export default table;