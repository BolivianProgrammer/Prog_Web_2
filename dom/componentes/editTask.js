const editTask = () => 
    {
        const i = document.createElement('i')
        i.classList.add("fa", "fa-edit", "icon")
        i.addEventListener('click', edit)
        return i;
    }

const edit = (evento) =>
{
    const element = evento.target
    const parent = element.parentElement
    const task = parent.querySelector('.task')
    const value = task.innerText
    task.innerHTML = `<input type="text" value="${value}">`
    task.addEventListener('keydown', (evento) => {
        if (evento.key === 'Enter') {
            task.innerHTML = evento.target.value
        }
    })
}


export default editTask;