const checkComplete = () =>
    {
        const i = document.createElement('i')
        i.classList.add("far", "fa-check-square", "icon")
        i.addEventListener('click', color)
        return i;
    };

const color = (evento) => 
    {
        const element = evento.target
        if (element.classList.contains('completeIcon')) {
            element.classList.remove('completeIcon', 'fa');
            element.classList.add('far');
        } else {
            element.classList.add('completeIcon', 'fa');
            element.classList.remove('far');
        }
    };

export default checkComplete;