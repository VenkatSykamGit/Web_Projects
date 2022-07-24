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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return;
    }
    else if (playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "scissors" && computerSelection == "paper" ||
             playerSelection == "rock" && computerSelection == "scissors") {
                myScore += 1;
             }
    else {
        computerScore += 1;
    }
}

function declareWinner() {
    if (myScore == 5) {
        alert('Hey you won! Congratulations!')
    } else {
        alert('Computer has defeated you, Time to get revenge!')
    }
}

function updateScore() {
    const playerScore = document.getElementById('playerScore');
    const compScore = document.getElementById('computerScore');

    playerScore.textContent = `Your Score: ${myScore}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
}

let myScore = 0;
let computerScore = 0;

const options = document.querySelectorAll('.options');
let result = document.getElementById('result');

options.forEach((option) => {
    option.addEventListener('click', function() {
        const playerSelection = this.value;
        const computerSelection = getComputerChoice();
        result.textContent = `You chose: ${playerSelection} | Computer chose: ${computerSelection}`;
        
        playRound(playerSelection, computerSelection);
        updateScore();
        
        if (myScore === 5 || computerScore === 5) {
            declareWinner();
            result.textContent = '';
            myScore = 0;
            computerScore = 0;
            updateScore();
        }
    });
});

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function() {
    const playerScoreText = document.getElementById('playerScore');
    const computerScoreText = document.getElementById('computerScore');
    myScore = 0;
    computerScore = 0;

    playerScoreText.textContent = 'Your Score: 0';
    computerScoreText.textContent = 'Computer Score: 0';
});