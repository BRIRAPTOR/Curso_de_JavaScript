class Animal {
    constructor(especie, edad , color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años, mi color es ${this.color}`;
    }
    verInfo = ()=> {
        document.write(this.info + "<br>");
    }
}
let perro = new Animal("Perro", 5, "rojo");
//document.write(perro + "<br>");
//document.write(perro.color)
//document.write(perro.info + "<br>");
console.log(perro);

let gato = new Animal("Gato", 2, "negro");
//document.write(gato.info + "<br>");
let pajaro = new Animal("Pájaro", 1, "amarillo");
//document.write(pajaro.info + "<br>");
perro.verInfo();
gato.verInfo();
pajaro.verInfo();

// ------HERENCIA-------
class Perro extends Animal {
    constructor(especie, edad , color, raza) {
        super(especie, edad , color, raza);
        this.raza = raza;
    }
    static ladrar = ()=> {
        alert("Wauw")
    }
    ladrar1 = ()=> {
        alert("Wauw1")
    }
  /* modificarRaza(nom) {
this.raza = nom;
    }

   */
    set setRaza(new_nombre) {
        this.raza = new_nombre;
    }
    get getRaza() {
        return this.raza;
    }

}
const perrito = new Perro("Perrito", 5, "rojo", "Doberman");
perrito.verInfo();
perrito.ladrar1();
Perro.ladrar();// cuando es static el methods es de la clase y no lo pueden ocupar los objetos
// perrito.modificarRaza("pitbull");
perrito.setRaza = "Raza1";
document.write(perrito.getRaza)