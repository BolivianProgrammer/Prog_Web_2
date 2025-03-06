function numMasRepetido(arr) {
    const frecuencia = {};
    let cuentaNum = 0;
    let masFrecuente;

    for (let num of arr) {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
        if (frecuencia[num] > cuentaNum) {
            cuentaNum = frecuencia[num];
            masFrecuente = num;
        }
    }

    return masFrecuente;
}

const numeros = [1, 3, 2, 3, 4, 3, 5, 1, 2, 2, 2, 3, 3, 2];
console.log(numMasRepetido(numeros)); 