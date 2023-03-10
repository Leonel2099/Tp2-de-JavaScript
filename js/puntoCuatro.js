//PUNTO4
let texto ="Presione Aceptar si quiere seguir agregando numeros o  Cancelar si no.";
let total = 0;
do {
  let numero = parseInt(prompt("Ingrese un numero:"));
  while (isNaN(numero)) {
    alert("No se ingreso ningun numero");
    numero = parseInt(prompt("Ingrese un numero:"));
  }
  total += numero;
} while (confirm(texto));
document.write(`Suma total de numeros: ${total}`);