const numeros = [1, 2, 3, 4, 5];
function sumArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

console.log(sumArray(numeros));