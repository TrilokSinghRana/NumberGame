let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");
const restartGame = document.getElementById("restartGame");

submitGuess.addEventListener("click", function () {
    let userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        message.style.color = "red";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Congratulations! You guessed it right!";
        message.style.color = "green";
    } else if (userGuess < randomNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "blue";
    } else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "orange";
    }
});

restartGame.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    message.textContent = "";
    guessInput.value = "";
});
