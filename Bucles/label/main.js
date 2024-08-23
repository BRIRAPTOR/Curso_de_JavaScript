let array1 = ["maria", "jose", "roberta"];
let array2 = ["pedro", "marcelo", array1, "josefina"];
forgrande:
for (let array in array2) {
if (array == 2) {

  for (let array of array1) {
      document.write(array + "<br>");
      break forgrande;
  }
} else  {
    document.write(array2[array] + "<br>");
}
}
document.write("<br>");
forgrande:
    for (let array in array2) {
        if (array == 2) {

            for (let array of array1) {
                continue forgrande;
                document.write(array + "<br>");
            }
        } else  {
            document.write(array2[array] + "<br>");
        }
    }