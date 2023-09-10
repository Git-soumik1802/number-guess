// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
let guessCount = 0;
const maxAttempts = 10;

// Get DOM elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const guessCountDisplay = document.getElementById("guessCount");
const resetButton = document.getElementById("resetButton");

// Function to handle a guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    guessCount++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${guessCount} guesses.`;
        message.style.color = "green";
        gameOver();
    } else if (guessCount === maxAttempts) {
        message.textContent = `Game over. The correct number was ${randomNumber}.`;
        message.style.color = "red";
        gameOver();
    } else if (userGuess < randomNumber) {
        message.textContent = `Try a higher number. ${maxAttempts - guessCount} guesses remaining.`;
        message.style.color = "blue";
    } else {
        message.textContent = `Try a lower number. ${maxAttempts - guessCount} guesses remaining.`;
        message.style.color = "blue";
    }

    guessInput.value = "";
    guessInput.focus();
    guessCountDisplay.textContent = guessCount;
}

// Function to end the game
function gameOver() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    resetButton.style.display = "block";
}

// Event listeners
guessButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

resetButton.addEventListener("click", function () {
    window.location.reload();
});
