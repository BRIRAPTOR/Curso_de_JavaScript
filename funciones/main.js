/*function saludar() {
    let respuesta = prompt("Hola Brian Hazel, ¿Cómo fue tu dia?");
    if (respuesta == "Bien") {
        alert("Me alegro.");
    } else {
        alert("Una pena.");
    }
}
saludar();
saludar();
let saludar2 = function() {
alert("hola")
}
saludar2();*/

function sumar(a, b) {
    let res = a + b;
document.write(res +"<br>")
}
sumar(2, 7);
function saludarPers(nombre) {
    return `Hola ${nombre} ¿Cómo estás?`;
}
document.write(saludarPers("Brian Hazel") + "<br>");
const salud = function(nombre) {
    return `Hola ${nombre} ¿Cómo estás?`;
}
document.write(salud("Andrea" ) + "<br>");
const Saludar = (nombre)=>{
    return `Hola ${nombre} ¿Cómo estás?`;
}
document.write(Saludar("Daria" ));