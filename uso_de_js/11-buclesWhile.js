const ciudadesDisponibles = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao'];
const precioPasaje = [200,300,100,400];
const presupuesto = 210;
let i = 0;

while (precioPasaje[i] > presupuesto && i < ciudadesDisponibles.length) {
    i++;
}
if (i == ciudadesDisponibles.length) {
    console.log('No hay ciudades disponibles');
} else {
    console.log(`La ciudad disponible es ${ciudadesDisponibles[i]}`);
}