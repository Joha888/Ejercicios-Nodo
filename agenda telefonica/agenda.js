// Crear un objeto para almacenar los contactos de la agenda telefónica
let agenda = {};

// Añadir algunos contactos a la agenda
agenda["Ana"] = 1234567;
agenda["Carlos"] = 2345678;
agenda["Luisa"] = 3456789;

function anadir() {
  let nombre = prompt("Ingrese el nombre");
  let telefono = prompt("Ingrese el telefono");

  agenda[nombre] = telefono;
}

function buscar() {
  let nombre = prompt("Nombre a buscar: ");
  if (agenda[nombre]) {
    // Si el contacto existe, imprime su número de teléfono
    alert("El número de teléfono de " + nombre + " es " + agenda[nombre]);
  } else {
    // Si no existe, imprime un mensaje indicando que el contacto no se encontró
    alert("No se encontró el contacto " + nombre + " en la agenda");
  }
}
