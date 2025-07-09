const saludo = "¡Tu texto es: ";
let texto = prompt("Por favor, ingresa un texto:");
let esLargo = texto.length > 10;
var concatenacion = saludo + texto;
var valorNulo = null;

console.log(concatenacion);
if (esLargo) {
  console.log("El texto es largo.");
}
console.log(!esLargo);
console.log(valorNulo);