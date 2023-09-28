function encontrarPrimosGemeos(rango) {
  let pares = [];
  for (let i = 2; i <= rango; i++) {
    if (esPrimo(i) && esPrimo(i + 2)) {
      pares.push([i, i + 2]);
    }
  }
  return pares;
}

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

let rango = prompt("Introduce un rango máximo:");
rango = Math.abs(parseInt(rango));
let resultado = encontrarPrimosGemeos(rango);
document.write(
  "<h2>Los pares de números primos gemelos en el rango " + rango + " son:</h2>"
);
for (let par of resultado) {
  document.write("<h3>(" + par[0] + ", " + par[1] + ")</h3>");
}
