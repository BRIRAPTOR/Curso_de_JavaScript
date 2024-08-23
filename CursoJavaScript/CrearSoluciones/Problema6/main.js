class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("App Iniciada.");
        }
    }

    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("App cerrada.");
        }
    }

    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("App instalada correctamente.");
        }
    }

    desinstalar() {
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desinstalada correctamente.");
        }
    }

    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>`;
    }
}

const app = new App("16,000", "5 Estrellas", "900MB");
const app2 = new App("10,000", "4.5 Estrellas", "700MB");
const app3 = new App("25,000", "4 Estrellas", "1GB");
const app4 = new App("8,000", "3.5 Estrellas", "500MB");
const app5 = new App("30,000", "5 Estrellas", "1.2GB");
const app6 = new App("12,000", "4 Estrellas", "850MB");
const app7 = new App("50,000", "4.8 Estrellas", "1.5GB");
app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();
document.write(app.appInfo());
document.write(app2.appInfo());
document.write(app3.appInfo());
document.write(app4.appInfo());
document.write(app5.appInfo());
document.write(app6.appInfo());
document.write(app7.appInfo());