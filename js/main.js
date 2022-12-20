// Triángulos: clasificación y propiedades

//Comienzo
alert("¡Comencemos a jugar! Da click en Aceptar :)");

// Variables globales

const triangulo = {
  ladoA: prompt("Ingrese la medida (en cm) del lado A"),
  ladoB: prompt("Ingrese la medida (en cm) del lado B"),
  ladoC: prompt("Ingrese la medida (en cm) del lado C"),
};
let triangulosTipos = ["Equilátero", "Isósceles", "Escaleno"];
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

// Clases
class trianguloMetodo {
  constructor(ladoA, ladoB, ladoC) {
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }
  clasificacionLados() {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
      const equilatero = triangulosTipos.find(
        (triang) => triang === "Equilátero"
      );
      console.log("Tu triángulo es " + equilatero);
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      const isosceles = triangulosTipos.find(
        (triang) => triang === "Isósceles"
      );
      console.log("Tu triángulo es " + isosceles);
    } else {
      const escaleno = triangulosTipos.find((triang) => triang === "Escaleno");
      console.log("Tu triángulo es " + escaleno);
    }
  }
}

construccionTriangulo();
triangulo.clasificacionLados();
respuesta = prompt("¿Desea seguir?\nEscriba 'Si' o 'No'");
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
      respuesta = prompt("¿Desea seguir?\nEscriba 'Si' o 'No'");
  }
}
