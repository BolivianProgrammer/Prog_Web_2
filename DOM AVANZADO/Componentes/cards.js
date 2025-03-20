import tabla from './tabla.js';

const cards = (() => {
    const taskCard = document.getElementById('taskCards');

    if (!taskCard) {
        console.error('The taskCard element is missing in the DOM.');
        return {
            addCard: () => {},
            removeCard: () => {},
            updateAllCards: () => {}
        };
    }

    const findCardByTask = (task) => {
        const cards = taskCard.querySelectorAll('.card');
        return Array.from(cards).find(card => {
            const taskName = card.querySelector('.task-name').textContent;
            const taskDesc = card.querySelector('.task-desc').textContent;
            return taskName === task.tarea && taskDesc === task.descripcion;
        });
    };

    const addCard = (task) => {
        if (!task.completed) return;
        
        const existingCard = findCardByTask(task);
        if (existingCard) return;
        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <p><strong>Nombre:</strong> <span class="task-name">${task.tarea}</span></p>
            <p><strong>Descripción:</strong> <span class="task-desc">${task.descripcion}</span></p>
            <p><strong>Fecha:</strong> ${task.fecha}</p>
            <p><strong>Prioridad:</strong> ${task.prioridad}</p>
            <p><strong>Estado:</strong> Completada</p>
        `;
        taskCard.appendChild(card);
    };
    
    const removeCard = (task) => {
        const cardToRemove = findCardByTask(task);
        if (cardToRemove) {
            taskCard.removeChild(cardToRemove);
        }
    };
    
    const updateAllCards = () => {
        const completedTasks = tabla.getCompletedTasks();
        
        
        taskCard.innerHTML = '';
        
        completedTasks.forEach(task => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <p><strong>Nombre:</strong> <span class="task-name">${task.tarea}</span></p>
                <p><strong>Descripción:</strong> <span class="task-desc">${task.descripcion}</span></p>
                <p><strong>Fecha:</strong> ${task.fecha}</p>
                <p><strong>Prioridad:</strong> ${task.prioridad}</p>
                <p><strong>Estado:</strong> Completada</p>
            `;
            taskCard.appendChild(card);
        });
    };

    document.addEventListener('taskCompleted', (event) => {
        const task = event.detail;
        addCard(task);
    });
    
    document.addEventListener('taskDeleted', (event) => {
        removeCard(event.detail);
    });

    return {
        addCard,
        removeCard,
        updateAllCards
    };
})();

export default cards;