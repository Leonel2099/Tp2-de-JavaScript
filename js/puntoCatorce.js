//PUNTO 14
let palabra = prompt(`Ingresa una palabra`);
for(let indice = 0; indice < palabra.length ; indice++){
  if(indice < palabra.length-1){
    document.write(`${palabra.charAt(indice)}-`);
  }else{
    document.write(`${palabra.charAt(indice)}`);
  }
}