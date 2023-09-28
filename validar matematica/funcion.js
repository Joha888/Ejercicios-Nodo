function es_correcta(expresion) {
  let elementos = expresion.split(" ");
  if (elementos.length % 2 == 0) {
    return false;
  }
  for (let i = 0; i < elementos.length; i += 2) {
    if (isNaN(elementos[i])) {
      return false;
    }
  }
  let operaciones = ["+", "-", "*", "/", "%"];
  for (let i = 1; i < elementos.length; i += 2) {
    if (!operaciones.includes(elementos[i])) {
      return false;
    }
  }
  return true;
}
