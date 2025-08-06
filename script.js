
// There are three choices - rock, paper, scissors
// Randomly select one of the 3 choices for the computer player
    // Generate a random number that results in 3 possible integer values
    // Assign each of the 3 possible integers to each of the 3 choice options
// Allow the user to select one of the choices for their choice
// Compare the choice of the computer and the user to see who won
// Store the score for the user and the computer
    // Create variables for storing these values




let randomChoice = Math.floor(Math.random() * 3); // returns a random number that results in a vaule of 0, 1 or 2

function getComputerChoice () {
        if (randomChoice < 1) {
            return "rock";
        } 
        else if (randomChoice < 2 && randomChoice >= 1) {
            return "paper";
        }
        else {
            return "scissors";
        }
}

let humanChoice = prompt ("Choose your fighter - Rock, Paper or Scissors");

function getHumanChoice () {
        if (humanChoice.toLowerCase() === "rock") {
            return "rock";
        }
         else if (humanChoice.toLowerCase() === "paper") {
            return "paper";
        }
         else if (humanChoice.toLowerCase() === "scissors") {
            return "scissors";
        }
         else {
            return "please only enter 'rock' 'paper' or 'scissors'";
        }
}

console.log(getComputerChoice())

console.log(getHumanChoice())