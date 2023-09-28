const generarNumeroPseudoaleatorio = () => {
  let numero = 0;
  // Usar la fecha y hora actual como semilla para el generador
  let semilla = Date.now();
  // Esta operación se basa en el algoritmo de Park-Miller, que es un tipo de generador congruencial lineal
  // https://en.wikipedia.org/wiki/Lehmer_random_number_generator
  numero = (semilla * 16807) % 2147483647;
  numero = numero / 2147483647;
  numero = Math.round(numero * 100);
  return numero;
};

let resultado = generarNumeroPseudoaleatorio();
document.write(
  "<h2>El número pseudoaleatorio generado es: " + resultado + "</h2>"
);
