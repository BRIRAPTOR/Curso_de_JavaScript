const container = document.querySelector('.container');
const parrafo = document.createElement("P");
parrafo.innerHTML = "Párrafo lorem"
const h2 = document.createElement("H2");
h2.innerHTML = "Titulo nuevo";
const h2_antiguo = document.querySelector(".h2");
container.replaceChild(h2, h2_antiguo);
container.appendChild(parrafo);
container.removeChild(parrafo);

let respuesta = container.hasChildNodes();
console.log(respuesta);
console.log(h2.parentElement);
console.log(h2.previousElementSibling);
console.log(h2.nextElementSibling);

const div = document.querySelector(".div-3");
//busca el ascendente más cercano son el selector que le indique
console.log(div.closest(".div"));