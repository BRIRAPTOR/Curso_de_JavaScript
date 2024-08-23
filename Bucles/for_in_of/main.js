let animales = ["gato", "perro", "tiranosaurio rex"];

for (let animal in animales) {
document.write(animales[animal] + "<br>");
}
document.write("<br>")
for (let animal of animales) {
    document.write(animal + "<br>");
}