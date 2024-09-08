const titulo = document.querySelector('.titulo');
let resultado1 = titulo.textContent;
let resultado2 = titulo.innerHTML;
let resultado3 = titulo.outerHTML;
//innerText devuelve el texto visible de un nodo pero ya no se usa y
//textContent muestra todo el texto
alert(resultado1);
alert(resultado2);
alert(resultado3);