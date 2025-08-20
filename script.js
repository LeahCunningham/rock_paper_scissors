
let humanInput;
let humanScore = 0;
let computerScore = 0;
let count = 0;

// Variables to store the user and computer choice for the current round
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

//Captures the button selection and saves it to the human selection variable
function getHumanChoice() {
    const rockSelected = document.querySelector("#rockBtn");
    const paperSelected = document.querySelector("#paperBtn");
    const scissorsSelected = document.querySelector("#scissorsBtn");

    rockSelected.addEventListener("click", () => {
        humanSelection = "rock";
        playRound(humanSelection, computerSelection);
    }
    )

    paperSelected.addEventListener("click", () => {
        humanSelection = "paper";
        playRound(humanSelection, computerSelection);
    })

    scissorsSelected.addEventListener("click", () => {
        humanSelection = "scissors";
        playRound(humanSelection, computerSelection);
    })
}

//Assigns 3x randomly generated numbers to the 3x choice options
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3); // returns a random number that results in a vaule of 0, 1 or 2
    if (randomInt < 1) {
        return "rock";
    }
    else if (randomInt < 2 && randomInt >= 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    count = ++count;
    console.log("Round no.:" + count);
    console.log("Your choice:" + humanChoice)
    console.log("Computer's choice:" + computerChoice)

    if (humanChoice === computerChoice) {
        console.log("Result: It's a draw");
        console.log("Computer score:" + computerScore);
        console.log("Your score:" + humanScore);
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore = ++computerScore;
        console.log("Result: You lose");
        console.log("Computer score:" + computerScore);
        console.log("Your score:" + humanScore);

    }
    else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
        humanScore = ++humanScore;
        console.log("Result: You win");
        console.log("Computer score:" + computerScore);
        console.log("Your score:" + humanScore);
    }
}



// run the same function 5 times and pass in the new humanChoice and computerChoice value each time, increment the count and the scores

/*function playGame() {
  let humanScore = 0;
   let computerScore = 0;
   let count = 0;

   function playRound(humanChoice, computerChoice) {
       count = ++count;
       console.log("Round no.:" + count);
       console.log("Your choice:" + humanChoice)
       console.log("Computer's choice:" + computerChoice)

       if (humanChoice === computerChoice) {
           console.log("Result: It's a draw");
           console.log("Computer score:" + computerScore);
           console.log("Your score:" + humanScore);
       }
       else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
           computerScore = ++computerScore;
           console.log("Result: You lose");
           console.log("Computer score:" + computerScore);
           console.log("Your score:" + humanScore);

       }
       else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
           humanScore = ++humanScore;
           console.log("Result: You win");
           console.log("Computer score:" + computerScore);
           console.log("Your score:" + humanScore);

       }
       else {
           console.log("Invalid");
       }
   }

   */

function winner(yourTotal, computerTotal) {
    if (yourTotal > computerTotal) {
        console.log("Final result: You win the game!");
    }
    else if (yourTotal === computerTotal) {
        console.log("Final result: It's a draw");
    }
    else {
        console.log("Final result: Computer wins");
    }
}

/*Repeat rounds 5x and re-run the get choice functions to reassign the selection variables which are passed to the playRound functon each time

    playRound(humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();

     */



// winner(humanScore, computerScore);

