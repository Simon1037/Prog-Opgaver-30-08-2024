"use strict";

let gameRunning = false;

/* Function to start the game */
function startGame() {
  if (!gameRunning) {
    gameRunning = true;

    /* Generate random number between 1 and 100 */
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random number:", randomNumber);

    while (randomNumber) {
      let guess = parseInt(prompt("Guess a number between 1 and 100:"));
      console.log("Number:", guess);

      /*       if (!guess) {
        alert("Please enter a valid number.");
        console.log("Please enter a valid number.");
      } */
      if (guess) {
        if (guess === randomNumber) {
          alert("Congratulations! You guessed the correct number.");
          console.log("Congratulations! You guessed the correct number.");
          stopGame();
          break;
        } else if (guess < randomNumber) {
          alert("Too low! Try again.");
          console.log("Too low! Try again.");
        } else {
          alert("Too high! Try again.");
          console.log("Too high! Try again.");
        }
      }
    }
  }
}

/* Function to stop the game */
function stopGame() {
  gameRunning = false;
  alert("Game stopped.");
}

/* Start the game when the page loads */
window.onload = startGame;
