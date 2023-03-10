//PUNTO16
let palabra = prompt(`Ingresa una palabra`)
for(let indice = palabra.length; indice >=0  ; indice--){
  document.write(`${palabra.charAt(indice)}`);
}