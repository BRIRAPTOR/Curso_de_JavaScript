const container = document.querySelector(".container");
const item = document.createElement("LI");
//document.write(item);
console.log(item);
const textoDelItem = document.createTextNode("TEXTO DEL NODO HIJO");
item.appendChild(textoDelItem);
container.appendChild(item);

const fragmento = document.createDocumentFragment();
for (let i = 0; i <= 10; i++) {
    const item1 = document.createElement("LI");
    item1.innerHTML = "Hola " + i;
    fragmento.appendChild(item1);
}
container.appendChild(fragmento);