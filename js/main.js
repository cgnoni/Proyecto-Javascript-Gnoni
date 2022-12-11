// Construcción de triángulos

alert("¡Comencemos a jugar! Da click en Aceptar :)");

// Variables globales

let ladoA = prompt("Ingrese la medida (en cm) del lado A");
let ladoB = prompt("Ingrese la medida (en cm) del lado B");
let ladoC = prompt("Ingrese la medida (en cm) del lado C");
let respuesta = 0;

// Funciones
function construccionTriangulo() {
  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoB + ladoA) {
    console.log("¡Felicidades! Has construido un triángulo.");
  } else if (ladoA == 0 || ladoB == 0 || ladoC == 0) {
    console.log("Los lados no pueden ser iguales a 0. Intentalo nuevamente");
  } else {
    console.log("¡Oh no! Vuelve a intentarlo!");
  }
}

construccionTriangulo();
respuesta = prompt("¿Desea seguir?\nEscriba 'Si' o 'No'").toLowerCase();
while (respuesta != "No" || respuesta != "no") {
  switch (respuesta) {
    case "Si":
      alert("Presione F5 para comenzar de nuevo!");
      break;
    case "No":
      alert("¡Vuelve pronto!");
      break;
    default:
      alert("Error.");
      respuesta = prompt("¿Desea seguir?\nEscriba 'Si' o 'No'").toLowerCase();
  }
}
