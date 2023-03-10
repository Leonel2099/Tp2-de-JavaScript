//PUNTO 15
let palabra = prompt(`Ingresa una palabra`)
let contador = 0;
for(let indice = 0; indice < palabra.length ; indice++){
  if(palabra.charAt(indice) === 'a' || palabra.charAt(indice) === 'e' || palabra.charAt(indice) === 'i' || palabra.charAt(indice) === 'o' || palabra.charAt(indice) === 'u' || palabra.charAt(indice) === 'A' || palabra.charAt(indice) === 'E' || palabra.charAt(indice) === 'I' || palabra.charAt(indice) === 'O' || palabra.charAt(indice) === 'U'){
    contador++;
  }
}
document.write(`La palabra < ${palabra} > tiene ${contador} vocales.`);
