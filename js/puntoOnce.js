//PUNTO 11 sin math.max()
/* let edadC = 0;
for(let contador = 0; contador < 3;contador++){
  let nombre = prompt(`Ingrese su nombre:`);
  let edad = parseInt(prompt(`Ingrse su edad`));
  console.log(edadC,edad);
  if(edad >= edadC){
    edadC = edad;
    document.write(`${nombre} es el mayor por que tiene ${edadC} años`)
    document.write(`<br>`)
    console.log(edadC,edad);
  }
} */

//PUNTO 11 con math.max()
let nombre1 = prompt(`Ingrese su nombre:`);
let edad1 = parseInt(prompt(`Ingrse su edad`));
let nombre2 = prompt(`Ingrese su nombre:`);
let edad2 = parseInt(prompt(`Ingrse su edad`));
let nombre3 = prompt(`Ingrese su nombre:`);
let edad3 = parseInt(prompt(`Ingrse su edad`));
let edadMayor = Math.max(edad1,edad2,edad3);
if(edad1 === edadMayor){
    document.write(`${nombre1} es el mayor por que tiene ${edadMayor} años`);
}else if(edad2 === edadMayor){
    document.write(`${nombre2} es el mayor por que tiene ${edadMayor} años`);
}else if(edad3 === edadMayor){
    document.write(`${nombre3} es el mayor por que tiene ${edadMayor} años`);
}
