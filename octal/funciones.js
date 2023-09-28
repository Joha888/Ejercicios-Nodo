function convertirDecimal(decimal) {
  let octal = "";
  let hexadecimal = "";
  let digitos = "0123456789ABCDEF";
  let auxOctal = decimal;
  let auxHexadecimal = decimal;
  while (auxOctal > 0) {
    let resto = auxOctal % 8;
    octal = resto + octal;
    auxOctal = Math.floor(auxOctal / 8);
  }
  while (auxHexadecimal > 0) {
    let resto = auxHexadecimal % 16;
    let digito = digitos[resto];
    hexadecimal = digito + hexadecimal;
    auxHexadecimal = Math.floor(auxHexadecimal / 16);
  }
  return { octal: octal, hexadecimal: hexadecimal };
}
