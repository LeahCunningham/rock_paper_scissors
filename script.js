
let humanInput;
let humanScore = 0;
let computerScore = 0;
let count = 0;
let result = 0;

// variables to create and append elements to the HTML

const roundNumber = document.querySelector("#roundNo");
const roundNumberFigure = document.createElement("div");

const humanTotal = document.querySelector("#humanTotal");
const humanTotalFigure = document.createElement("div");

const computerTotal = document.querySelector("#computerTotal");
const computerTotalFigure = document.createElement("div");

const youChose = document.querySelector("#youChose");
const youChoseThis = document.createElement("div");

const computerChose = document.querySelector("#computerChose");
const computerChoseThis = document.createElement("div");

const roundResult = document.querySelector("#roundResult");
const roundResultOutcome = document.createElement("div");

const finalResult = document.querySelector("#resultsContainer");
const finalResultOutcome = document.createElement("div");

// Variables to store the user and computer choice for the current round
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

//Captures the button selection and saves it to the human selection variable
function getHumanChoice() {
    const rockSelected = document.querySelector("#rockBtn");
    const paperSelected = document.querySelector("#paperBtn");
    const scissorsSelected = document.querySelector("#scissorsBtn");

    rockSelected.addEventListener("click", () => {
        humanSelection = "Rock";
        playRound(humanSelection, computerSelection);
    }
    )

    paperSelected.addEventListener("click", () => {
        humanSelection = "Paper";
        playRound(humanSelection, computerSelection);
    })

    scissorsSelected.addEventListener("click", () => {
        humanSelection = "Scissors";
        playRound(humanSelection, computerSelection);
    })
}

//Assigns 3x randomly generated numbers to the 3x choice options
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3); // returns a random number that results in a vaule of 0, 1 or 2
    if (randomInt < 1) {
        return "Rock";
    }
    else if (randomInt < 2 && randomInt >= 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    count = ++count;

    if (humanChoice === computerChoice) {
        result = "It's a draw";

    }
    else if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
        computerScore = ++computerScore;
        result = "You lose";

    }
    else if ((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper") || (humanChoice === "Rock" && computerChoice === "Scissors")) {
        humanScore = ++humanScore;
        result = "You win";
    }

    roundNumberFigure.textContent = count;
    roundNumber.appendChild(roundNumberFigure);
    roundNumber.style.display = "flex";

    computerTotalFigure.textContent = computerScore;
    computerTotal.appendChild(computerTotalFigure);
    computerTotal.style.display = "flex";

    humanTotalFigure.textContent = humanScore;
    humanTotal.appendChild(humanTotalFigure);
    humanTotal.style.display = "flex";

    youChoseThis.textContent = humanSelection;
    youChose.appendChild(youChoseThis);
    youChose.style.display = "flex";

    computerChoseThis.textContent = computerSelection;
    computerChose.appendChild(computerChoseThis);
    computerChose.style.display = "flex";

    roundResultOutcome.textContent = result;
    roundResult.appendChild(roundResultOutcome);
    roundResult.style.display = "flex";

    computerSelection = getComputerChoice();


    if (humanScore === 5 || computerScore === 5) {

        const allButtons = document.querySelectorAll("button");
        allButtons.forEach(btn => {
            btn.disabled = true;
        })


        if (humanScore > computerScore) {
            finalResult.appendChild(finalResultOutcome);
            finalResultOutcome.textContent = "Game over - You win!";
            finalResultOutcome.className = "resultW";
        }

        else {
            finalResult.appendChild(finalResultOutcome);
            finalResultOutcome.textContent = "Game over - Computer wins";
            finalResultOutcome.className = "resultL";
        }
    }
}



