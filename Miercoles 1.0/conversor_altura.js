let alturaStr = prompt("Ingrese su altura en metros (por ejemplo, 1.75): ");
let altura = Number(alturaStr);

const referenciaAltura = 1.70;
var alturaMilimetros = altura * 1000; 
var variableSinAsignar; 

console.log("Altura en metros:", altura);
console.log("Altura en centímetros:", altura * 100);
console.log("Altura en milímetros:", alturaMilimetros);

if (altura > referenciaAltura) {
  console.log("Es alta");
} else {
  console.log("No es alta");
}

console.log("Valor de la variable sin asignar:", variableSinAsignar);