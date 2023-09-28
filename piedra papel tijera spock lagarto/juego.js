function calcularGanador(listado) {
  let puntaje1 = 0;
  let puntaje2 = 0;
  for (let par of listado) {
    let jugada1 = par[0];
    let jugada2 = par[1];
    if (ganaJugada(jugada1, jugada2)) {
      puntaje1++;
    } else if (ganaJugada(jugada2, jugada1)) {
      puntaje2++;
    } else {
    }
  }
  if (puntaje1 > puntaje2) {
    return "Player 1";
  } else if (puntaje2 > puntaje1) {
    return "Player 2";
  } else {
    return "Tie";
  }
}

function ganaJugada(jugada1, jugada2) {
  let ganadoras = {
    "🗿": ["✂️", "🦎"],
    "📄": ["🗿", "🖖"],
    "✂️": ["📄", "🦎"],
    "🦎": ["📄", "🖖"],
    "🖖": ["🗿", "✂️"],
  };
  if (ganadoras[jugada1].includes(jugada2)) {
    return true;
  } else {
    return false;
  }
}

let listado = [
  ["🗿", "✂️"],
  ["✂️", "🗿"],
  ["📄", "✂️"],
];
let resultado = calcularGanador(listado);
console.log("El ganador es: " + resultado);
