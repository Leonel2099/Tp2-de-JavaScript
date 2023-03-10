//PUNTO17
let palabra = prompt(`Ingresa una palabra`)
for(let indice = 0; indice < palabra.length ; indice++){
  if(palabra.charAt(indice) === 'a' || palabra.charAt(indice) === 'e' || palabra.charAt(indice) === 'i' || palabra.charAt(indice) === 'o' || palabra.charAt(indice) === 'u' || palabra.charAt(indice) === 'A' || palabra.charAt(indice) === 'E' || palabra.charAt(indice) === 'I' || palabra.charAt(indice) === 'O' || palabra.charAt(indice) === 'U'){
  document.write(`La posicion de la primer vocal es ${indice}`);
  indice=palabra.length;
  }
}