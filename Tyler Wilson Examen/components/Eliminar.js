const eliminarTarea = (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
}
