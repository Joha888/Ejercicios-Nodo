let celsius, fahrenheit;

let eleccion = prompt(
  "Que conversion deseas hacer? \n 1 para Celsius a Fahrenheit \n 2 para Fahrenheit a Celsius"
);

const celsiusFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
};

const fahrenheitCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * (5 / 9);
};

if (eleccion == 1) {
  celsius = prompt("Ingrese la temperatura en grados celsius");
  fahrenheit = celsiusFahrenheit(celsius);
} else if (eleccion == 2) {
  fahrenheit = prompt("Ingrese la temperatura en grados fahrenheit");
  celsius = fahrenheitCelsius(fahrenheit);
} else {
  alert("Opcion equivocada");
}

document.write(`<h2>La temperatura en grados celsius es ${celsius}</h2>`);
document.write(`<h2>La temperatura en grados fahrenheit es ${fahrenheit}</h2>`);
