const esPalindromo = (cadena) => {
  cadena = cadena.toLowerCase().replace(/[\s.,;:!?¿¡()]/g, "");
  let inicio = 0;
  let final = cadena.length - 1;
  while (inicio < final) {
    let caracterInicio = cadena[inicio];
    let caracterFinal = cadena[final];
    if (caracterInicio != caracterFinal) {
      return false;
    }
    inicio++;
    final--;
  }
  return true;
};

let cadena = prompt("Introduce una cadena de texto:");
let resultado = esPalindromo(cadena);
if (resultado) {
  document.write("<h2>La cadena de texto es un palíndromo.</h2>");
} else {
  document.write("<h2>La cadena de texto no es un palíndromo.</h2>");
}
