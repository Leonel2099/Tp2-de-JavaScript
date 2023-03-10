//PUNTO 5 42072777 = G, 23456789 = D, 09876543 = K
let texto = "Presione Aceptar si quiere repetir el proceos o Cancelar si no.";
do {
  let dni = parseInt(prompt("Ingrese su numero de DNI:"));
  while (isNaN(dni) || dni < 0 || dni > 99999999) {
    alert("No se ingreso un numero de DNI");
    dni = parseInt(prompt("Ingrse su numero de DNI:"));
  }
  let resto = dni % 23;
  switch (resto) {
    case 0:
      alert(`Tu DNI ${dni} en letra es : T`);
      break;
    case 1:
      alert(`Tu DNI ${dni} en letra es : R`);
      break;
    case 2:
      alert(`Tu DNI ${dni} en letra es : W`);
      break;
    case 3:
      alert(`Tu DNI ${dni} en letra es : A`);
      break;
    case 4:
      alert(`Tu DNI ${dni} en letra es : G`);
      break;
    case 5:
      alert(`Tu DNI ${dni} en letra es : M`);
      break;
    case 6:
      alert(`Tu DNI ${dni} en letra es : Y`);
      break;
    case 7:
      alert(`Tu DNI ${dni} en letra es : F`);
      break;
    case 8:
      alert(`Tu DNI ${dni} en letra es : P`);
      break;
    case 9:
      alert(`Tu DNI ${dni} en letra es : D`);
      break;
    case 10:
      alert(`Tu DNI ${dni} en letra es : X`);
      break;
    case 11:
      alert(`Tu DNI ${dni} en letra es : B`);
      break;
    case 12:
      alert(`Tu DNI ${dni} en letra es : N`);
      break;
    case 13:
      alert(`Tu DNI ${dni} en letra es : J`);
      break;
    case 14:
      alert(`Tu DNI ${dni} en letra es : Z`);
      break;
    case 15:
      alert(`Tu DNI ${dni} en letra es : S`);
      break;
    case 16:
      alert(`Tu DNI ${dni} en letra es : Q`);
      break;
    case 17:
      alert(`Tu DNI ${dni} en letra es : V`);
      break;
    case 18:
      alert(`Tu DNI ${dni} en letra es : H`);
      break;
    case 19:
      alert(`Tu DNI ${dni} en letra es : L`);
      break;
    case 20:
      alert(`Tu DNI ${dni} en letra es : C`);
      break;
    case 21:
      alert(`Tu DNI ${dni} en letra es : K`);
      break;
    case 22:
      alert(`Tu DNI ${dni} en letra es : E`);
      break;
    default:
      alert(`Tu DNI ${dni} en letra no existe`);
      break;
  }
} while (confirm(texto));
