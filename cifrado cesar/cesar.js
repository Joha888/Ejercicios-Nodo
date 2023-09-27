function cifrar(cadena, desplazamiento) {
  let resultado = "";
  for (let i = 0; i < cadena.length; i++) {
    // Obtener el código ASCII del caracter
    let codigo = cadena.charCodeAt(i);
    // Si el caracter es una letra mayúscula
    if (codigo >= 65 && codigo <= 90) {
      // Aplicar el desplazamiento y obtener el módulo 26 para evitar salirse del alfabeto
      // Sumar 65 para obtener el nuevo código ASCII y convertirlo a caracter
      resultado += String.fromCharCode(
        ((codigo - 65 + desplazamiento) % 26) + 65
      );
    }
    // Si el caracter es una letra minúscula
    else if (codigo >= 97 && codigo <= 122) {
      // Aplicar el desplazamiento y obtener el módulo 26 para evitar salirse del alfabeto
      // Sumar 97 para obtener el nuevo código ASCII y convertirlo a caracter
      resultado += String.fromCharCode(
        ((codigo - 97 + desplazamiento) % 26) + 97
      );
    }
    // Si el caracter no es alfabético, añadirlo al resultado sin cambiarlo
    else {
      resultado += cadena[i];
    }
  }
  // Devolver el resultado
  return resultado;
}

let mensaje = prompt("Ingrese el mensaje");
let desplazamiento = prompt("Ingrese el desplazamiento");

alert(cifrar(mensaje, desplazamiento));
