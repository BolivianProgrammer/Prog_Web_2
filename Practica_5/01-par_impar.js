function paresImpares(numbers) {
    let pares = 0;
    let impares = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares: pares, impares: impares };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = paresImpares(numbers);
console.log(result);