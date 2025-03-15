let edadPersonal = 17;
let conAcompanante = true;
const precioPasaje = 1000;
const ciudadeDestino = "Sucre";
const ciudadeDisponibles = ["La Paz", "Cochabamba", "Santa Cruz", "Sucre", "Tarija", "Potosi", "Oruro", "Beni", "Pando"];
if (precioPasaje === 1000) 
    {
        console.log("El precio del pasaje es de 1000 Bs.");
    }
console.log(`Verificando pasaje para ${ciudadeDestino}`);
if (ciudadeDisponibles.indexOf(ciudadeDestino) >-1 && (edadPersonal >= 18 || conAcompanante))
    {
        console.log(`El destino ${ciudadeDestino} esta disponible`);
    }
else
    {
        console.log(`El destino ${ciudadeDestino} no esta disponible`);
    }