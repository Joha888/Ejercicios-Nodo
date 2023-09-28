let palabras = [
  "murciélago",
  "computadora",
  "elefante",
  "guitarra",
  "hipopótamo",
  "jirafa",
  "koala",
  "limonada",
  "mariposa",
  "naranja",
];

function elegirPalabra() {
  let indice = Math.floor(Math.random() * palabras.length);
  let palabra = palabras[indice];
  let oculta = "";
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    let azar = Math.random();
    if (azar < 0.4 && oculta.split("_").length - 1 < palabra.length * 0.6) {
      oculta += "_";
    } else {
      oculta += letra;
    }
  }
  return { palabra: palabra, oculta: oculta };
}

function jugar(palabra, oculta, entrada) {
  let resultado = "";
  if (entrada.length == 1) {
    if (palabra.includes(entrada)) {
      resultado = mostrarLetra(palabra, oculta, entrada);
    } else {
      resultado = "La letra '" + entrada + "' no está en la palabra.";
    }
  } else if (entrada.length == palabra.length) {
    if (entrada == palabra) {
      resultado = "¡Has acertado! La palabra era '" + palabra + "'.";
    } else {
      resultado = "La palabra '" + entrada + "' no es correcta.";
    }
  } else {
    resultado = "Debes introducir una letra o una palabra.";
  }
  return resultado;
}

function mostrarLetra(palabra, oculta, letra) {
  let nueva = "";
  for (let i = 0; i < palabra.length; i++) {
    let actual = palabra[i];
    let anterior = oculta[i];
    if (actual == letra || anterior != "_") {
      nueva += actual;
    } else {
      nueva += "_";
    }
  }
  return nueva;
}

let elegida = elegirPalabra();
let palabra = elegida.palabra;
let oculta = elegida.oculta;
let intentos = 5;
alert("La palabra es: " + oculta);
alert("Tienes " + intentos + " intentos.");
while (intentos > 0 && oculta != palabra) {
  let entrada = prompt("Introduce una letra o una palabra:");
  let resultado = jugar(palabra, oculta, entrada);
  alert(resultado);
  if (resultado.includes("_")) {
    oculta = resultado;
  } else if (resultado.includes("¡Has acertado!")) {
    break;
  } else {
    intentos--;
    alert("Te quedan " + intentos + " intentos.");
  }
}
if (intentos == 0 && oculta != palabra) {
  alert("Lo siento, has perdido. La palabra era '" + palabra + "'.");
}
