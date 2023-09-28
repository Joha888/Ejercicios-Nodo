let frase = prompt("Ingrese una frase");

const inversor = (frase) => {
  let fraseInvertida = frase.split("").reverse().join("");
  return fraseInvertida;
};

document.write(`<h2>${inversor(frase)}</h2>`);
