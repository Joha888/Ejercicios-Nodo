const luhn = (tarjeta) => {
  // Crear una variable para almacenar la suma de los dígitos
  let suma = 0;
  // Crear una variable para indicar si se debe duplicar el dígito o no
  let doblar = false;
  // Recorrer el número de derecha a izquierda
  for (let i = tarjeta.length - 1; i >= 0; i--) {
    // Obtener el dígito en la posición i
    let digito = parseInt(tarjeta[i]);
    // Si se debe duplicar el dígito
    if (doblar) {
      // Multiplicar el dígito por 2
      digito *= 2;
      // Si el resultado es un número de dos dígitos, sumar sus dígitos
      if (digito > 9) {
        digito = Math.floor(digito / 10) + (digito % 10);
      }
    }
    // Sumar el dígito a la suma total
    suma += digito;
    // Alternar el valor de doblar para el siguiente dígito
    doblar = !doblar;
  }
  // Devolver verdadero si la suma es divisible por 10, falso en caso contrario
  return suma % 10 === 0;
};

let test = [
  453953071205124, 536138394782529, 371449635398431, 3530111333300000,
  6011000990139424, 4539530871205125, 5361383694782530, 371449635398432,
  3530111333300001, 6011000990139425,
];

for (let i = test.length - 1; i >= 0; i--) {
  let respuesta = luhn(test[i]);
  if (respuesta == true) {
    document.write(`<h2>La tarjeta ${test[i]} es valida</h2>`);
  } else {
    document.write(`<h2>La tarjeta ${test[i]} es invalida</h2>`);
  }
}
