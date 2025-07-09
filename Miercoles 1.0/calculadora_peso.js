var entradaPeso = prompt("Introduce tu peso:");
let peso = parseFloat(entradaPeso);
let pesoGramos = peso * 1000;
const PESO_REFERENCIA = 70;
var esMayorA70 = peso > PESO_REFERENCIA;
var resultadoLogico = esMayorA70 && true;
console.log("Peso en gramos:", pesoGramos);
console.log("¿El peso es mayor a 70 kg?:", esMayorA70);
console.log("Resultado de la combinación lógica (esMayorA70 && true):", resultadoLogico);