function dibujarEspiral(tamaño) {
  let espiral = "";
  let matriz = [];
  for (let i = 0; i < tamaño; i++) {
    matriz[i] = [];
  }
  let fila = 0;
  let columna = 0;
  let direccion = "derecha";
  for (let i = 0; i < tamaño * tamaño; i++) {
    switch (direccion) {
      case "derecha":
        matriz[fila][columna] = "═";
        if (columna + 1 < tamaño && !matriz[fila][columna + 1]) {
          columna++;
        } else {
          direccion = "abajo";
          matriz[fila][columna] = "╗";
          fila++;
        }
        break;
      case "abajo":
        matriz[fila][columna] = "║";
        if (fila + 1 < tamaño && !matriz[fila + 1][columna]) {
          fila++;
        } else {
          direccion = "izquierda";
          matriz[fila][columna] = "╝";
          columna--;
        }
        break;
      case "izquierda":
        matriz[fila][columna] = "═";
        if (columna - 1 >= 0 && !matriz[fila][columna - 1]) {
          columna--;
        } else {
          direccion = "arriba";
          matriz[fila][columna] = "╝";
          fila--;
        }
        break;
      case "arriba":
        matriz[fila][columna] = "║";
        if (fila - 1 >= 0 && !matriz[fila - 1][columna]) {
          fila--;
        } else {
          direccion = "derecha";
          matriz[fila][columna] = "╔";
          columna++;
        }
        break;
    }
  }
  for (let i = 0; i < tamaño; i++) {
    for (let j = 0; j < tamaño; j++) {
      espiral += matriz[i][j];
    }
    espiral += "\n";
  }
  return espiral;
}
