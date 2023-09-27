let total, porcentaje;

function calcular() {
  total = document.getElementById("total").value;
  porcentaje = document.getElementById("porcentaje").value;
  let resultado = total * (porcentaje / 100);
  document.getElementById("resultado").innerHTML =
    "La propina seria de " + resultado;
}
