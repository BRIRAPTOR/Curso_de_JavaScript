class Calculadora {
    constructor() {

    }

    sumar = (num1, num2) => {
        return parseInt(num1) + parseInt(num2);
    }

    restar = (num1, num2) => {
        return parseInt(num1) - parseInt(num2);
    }

    multiplicar = (num1, num2) => {
        return parseInt(num1) * parseInt(num2);
    }

    dividir = (num1, num2) => {
        return parseInt(num1) / parseInt(num2);
    }
    potencia = (num, exp) => {
        return parseInt(num) ** parseInt(exp);
    }
    raizCuadrada = (num) => {
        return Math.sqrt(num);
    }
    raizCubica = (num) => {
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();
alert("¿Qué operación quieres realizar");
let operacion = prompt("1: Sumar, 2; Restar, 3:Multiplicar, 4:Dividir, 5:Potenciación 6:Raíz Cuadrada, 7:Raíz Cubica");

if (operacion == "1") {
    let numero1 = prompt("Dame el primer número");
    let numero2 = prompt("Dame el segundo número");
    document.write(calculadora.sumar(numero1, numero2));
} else if (operacion == "2") {
    let numero1 = prompt("Dame el primer número");
    let numero2 = prompt("Dame el segundo número");
    document.write(calculadora.restar(numero1, numero2));
} else if (operacion == "3") {
    let numero1 = prompt("Dame el primer número");
    let numero2 = prompt("Dame el segundo número");
    document.write(calculadora.multiplicar(numero1, numero2));
} else if (operacion == "4") {
    let numero1 = prompt("Dame el primer número");
    let numero2 = prompt("Dame el segundo número");
    document.write(calculadora.dividir(numero1, numero2));
} else if (operacion == "5") {
    let numero1 = prompt("Dame el primer número");
    let exponente = prompt("Dame el exponente");
    document.write(calculadora.potencia(numero1, exponente));
} else if (operacion == "6") {
    let numero1 = prompt("Dame el número");
    document.write(calculadora.raizCuadrada(numero1));
} else if (operacion == "7") {
    let numero1 = prompt("Dame el número");
    document.write(calculadora.raizCubica(numero1));
} else {
    alert("No se encontró la operación")
}
