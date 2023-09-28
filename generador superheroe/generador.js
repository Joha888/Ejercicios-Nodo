var nombre = prompt("Introduce tu nombre");
var animal = prompt("Introduce tu animal favorito");
var superheroe =
  animal[0].toUpperCase() + animal.slice(1).toLowerCase() + " " + nombre;

document.write(`<h2>Tu nombre de superhéroe es: ${superheroe}</h2>`);
