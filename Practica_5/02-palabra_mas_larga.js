function palabraLarga(str) {
    str = str.split(" ")
    return str.sort((a, b) => b.length - a.length)[0]
}

console.log(palabraLarga("Hola presi como estai todo bien")) 