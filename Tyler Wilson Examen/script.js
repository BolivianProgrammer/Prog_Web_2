(() => {
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

    const fillTask = (evento) => {
        const target = evento.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('relleno');
        }
    }
    const btnTachar = document.querySelector('[data-toggle]')
    const tacharUltimo = (evento) => {
        const list = document.querySelector('[data-taskList]');
        const tasks = list.querySelectorAll('li');
        if (tasks.length > 0) {
            const lastTask = tasks[tasks.length - 1];
            lastTask.classList.toggle('tachado');
        }
    }
    btnContar = document.querySelector('[data-count]')
    const contarItems = (evento) => {
        const outputElement = document.querySelector('#output');
        let counter = parseInt(outputElement.textContent) || 0;
        counter++;
        outputElement.textContent = counter;
    }

    const eliminarTarea = (event) => {
        if (event.target.tagName === 'LI') {
            event.target.remove();
        }
    }

    btn.addEventListener('click', createTask)
    btnTachar.addEventListener('click', tacharUltimo)
    btnContar.addEventListener('click', contarItems)
    document.querySelector('[data-taskList]').addEventListener('click', fillTask)
    document.querySelector('[data-taskList]').addEventListener('dblclick', eliminarTarea)
})();