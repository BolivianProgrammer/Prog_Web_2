const datos = [
    {
        "materia" : "Programación",
        "calificacion" : 70
    }
    ,
    {
        "materia" : "Matemáticas",
        "calificacion" : 80
    }
    ,
    {
        "materia" : "Historia",
        "calificacion" : 90
    }
    ,
    {
        "materia" : "Geografía",
        "calificacion" : 100
    }
    ,
    {
        "materia" : "Ciencias",
        "calificacion" : 110
    },
    {
        "materia" : "Arte",
        "calificacion" : 120
    },
    {
        "materia" : "Educación Física",
        "calificacion" : 130
    },
    {
        "materia" : "Inglés",
        "calificacion" : 140
    }
];

const procesarDatos = datos => 
{
    return datos
        .filter(datos => datos.calificacion >= 51)
        .map(datos => {
            const { materia } = datos;
            return materia.length > 5 ? materia.toUpperCase() : materia.toLowerCase();
        })
}
const resultado = procesarDatos(datos);
console.log(resultado);