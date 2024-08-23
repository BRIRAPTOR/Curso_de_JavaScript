/*
let numero = 0;

if (numero < 10) {
    numero++;
document.write(numero);
}


numero = 0;
while (numero < 100000) {
    numero++;
    document.write(numero + "<br>");
    if (numero == 10) {
        break;
    }
}
document.write("fin")

 */

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    document.write(i + "<br>")
}
document.write("<br>")
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br>")
}