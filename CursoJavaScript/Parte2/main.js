let frutas = ["banana", "manzana", "pera"];
//document.write(frutas[2])

//Array asociativos (OBJETOS)
let pc = {
    nombre: "BrianPC",
    Procesador: "Intel Core I7 12700k",
    ram: "32GB",
    espacio: "4TB"
}
let nombre = pc["nombre"];
let procesador = pc["Procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];
let frase = `El nombre de mi pc es: <b>${nombre}</b> <br>
    El procesador mi pc es: <b>${procesador}</b><br>
    La memoria ram es <b>${ram}</b><br>
    El espacio de almacenamiento es <b>${espacio}</b>`;
document.write(frase);