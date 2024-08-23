class Celular {
    constructor(color, peso, tamano, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.Encendido = false;
    }

    presionarBotonEncendido() {
        if (this.Encendido == false) {
            alert("Encendido.");
            this.Encendido = true;
        } else {
            alert("Apagado.")
            this.Encendido = false;
        }
    }

    reiniciar() {
        if (this.Encendido == true) {
            alert("Reiniciado.");
        } else {
            alert("El celular está apagado.")
        }
    }

    tomarFoto() {
        alert(`Foto tomada en una resolución de: ${this.rdc}`);
    }

    grabarVideo() {
        alert(`Grabando video en una resolución de: ${this.rdc}`);
    }

    mostrarInfo() {
        return `Color: ${this.color}<br>
Peso: ${this.peso}<br>
Tamaño:${this.tamano}
Resolucion de camara: ${this.rdc}<br>
Resolucion de Pantalla: ${this.rdp}<br>
Memoria Ram: ${this.ram}<br>`;
    }

}

class CelularAltaGama extends Celular {
    constructor(color, peso, tamano, rdp, rdc, ram, rdce) {
        super(color, peso, tamano, rdp, rdc, ram);
        this.rdce = rdce;
    }

    grabarVideoLento() {
        alert("Estas grabando en camara lenta.")
    }

    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial.")
    }

    infoAltaGama() {
        return this.mostrarInfo() + `Resolucion de Camara Extra: ${this.rdce}<br>`;
    }
}

/*
const celular1 = new Celular("Rojo", "150", "5", "hd", "full hd", "2GB");
const celular2 = new Celular("Negro", "155", "5.4", "full hd", "full hd", "3GB");
const celular3 = new Celular("Blanco", "180", "5.9", "full hd", "full hd", "4GB");

 */

/*celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();

 */
const celular1 = new CelularAltaGama("Rojo", "130", "5.2", "2k", "2k", "6GB", "4k")
const celular2 = new CelularAltaGama("Negro", "142", "5.6", "2.5k", "2.5k", "8GB", "4k")

document.write(celular1.infoAltaGama() + "<br>");
document.write(celular2.infoAltaGama() + "<br>");
//document.write(celular3.mostrarInfo() + "<br>");