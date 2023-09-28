function hayViernes13(mes, año) {
  let fecha = new Date(año, mes - 1, 13);
  let dia = fecha.getDay();
  if (dia == 5) {
    return true;
  } else {
    return false;
  }
}
