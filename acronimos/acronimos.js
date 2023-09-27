let nombre = prompt("Ingrese el nombre");

const generar = (nombre) => {
  let ignore = ["de", "la", "el", "los", "las"];
  let acronimo = nombre
    .split(" ")
    .filter((palabra) => !ignore.includes(palabra))
    .map((palabra) => palabra[0])
    .join("")
    .toUpperCase();
  return acronimo;
};

document.write(`El acronimo es ${generar(nombre)}`);
