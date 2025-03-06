function arrayInverso(arr) {
    let arrayInvertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrayInvertido.push(arr[i]);
    }
    return arrayInvertido;
}
const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = arrayInverso(numeros);
console.log(numerosInvertidos); 