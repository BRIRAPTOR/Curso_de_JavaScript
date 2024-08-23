let cadena = "Cadena de prueba";
let cadena2 = " cadena 2";
let resultado = cadena.concat(cadena2);
document.write(resultado + "<br>");

cadena = "Cadena de prueba";
cadena2 = "Cadena";
resultado = cadena.startsWith(cadena2);
//resultado = cadena.endsWith(cadena2);
document.write(resultado + "<br>");

cadena = "Cadena de prueba";
cadena2 = "Cadena";
resultado = cadena.includes(cadena2);
document.write(resultado + "<br>");

cadena = "Pedro es un estupido tarado inmaduro";
cadena2 = "tarado";
resultado = cadena.indexOf(cadena2);
document.write(resultado + "<br>");

cadena = "abc";
resultado = cadena.padStart(10, "a");
document.write(resultado + "<br>");

cadena = "abc";
resultado = cadena.padEnd(10, "a");
document.write(resultado + "<br>");

cadena = "abc";
resultado = cadena.repeat(5);
document.write(resultado + "<br>");

cadena = "Hola como estas hoy";
resultado = cadena.split("como");
document.write(resultado + "<br>");

cadena = "Hola como estas hoy";
resultado = cadena.substring(0, 6);
document.write(resultado + "<br>");

cadena = "HOLA BRIAN HAZEL";
resultado = cadena.toLowerCase();
document.write(resultado + "<br>");

cadena = "Hola como estas hoy";
resultado = cadena.toUpperCase();
document.write(resultado + "<br>");

cadena = ["Brian", "Hazel", "Hoyo", "Calixto"];
resultado = cadena.toString();
document.write(resultado + "<br>");

cadena = "            Hola como estas hoy                ";
resultado = cadena.trim();
document.write(resultado.length + "<br>");