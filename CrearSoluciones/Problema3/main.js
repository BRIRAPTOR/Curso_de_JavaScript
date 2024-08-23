let cantidad = prompt("¿Cuántos alumnos son?");
let alumnos_totales = [];
for (let i = 0; i < cantidad; i++) {
    alumnos_totales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const tomarAsistencia = () => {
    for (let alumno in alumnos_totales) {
        let presencia = prompt(`¿El alumno ${alumnos_totales[alumno][0]} esta presente?`);
        if (presencia == "p" || presencia == "P") {
            alumnos_totales[alumno][1]++;
        }
    }
}
for (let i = 0; i < 30; i++) {
    tomarAsistencia();
}
document.write("<br>")
for (let i = 0; i < cantidad; i++) {
   let resultado =  `${alumnos_totales[i][0]}:<br>
________Precentes: ${alumnos_totales[i][1]}:<br>
________Aucentes: ${30 - alumnos_totales[i][1]}:<br>`;
if (30 - alumnos_totales[i][1] > 18) {
resultado += `<b style="color: red">Reprobado por inasistencias.</b>`;
    document.write(resultado);
} else {
    resultado += "<br><br>";
    document.write(resultado);
}
}
