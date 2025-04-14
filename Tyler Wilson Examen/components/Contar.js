btnContar = document.querySelector('[data-count]')
    const contarItems = (evento) => {
        const outputElement = document.querySelector('#output');
        let counter = parseInt(outputElement.textContent) || 0;
        counter++;
        outputElement.textContent = counter;
    }
    