import checkComplete from './componentes/checkComplete.js';
import deleteIcon from './componentes/deleteIcon.js';
import editTask from './componentes/editTask.js';

(() => {
const btn = document.querySelector('[data-form-btn]');


const createTask = (evento) => 
    {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
        const contTask = document.createElement('div');
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        contTask.appendChild(checkComplete());
        contTask.appendChild(titleTask);
        const content = `<i class = "fas fa-trash-alt trashIcon icon"></i>`
        task.appendChild(contTask)
        task.appendChild(editTask())
        task.appendChild(deleteIcon())
        list.appendChild(task);
    }

btn.addEventListener('click', createTask);
})();