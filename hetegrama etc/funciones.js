function esHeterograma(texto) {
  texto = texto.toLowerCase().replace(/[\s.,;:!?¿¡]/g, "");
  let letras = {};
  for (let letra of texto) {
    if (letras[letra]) {
      return false;
    } else {
      letras[letra] = true;
    }
  }
  return true;
}

function esIsograma(texto) {
  texto = texto.toLowerCase().replace(/[\s.,;:!?¿¡]/g, "");
  let letras = {};
  let frecuencia = null;
  for (let letra of texto) {
    if (letras[letra]) {
      letras[letra]++;
    } else {
      letras[letra] = 1;
    }
    if (frecuencia) {
      if (letras[letra] != frecuencia) {
        return false;
      }
    } else {
      frecuencia = letras[letra];
    }
  }
  return true;
}

function esPangrama(texto) {
  texto = texto.toLowerCase().replace(/[\s.,;:!?¿¡]/g, "");
  let abecedario = "abcdefghijklmnñopqrstuvwxyz";
  for (let letra of abecedario) {
    if (!texto.includes(letra)) {
      return false;
    }
  }
  return true;
}
