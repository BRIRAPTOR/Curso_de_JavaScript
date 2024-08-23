let materias = {
    "fisica": ["Perez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
    "programacion": ["Dalto", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
    "logica": ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
    "quimica": ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"]
}
const inscribir = (alumno, materia) => {
    if (materias[materia]) {

        let personas = materias[materia];
        personas.shift();
        let alumnos = personas;
        if (alumnos.length >= 20) {
            document.write(`Lo siento ${alumno} las clases de ${materia} ya están llenas`);
        } else if (materia == "fisica") {
            alumnos.push(alumno);
            materias = {
                "fisica": alumnos,
                "programacion": materias["programacion"],
                "logica": materias["logica"],
                "quimica": materias["quimica"]
            }
            document.write(materias["fisica"]);
        } else if (materia == "programacion") {
            alumnos.push(alumno);
            materias = {
                "fisica": materias["fisica"],
                "programacion": alumnos,
                "logica": materias["logica"],
                "quimica": materias["quimica"]
            }
            document.write(materias["programacion"]);
        } else if (materia == "logica") {
            alumnos.push(alumno);
            materias = {
                "fisica": materias["fisica"],
                "programacion": materias["programacion"],
                "logica": alumnos,
                "quimica": materias["quimica"]
            }
            document.write(materias["logica"]);
        } else if (materia == "quimica") {
            alumnos.push(alumno);
            materias = {
                "fisica": materias["fisica"],
                "programacion": materias["programacion"],
                "logica": materias["logica"],
                "quimica": alumnos
            }
            document.write(materias["quimica"]);
        }
        document.write(`<br>Felicidades ${alumno} te has inscrito a ${materia} correctamente`)
    } else {
        document.write("No se encontró la clase")
    }
}
document.write(materias["fisica"] + "<br>");
inscribir("pedrito", "fisica");
