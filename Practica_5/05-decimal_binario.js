function decimalABinario(decimal) {
    if (decimal === 0) return '0';
    let binario = '';
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }
    return binario;
}

const numeroDecimal = 15;
const numeroBinario = decimalABinario(numeroDecimal);
console.log(`Decimal: ${numeroDecimal} -> Binary: ${numeroBinario}`);