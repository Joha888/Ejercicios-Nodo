var randomNumber = Math.floor(Math.random() * 10) + 1;
var guessCount = 0;

function checkGuess() {
  var guess = parseInt(document.getElementById("guessInput").value);
  guessCount++;

  if (guess === randomNumber) {
    alert("Felicidades, has adivinado el numero 😎");
    window.location.reload();
  } else if (guessCount === 3) {
    alert(
      `Lo siento, has agotado tus oportunidades 🥲, el numero era ${randomNumber}`
    );
    window.location.reload();
  } else {
    if (guess < randomNumber) {
      alert(`El numero es mayor, te quedan ${3 - guessCount}`);
    } else {
      alert(`El numero es menor, te quedan ${3 - guessCount}`);
    }
  }
}
