const encriptarMensaje = (mensaje) => {
  let encriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let caracter = mensaje[i];
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 97 && codigo <= 122) {
      codigo = codigo == 122 ? 97 : codigo + 1;
      caracter = String.fromCharCode(codigo);
    } else if (codigo >= 65 && codigo <= 90) {
      codigo = codigo == 90 ? 65 : codigo + 1;
      caracter = String.fromCharCode(codigo);
    }
    encriptado += caracter;
  }
  return encriptado;
};

let mensaje = prompt("Introduce un mensaje:");
let resultado = encriptarMensaje(mensaje);
document.write(`<h2>El mensaje encriptado es: ${resultado}</h2>`);
