// PUNTO 1
let edad = parseInt(prompt("¿Que edad tienes?"));
if (isNaN(edad) || edad <= 4) {
  alert("No es un numero valido");
} else if (edad >= 18) {
  alert("Ya puedes conducir");
} else {
  alert("No puedes conducir");
}
