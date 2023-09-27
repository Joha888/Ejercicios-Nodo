let peso, altura;

const imc = (peso, altura) => {
  return peso / (altura * altura);
};

peso = prompt("Digite su peso");
altura = prompt("Digite su altura");

let resultado = imc(peso, altura);

document.write(`<h1>Su imc es ${resultado}</h1>`);

if (resultado < 18.5) {
  document.write(`<h2>Usted tiene un peso normal</h2>`);
} else if (resultado >= 18.5 && resultado <= 24.9) {
  document.write(`<h2>Usted tiene un peso normal</h2>`);
} else if (resultado >= 25 && resultado <= 29.9) {
  document.write(`<h2>Usted tiene sobrepeso</h2>`);
} else if (resultado >= 30) {
  document.write(`<h2>Usted tiene obesidad</h2>`);
}
