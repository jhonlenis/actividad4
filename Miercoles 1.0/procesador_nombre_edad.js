var NOMBRE;
var nombre = prompt("Introduce tu nombre:");
let edad = prompt("Introduce tu edad:");
edad = parseInt(edad);
const DIAS_POR_AÑO = 365;
let edadEnDias = edad * DIAS_POR_AÑO;
let nombreCorto = nombre.length < 5;
let valorNulo = null;

console.log("Nombre:", nombre);
console.log("Edad en días:", edadEnDias);
console.log("¿El nombre es corto?:", nombreCorto);
console.log("Valor nulo:", valorNulo);