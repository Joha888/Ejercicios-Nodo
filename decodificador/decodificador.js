let diccionario = {
  gato: "agente",
  perro: "policia",
  pajaro: "vigilante",
  raton: "informante",
  lobo: "mafioso",
  rojo: "secreto",
  azul: "publico",
  hambre: "mision",
  sed: "dinero",
  sueño: "plan",
  comida: "arma",
  agua: "droga",
  cama: "escondite",
  ropa: "vehiculo",
};

let mensaje = prompt("Ingrese el mensaje: ");

mensaje_descodificado = mensaje
  .split(" ")
  .map((palabra) => {
    if (palabra in diccionario) {
      return diccionario[palabra];
    } else {
      return palabra;
    }
  })
  .join(" ");

alert(mensaje_descodificado);
