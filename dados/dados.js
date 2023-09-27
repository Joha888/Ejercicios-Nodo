let dado1, dado2, suma;
const lanzarDado = () => Math.floor(Math.random() * 6 + 1);

dado1 = lanzarDado();
dado2 = lanzarDado();

suma = dado1 + dado2;

document.write(
  `Los dados sacaron ${dado1} y ${dado2}, para un total de ${suma} `
);
