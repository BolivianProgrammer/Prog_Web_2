const fillTask = (evento) => {
    const target = evento.target;
    if (target.tagName === 'LI') {
        target.classList.toggle('relleno');
    }
}
