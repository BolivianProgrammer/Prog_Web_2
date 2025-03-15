const ciudadesDisponibles = new Array("Santiago", "Bogota", "Lima", "Montevideo");

const paisesDisponibles = ["colombia", "chile", "peru", "panama"];
const cantidadCiudades = ciudadesDisponibles.length;
console.log(`En la lista de ciudades hay ${cantidadCiudades} ciudades`);
console.log(`En la lista existen ${paisesDisponibles.length} paises`);

ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades hay ${ciudadesDisponibles.length} ciudades`);

ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades hay ${ciudadesDisponibles.length} ciudades`);

console.log(ciudadesDisponibles.sort());

console.log(`En la lista existen ${paisesDisponibles.indexOf("peru")} paises`);

const listaPaisesCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesCiudades);