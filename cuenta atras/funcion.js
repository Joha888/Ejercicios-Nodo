function cuentaAtras(inicial, intervalo) {
  if (
    Number.isInteger(inicial) &&
    Number.isInteger(intervalo) &&
    inicial > 0 &&
    intervalo > 0
  ) {
    console.log(inicial);
    let temporizador = null;
    let funcion = function () {
      inicial--;
      if (inicial == 0) {
        console.log(inicial);
        //clearInterval(temporizador);
      } else {
        console.log(inicial);
      }
    };
    temporizador = setInterval(funcion, intervalo * 1000);
  } else {
    console.log("Error: los parámetros deben ser números enteros positivos.");
  }
}
