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

const notaAprobacion = 51;
let i = 0
let materiaSeleccionada = '';
do {
    if (datos[i].calificacion >= notaAprobacion) {
        materiaSeleccionada = datos[i].materia;
        break;
    }
    i++;
} while (i < datos.length && materiaSeleccionada == '');
if (materiaSeleccionada == '') {
    console.log('No hay materias aprobadas');
} else {
    console.log(`La materia aprobada es ${materiaSeleccionada}`);
}