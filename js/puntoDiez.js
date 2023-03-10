//PUNTO 10
const filas = parseInt(prompt(`Ingrse el numero de filas:`));
const columnas = parseInt(prompt(`Ingrse el numero de columnas:`));
document.write(`<table>`);
document.write(`<thead>`);
let item =filas*columnas;
for (let numerosFilas = 0; numerosFilas < filas; numerosFilas++) {
  document.write(`<tr>`);
  for (let numerosColumnas = 0; numerosColumnas < columnas; numerosColumnas++) {
    document.write(`<th>`);
      document.write(`${item--}`);
    document.write(`</th>`);
  }
  document.write(`</tr>`);
}
document.write(`</thead>`);
document.write(`</table>`);
