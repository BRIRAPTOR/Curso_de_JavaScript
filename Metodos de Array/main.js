let nombres = ["Pedro", "Maria", "Jorge"];
document.write("Array original: " + nombres + "<br>");
document.write(nombres.pop() + "---.pop()<br>");
document.write(nombres + "<br>");

nombres = ["Pedro", "Maria", "Jorge"];
document.write("Array original: " + nombres + "<br>");
document.write(nombres.shift() + "---.shift()<br>");
document.write(nombres + "<br>");

nombres = ["Pedro", "Maria", "Jorge"];
document.write("Array original: " + nombres + "<br>");
document.write(nombres.push("Juansito", "robert") + "---.push()<br>");
document.write(nombres + "<br>");

let numeros = [1, 2, 3, 4, 5];
document.write(numeros + "<br>");
document.write(numeros.reverse() + "<br>");

nombres = ["Pedro", "Maria", "Jorge"];
document.write("Array original: " + nombres + "<br>");
document.write(nombres.unshift("Alex") + "---.shift()<br>");
document.write(nombres + "<br>");

let nums = [6, 45, 67, 88, 8, 89, 75, 3, 2, 1, 5, 7, 8, 9, 3, 3];
document.write("Sort " + nums + "<br>");
document.write(nums.sort() + "<br>");

nombres = ["Pedro", "Maria", "Jorge", "alan", "andrea"];
document.write("Array original: " + nombres + "<br>");
document.write(nombres.splice(1, 2, "Janice", "nicole") + "---.splice()<br>");
document.write(nombres + "<br>");

nombres = ["Pedro", "Maria", "Jorge", "alan", "andrea"];
document.write("Array original: " + nombres + "<br>Nombre: ");
document.write(nombres.join("<br> Nombre: "));

nombres = ["Pedro", "Maria", "Jorge", "alan", "andrea"];
document.write("<br>" + "Array original: " + nombres + "<br>");
resultado = nombres.slice(0, 3);
document.write(resultado + "---.slice()<br>");

/*nombres = ["Pedro", "Maria", "Jorge", "alan", "andrea"];
nombres.filter((numero) => {
    document.write(numero + "<br>");
})
 */
//recibe una funcion y puede ser flecha
nombres = ["Pedro", "Maria", "Jorge", "alan", "andrea"];
nombres.filter(numero => document.write(numero + "<br>"));

document.write("<br>" + "Array original: " + nombres + "<br>");
nombres = ["Pedro", "Mariano", "Jor", "alann", "andrea"];
resultado = nombres.filter(numero => numero.length <= 5);
document.write(resultado);
