let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(guess)) {
    message.textContent = " Please enter a valid number.";
    return;
  }

  if (guess < 1 || guess > 100) {
    message.textContent = " Number must be between 1 and 100.";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = ` Correct! You guessed it in ${attempts} attempts.`;
  } else if (guess < secretNumber) {
    message.textContent = " Too low! Try again.";
  } else {
    message.textContent = " Too high! Try again.";
  }
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
}
