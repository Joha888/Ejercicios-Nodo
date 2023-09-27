const validar = (correo) => {
  var regex = /^[^@]+@[^@]+\.[^@]+$/;
  if (regex.test(correo)) {
    alert(`El correo ${correo} es valido`);
  } else {
    alert(`El correo ${correo} no es valido`);
  }
};

let correo = prompt("Ingrese su correo");
validar(correo);
