const btn = document.querySelector('[data-button]')
    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-input]')
        const value = input.value
        const list = document.querySelector('[data-taskList]')
        const tarea = document.createElement('li')
        tarea.textContent = value
        input.value = ''
        list.appendChild(tarea)
    }