let diccionario = {
  A: "4",
  B: "8",
  E: "3",
  G: "6",
  L: "1",
  S: "5",
  O: "0",
  R: "2",
  T: "7",
};

const transformarATextoHacker = (texto) => {
  texto = texto.toUpperCase();
  let hacker = "";
  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];

    caracter = diccionario[caracter] || caracter;
    hacker += caracter;
  }
  return hacker;
};

let texto = prompt("Introduce un texto:");
let resultado = transformarATextoHacker(texto);
document.write(`<h2>El texto en lenguaje hacker es: ${resultado}</h2>`);
