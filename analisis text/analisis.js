function analizarTexto(texto) {
  let palabras = 0;
  let letras = 0;
  let oraciones = 0;
  let maxima = 0;
  let palabraMaxima = "";
  let palabraActual = "";
  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (
      (caracter >= "A" && caracter <= "Z") ||
      (caracter >= "a" && caracter <= "z")
    ) {
      palabraActual += caracter;
      letras++;
    } else {
      if (palabraActual != "") {
        palabras++;
        if (palabraActual.length > maxima) {
          maxima = palabraActual.length;
          palabraMaxima = palabraActual;
        }
        palabraActual = "";
      }
      if (caracter == ".") {
        oraciones++;
      }
    }
  }
  let media = letras / palabras;
  return {
    palabras: palabras,
    media: media,
    oraciones: oraciones,
    maxima: palabraMaxima,
  };
}

let texto = prompt("Introduce un texto:");
let resultado = analizarTexto(texto);
document.write(
  "<h2>El texto tiene " + resultado.palabras + " palabras.</h2><br>"
);
document.write(
  "<h2>La longitud media de las palabras es " + resultado.media + ".</h2><br>"
);
document.write(
  "<h2>El texto tiene " + resultado.oraciones + " oraciones.</h2><br>"
);
document.write(
  "<h2>La palabra más larga es '" + resultado.maxima + "'.</h2><br>"
);
