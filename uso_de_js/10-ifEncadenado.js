const ciudadDestino = "Sucre";
const ciudadesDisponibles = ["La Paz", "Cochabamba", "Santa Cruz", "Sucre", "Tarija", "Potosi", "Oruro", "Beni", "Pando"];
let edadPasajero = 17;
let compania = false;

if (edadPasajero >= 18 || compania) 
    {
        if (ciudadDestino.indexOf(ciudadDestino) > -1)
            {
                console.log(`El destino ${ciudadDestino} esta disponible`);
            } 
        else 
        {
            console.log(`El destino ${ciudadDestino} no esta disponible`);
        }
    } else 
    {
        if (edadPasajero >= 16 && ciudadDestino == "Sucre") {
            console.log(`El destino ${ciudadDestino} esta disponible`);
        } else {
            console.log(`Pasajero no cumple las reglas`)
        }
    }