//PUNTO 3
let texto =
  "Presione Aceptar si quiere seguir agregando palabras o  Cancelar si no.";
do {
  let palabra = prompt("Ingrese una plabra:");
  document.write(`${palabra}-`);
} while (confirm(texto));
