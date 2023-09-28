const validarContrasena = (contrasena) => {
  // Expresión regular que verifica los requisitos
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const valido = regex.test(contrasena);
  let mensaje = "";
  if (valido) {
    mensaje = "Contraseña válida";
  } else {
    mensaje =
      "Contraseña inválida. Debe cumplir con los siguientes requisitos:\n";
    if (contrasena.length < 8) {
      mensaje +=
        "- La contraseña debe tener al menos 8 caracteres de longitud.\n";
    }
    if (!contrasena.match(/[A-Z]/)) {
      mensaje += "- Debe contener al menos una letra mayúscula.\n";
    }
    if (!contrasena.match(/[a-z]/)) {
      mensaje += "- Debe contener al menos una letra minúscula.\n";
    }
    if (!contrasena.match(/\d/)) {
      mensaje += "- Debe contener al menos un número.\n";
    }
  }
  // Retornar el mensaje
  return mensaje;
};

let contrasena = prompt("Ingrese una contraseña");

// Mostrar el resultado de la validación
document.write(`<h2>${validarContrasena(contrasena)}</h2>`);
