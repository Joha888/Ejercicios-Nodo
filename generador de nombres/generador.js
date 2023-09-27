let nombre, apellido;
let numeroAleatorio = Math.round(Math.random() * 10);

const generador = (nombre, apellido, numero) => {
  return nombre.slice(0, 2) + apellido + numero;
};

nombre = prompt("Ingrese su nombre: ");
apellido = prompt("Ingrese su apellido: ");

document.write(
  `<h2>Su usuario es ${generador(nombre, apellido, numeroAleatorio)}</h2>`
);
