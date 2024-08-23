let free = false;
const validarCliente = (time)=> {
    let edad = prompt("¿Cuál es tu edad?: ");
    if (edad >= 18) {
if(time > 2 && time < 7 && !free) {
    alert("Puedes pasar gratis por que eres la primer persona después de las 2AM");
    free = true;
}else {
    alert(`Son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`);
}
    } else {
        alert("Mira papu sos menor de edad por Ende no vas a pasar, MAQUINOLA");
    }
}
validarCliente(23);
validarCliente(24);
validarCliente(.2);
validarCliente(.5);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
