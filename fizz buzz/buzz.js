for (let i = 1; i <= 100; i++) {
  let mensaje = "";
  if (i % 3 == 0) {
    mensaje += "fizz";
  }
  if (i % 5 == 0) {
    mensaje += "buzz";
  }
  if (mensaje == "") {
    mensaje = i;
  }
  document.write(`<h3>${mensaje}</h3><br>`);
}
