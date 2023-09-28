const calcularColumnaExcel = (nombre) => {
  let numero = 0;
  nombre = nombre.toUpperCase();
  for (let i = 0; i < nombre.length; i++) {
    let codigo = nombre.charCodeAt(i);
    if (codigo >= 65 && codigo <= 90) {
      let valor = codigo - 64;
      numero = numero * 26 + valor;
    } else {
      console.log(
        "Error: el nombre de la columna debe contener solo letras mayúsculas."
      );
      return;
    }
  }
  return numero;
};

let nombre = prompt("Ingrese el nombre");
let resultado = calcularColumnaExcel(nombre);
document.write(`<h2>${resultado}</h2>`);
