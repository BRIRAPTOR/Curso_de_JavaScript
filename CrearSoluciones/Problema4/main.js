const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert("¿Qué operacion quieres realizar");
let operacion = prompt("1: Sumar, 2; Restar, 3:Multiplicar, 4:Dividir");
if (operacion == 1) {
    let numero1 = prompt("Dame el primer número");
    let numero2 = prompt("Dame el segundo número");
    document.write(sumar(numero1, numero2));
} else if (operacion == 2) {
    let numero1 = prompt("Dame el primer número");
    let numero2 = prompt("Dame el segundo número");
    document.write(restar(numero1, numero2));
} else if (operacion == 3) {
    let numero1 = prompt("Dame el primer número");
    let numero2 = prompt("Dame el segundo número");
    document.write(multiplicar(numero1, numero2));
} else if (operacion == 4) {
    let numero1 = prompt("Dame el primer número");
    let numero2 = prompt("Dame el segundo número");
    document.write(dividir(numero1, numero2));
} else {
    alert("No se encontró la operación")
}
