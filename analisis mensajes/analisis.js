const analizarMensaje = (mensaje) => {
  let caracteres = mensaje.length;
  let palabras = 0;
  let oraciones = 0;
  for (let i = 0; i < caracteres; i++) {
    let caracter = mensaje[i];
    if (caracter == " ") {
      palabras++;
    } else if (caracter == "." || caracter == "?" || caracter == "!") {
      oraciones++;
    }
  }
  palabras++;
  return { caracteres: caracteres, palabras: palabras, oraciones: oraciones };
};

let mensaje = prompt("Introduce un mensaje de texto:");
let resultado = analizarMensaje(mensaje);

document.write(
  `<h2>El mensaje ${mensaje} tiene ${resultado.caracteres} caracteres, ${resultado.palabras} palabras y ${resultado.oraciones} oraciones.</h2>`
);
