const btnTachar = document.querySelector('[data-toggle]')
    const tacharUltimo = (evento) => {
        const list = document.querySelector('[data-taskList]');
        const tasks = list.querySelectorAll('li');
        if (tasks.length > 0) {
            const lastTask = tasks[tasks.length - 1];
            lastTask.classList.toggle('tachado');
        }
    }
