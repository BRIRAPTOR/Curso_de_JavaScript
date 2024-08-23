dineroColfa = prompt("¿Cuanto dinero tienes Cofla?: ")
dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?: ")
dineroPedro = prompt("¿Cuanto dinero tienes Pedro?: ")

dineroColfa = parseInt(dineroColfa);
if (dineroColfa >= 0.6 && dineroColfa < 1) {
    alert("Colfa; Comprate el helado de agua.");
    alert("y te sobran " + (dineroColfa - 0.6));
} else if (dineroColfa >= 1 && dineroColfa < 1.6) {
    alert("Colfa; Comprate el helado de crema.");
    alert("y te sobran " + (dineroColfa - 1));
} else if (dineroColfa >= 1.6 && dineroColfa < 1.7) {
    alert("Colfa; Comprate el heladix.");
    alert("y te sobran " + (dineroColfa - 1.6));
} else if (dineroColfa >= 1.7 && dineroColfa < 1.8) {
    alert("Colfa; Comprate el heladovich.");
    alert("y te sobran " + (dineroColfa - 1.7));
} else if (dineroColfa >= 1.8 && dineroColfa < 2.9) {
    alert("Colfa; Comprate el helardo.");
    alert("y te sobran " + (dineroColfa - 1.8));
} else if (dineroColfa >= 2.9) {
    alert("Colfa; Comprate el helado con confites o el bote de 1/4kg.");
    alert("y te sobran " + (dineroColfa - 2.9));
} else {
    alert("Lo siento Colfa,  pobre de mierda no te alcanza para ningún helado");
}
dineroRoberto = parseInt(dineroRoberto);
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto; Comprate el helado de agua.");
    alert("y te sobran " + (dineroRoberto - 0.6));
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto; Comprate el helado de crema.");
    alert("y te sobran " + (dineroRoberto - 1));
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto; Comprate el heladix.");
    alert("y te sobran " + (dineroRoberto - 1.6));
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto; Comprate el heladovich.");
    alert("y te sobran " + (dineroRoberto - 1.7));
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto; Comprate el helardo.");
    alert("y te sobran " + (dineroRoberto - 1.8));
} else if (dineroRoberto >= 2.9) {
    alert("Roberto; Comprate el helado con confites o el bote de 1/4kg.");
    alert("y te sobran " + (dineroRoberto - 2.9));
} else {
    alert("Lo siento Roberto, pobre de mierda no te alcanza para ningún helado");
}
dineroPedro = parseInt(dineroPedro);
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro; Comprate el helado de agua.");
    alert("y te sobran " + (dineroPedro - 0.6));
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro; Comprate el helado de crema.");
    alert("y te sobran " + (dineroPedro - 1));
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro; Comprate el heladix.");
    alert("y te sobran " + (dineroPedro - 1.6));
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro; Comprate el heladovich.");
    alert("y te sobran " + (dineroPedro - 1.7));
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro; Comprate el helardo.");
    alert("y te sobran " + (dineroPedro - 1.8));
} else if (dineroPedro >= 2.9) {
    alert("Pedro; Comprate el helado con confites o el bote de 1/4kg.");
    alert("y te sobran " + (dineroPedro - 2.9));
} else {
    alert("Lo siento Pedro, pobre de mierda no te alcanza para ningún helado");
}