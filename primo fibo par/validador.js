function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

function esFibonacci(numero) {
  let a = 0;
  let b = 1;
  let c = a + b;
  while (c <= numero) {
    if (c == numero) {
      return true;
    }
    a = b;
    b = c;
    c = a + b;
  }

  return false;
}

function esPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let numero = prompt("Introduce un número:");
let primo = esPrimo(numero);
let fibonacci = esFibonacci(numero);
let par = esPar(numero);
document.write(
  "<h2>El número " +
    numero +
    " " +
    (primo ? "es" : "no es") +
    " primo, " +
    (fibonacci ? "es" : "no es") +
    " fibonacci y " +
    (par ? "es par" : "es impar") +
    ".</h2>"
);
