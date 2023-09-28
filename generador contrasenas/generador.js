function generarContraseña() {
  let contraseña = "";
  let longitud = 0;
  let mayusculas = false;
  let numeros = false;
  let simbolos = false;

  while (longitud < 8 || longitud > 16) {
    longitud = prompt("Elige la longitud de la contraseña (entre 8 y 16):");
    longitud = parseInt(longitud);
    if (isNaN(longitud)) {
      console.log("Error: debes introducir un número.");
      longitud = 0;
    }
  }
  mayusculas = confirm("¿Quieres usar letras mayúsculas?");
  numeros = confirm("¿Quieres usar números?");
  simbolos = confirm("¿Quieres usar símbolos?");

  let caracteres = "abcdefghijklmnopqrstuvwxyz";
  if (mayusculas) {
    caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeros) {
    caracteres += "0123456789";
  }
  if (simbolos) {
    caracteres += "!@#$%&*?";
  }
  for (let i = 0; i < longitud; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    let caracter = caracteres[indice];
    contraseña += caracter;
  }
  return contraseña;
}

let resultado = generarContraseña();
document.write("<h2>La contraseña generada es: " + resultado + "</h2>");
