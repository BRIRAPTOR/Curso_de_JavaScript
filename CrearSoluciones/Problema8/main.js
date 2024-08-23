const obtenerInformacion = (materia) => {
    const materias = {
        "fisica": ["Perez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
        "programacion": ["Dalto", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
        "logica": ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
        "quimica": ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"]
    }
    if (materias[materia]) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}
const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);
    let profesor = informacion[0][0];
    informacion[0].shift();
    let alumnos = informacion[0];

    if (informacion) {
        document.write(`El profesor de: <b>${informacion[1]}</b> es: ${profesor}<br>Los alumnos son: <b style="color: blue">${alumnos}</b><br>`);
    }
}

const cantidadDeClases = (alumno) => {
    let materias = obtenerInformacion();
    let cantidadTotal = 0;
    let clasesPresentes = [];
    for (let materiasKey in materias) {
        if (materias[materiasKey].includes(alumno)) {
            cantidadTotal += 1;
            clasesPresentes.push(" " + materiasKey);
        }
    }
    return [cantidadTotal, clasesPresentes];
}
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");
let infoAlum = cantidadDeClases("Cofla");
document.write("<br>Cofla está inscrito en: <b>" + infoAlum[0] + " clases las cuales son " + infoAlum[1] + "</b><br>");