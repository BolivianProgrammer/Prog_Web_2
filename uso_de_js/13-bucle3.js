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

let materialSeleccionada = '';
const notaAprobacion = 51;
for (let i = 0; i < datos.length && notaAprobacion; i++) {
    if (datos[i].calificacion <= notaAprobacion) {
        materialSeleccionada = datos[i].materia;
    }
} 
if (materialSeleccionada == '') {
    console.log('No hay materias aprobadas');
} else {
    console.log(`La materia aprobada es ${materialSeleccionada}`);
}