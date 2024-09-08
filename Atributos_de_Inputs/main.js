const input1 = document.getElementById("input1");
//document.write(input1.className);
document.write(input1.value + "<br>");
input1.type = "number";
const input2 = document.getElementById("input2");
input2.minLength = 5;
input2.placeholder = "Hola escribeme"
input2.required = true;
const h1 = document.querySelector(".titulo");
h1.style.color = "#32b";
h1.classList.add("grande");
h1.classList.remove("chico");
let valor = h1.classList.item(1);
document.write(valor + "<br>");
valor = h1.classList.contains("grande");
document.write(valor);
console.log(h1.classList)
h1.classList.toggle("circular");
