const contarVocalesYConsonantes = (cadena) => {
  cadena = cadena.toLowerCase();
  let vocales = 0;
  let consonantes = 0;
  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];
    if (
      caracter == "a" ||
      caracter == "e" ||
      caracter == "i" ||
      caracter == "o" ||
      caracter == "u"
    ) {
      vocales++;
    } else if (caracter >= "a" && caracter <= "z") {
      consonantes++;
    }
  }
  return { vocales: vocales, consonantes: consonantes };
};

let cadena = prompt("Introduce una cadena de texto:");
let resultado = contarVocalesYConsonantes(cadena);
document.write(
  `<h2>La cadena ${cadena} tiene ${resultado.vocales} vocales y ${resultado.consonantes} consonantes.</h2>`
);
