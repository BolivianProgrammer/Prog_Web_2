const numeros = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
];

function sumArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i].value;
    }
    return suma;
}

console.log(sumArray(numeros));