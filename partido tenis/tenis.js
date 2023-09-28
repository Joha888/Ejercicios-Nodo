function mostrarJuegoDeTenis(secuencia) {
  let p1 = 0;
  let p2 = 0;
  let fin = false;
  for (let i = 0; i < secuencia.length; i++) {
    let punto = secuencia[i];
    if (punto == "P1") {
      p1++;
    } else if (punto == "P2") {
      p2++;
    } else {
      document.write("Error: punto inválido.<br>");
      return;
    }
    if ((p1 >= 4 || p2 >= 4) && Math.abs(p1 - p2) >= 2) {
      document.write("Ha ganado el " + punto + ".<br>");
      fin = true;
    }
    if (!fin) {
      document.write(mostrarPuntuacion(p1, p2));
    }
  }
}

function mostrarPuntuacion(p1, p2) {
  let t1 = "";
  let t2 = "";
  if (p1 == p2) {
    if (p1 >= 3) {
      t1 = "Deuce<br>";
      t2 = "";
    } else {
      t1 = mostrarPunto(p1);
      t2 = t1;
    }
  } else if (p1 >= 3 && p2 >= 3) {
    if (p1 > p2) {
      t1 = "Ventaja P1<br>";
      t2 = "";
    } else {
      t1 = "Ventaja P2<br>";
      t2 = "";
    }
  } else {
    t1 = mostrarPunto(p1);
    t2 = mostrarPunto(p2);
  }
  return t1 + " - " + t2;
}

function mostrarPunto(puntos) {
  switch (puntos) {
    case 0:
      return "Love<br>";
    case 1:
      return "15<br>";
    case 2:
      return "30<br>";
    case 3:
      return "40<br>";
    default:
      return "";
  }
}

let secuencia = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];
mostrarJuegoDeTenis(secuencia);
