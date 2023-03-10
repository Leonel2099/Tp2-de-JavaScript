//PUNTO2
let nota = parseInt(prompt("Ingrse una nota del 0 al 10"));
while (nota < 0 || nota > 10 || isNaN(nota)) {
  alert("El numero esta fuera del rango 0-10 o no es un numero");
  nota = parseInt(prompt("Ingrese un numero valido"));
}
if (nota >= 0 && nota <= 2) {
    alert("Muy deficiente");
} else if (nota >= 3 && nota <= 4) {
    alert("Insuficiente");
} else if (nota >= 5 && nota <= 6) {
    alert("Suficiente");
} else if (nota === 7) {
    alert("Bien");
} else if (nota >= 8 && nota <= 9) {
    alert("Notable");
} else if (nota === 10) {
    alert("Sobresaliente");
}