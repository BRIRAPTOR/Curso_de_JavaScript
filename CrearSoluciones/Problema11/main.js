let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajos prácticos";
let homework = "30 minutos de cosas de la casa";
let descanso = "400 minutos de descanso";
console.log("Tareas");
for (let i = 0; i < 14; i++) {
    console.group("Dia " + (i + 1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
}
