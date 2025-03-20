const Form = (() => 
    {
        //Recuperando datos del formulario
        const form = document.querySelector('[data-form]');
        const inputTask = document.querySelector('[data-input-task]');
        const inputDescription = document.querySelector('[data-input-descripcion]');
        const inputDate = document.querySelector('[data-input-fecha]');
        const inputPrioridad = document.querySelector('[data-input-prioridad]');
        //Guardo los datos como objetos
        const datosForm = () => 
        {
            return {
                tarea: inputTask.value.trim(),
                descripcion: inputDescription.value.trim(),
                fecha: inputDate.value.trim(),
                prioridad: inputPrioridad.value.trim()
            }
        }
        const deleteForm = () => 
        {
            inputTask.value = '';
            inputDescription.value = '';
            inputDate.value = '';
            inputPrioridad.value = '';
        }
        const setDatos = (callback) => 
        {
            form.addEventListener('submit', (e) => 
            {
                e.preventDefault();
                callback(datosForm());
                deleteForm();
            })
        }
        return {
            setDatos,
            deleteForm,
            datosForm
        }
    })();
export default Form;
