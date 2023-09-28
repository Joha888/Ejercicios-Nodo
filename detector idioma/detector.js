const detectarIdioma = (palabra) => {
  palabra = palabra.toLowerCase();
  let tildadas = 0;
  for (let i = 0; i < palabra.length; i++) {
    let caracter = palabra[i];
    if (
      caracter == "á" ||
      caracter == "é" ||
      caracter == "í" ||
      caracter == "ó" ||
      caracter == "ú"
    ) {
      tildadas++;
    }
  }
  if (tildadas > 0) {
    return "español";
  } else {
    return "inglés";
  }
};

let palabra = prompt("Introduce una palabra:");
let resultado = detectarIdioma(palabra);
document.write(
  `<h2>La palabra ${palabra} esta probablemente en ${resultado}.</h2>`
);
