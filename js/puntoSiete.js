//PUNTO 7
let numero = parseInt(prompt(`Ingrse un numero no mayor a 50`));
while (isNaN(numero) || numero <= 0 || numero > 50) {
  alert(`Numero fuera del rango 1-50 o lo que ingresaste no es un numero`);
  numero = parseInt(prompt(`Ingrse un numero no mayor a 50`));
}
while (numero >= 1) {
  let bandera = 0;
  while (bandera < numero) {
    bandera++;
    document.write(`${numero}`);
  }
  document.write(`<br>`);
  numero--;
}