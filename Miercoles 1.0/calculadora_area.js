const LIMITE_AREA = 50;
var ancho = parseFloat(prompt("Introduce el ancho del rectángulo:"));
let alto = parseFloat(prompt("Introduce el alto del rectángulo:"));
let area = ancho * alto;
let esMayorA50 = area > LIMITE_AREA
var variableSinDefinir;
console.log("Área del rectángulo:", area);
if (esMayorA50) {
  console.log("El área es mayor a 50.");
} else {
  console.log("El área NO es mayor a 50.");
}
console.log("Valor de la variable sin definir:", variableSinDefinir);