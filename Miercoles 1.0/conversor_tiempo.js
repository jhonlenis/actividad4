const MIN_POR_HORA = 60;
const SEG_POR_MIN = 60;
var horas = parseFloat(prompt("Introduce la cantidad de horas:"));
let minutos = horas * MIN_POR_HORA;
var segundos = minutos * SEG_POR_MIN;
let esMayorAUnaHora = horas > 1;
console.log("Minutos:", minutos);
console.log("Segundos:", segundos);
console.log("¿Es mayor a 1 hora?", esMayorAUnaHora);