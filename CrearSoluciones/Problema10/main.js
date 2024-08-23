let materias = {
    "fisica": [85, 7, 4, "fisica"],
    "matematicas": [92, 8, 4, "matematicas"],
    "logica": [88, 6, 4, "logica"],
    "quimica": [76, 7, 3, "quimica"],
    "calculo": [83, 7, 4, "calculo"],
    "programacion": [91, 9, 4, "programacion"],
    "biologia": [78, 7, 3, "biologia"],
    "bbdd": [86, 6, 4, "bbdd"],
    "algebra": [80, 7, 4, "algebra"]
};

const asistencia = () => {
    for (let materiakey in materias) {
        let asistencias = materias[materiakey][0];
        let promedio = materias[materiakey][0];
        let trabajos = materias[materiakey][0];

        console.log(materias[materiakey][3]);
        if (asistencias >= 90) {
            console.log("%cAsistencias en orden", "color: green")
        } else {
            console.log("%cFalta de asistencias", "color: red")
        }
        if (promedio >= 7) {
            console.log("%cPromedio en orden", "color: green")
        } else {
            console.log("%cPromedio desaprobado", "color: red")
        }
        if (trabajos >= 3) {
            console.log("%cTrabajos prácticos en orden", "color: green")
        } else {
            console.log("%cTrabajos prácticos desaprobado", "color: red")
        }
    }
}
asistencia()