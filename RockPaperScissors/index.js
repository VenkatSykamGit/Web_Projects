function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice = prompt("Please enter either Rock, Paper, or Scissors: ").toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie! Choose again.";
    }
    else if (playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "scissors" && computerSelection == "paper" ||
             playerSelection == "rock" && computerSelection == "scissors") {
                myScore += 1;
                return `You Win! ${playerSelection} beats ${computerSelection}`;
             }
    else {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let roundCounter = 0;

    while (roundCounter < 5) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        roundCounter += 1;
    }   

    console.log(myScore, computerScore);

    if (myScore == computerScore) {
        return "Tie Game!"
    }
    else if (myScore > computerScore) {
        return "You win! Congratulations!"
    }
    else {
        return "You Lost! Better luck next time!"
    }

}

let myScore = 0;
let computerScore = 0;
console.log(game());