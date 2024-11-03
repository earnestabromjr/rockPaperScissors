let playerScore = 0;
let computerScore = 0;
// function getComputerChoice
function getComputerChoice() {
  // create array named computerChoices to hold type string computer choices
  const computerChoices = ["rock", "paper", "scissors"];

  // Random pick element from computerChoices array
  const random = Math.floor(Math.random() * computerChoices.length);

  // assign computer choice to variable choice
  return computerChoices[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
  ) {
      playerScore++;
      return "You won!";
    }
  else {
    computerScore++;
    return "You lost!";
  }
}

function updateDisplay(playerSelection, computerSelection, result) {
  document.getElementById(('player-choice').textContent = playerSelection;
  document.getElementById('computer-choice').textContent = computerSelection;
  document.getElementById('result').textContent = result;
  document.getElementById('score').textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function playGame(playerSelection) {
  const computerChoice = getComputerChoice();
  const result = playRound(playerSelection, computerChoice);
  updateDisplay(playerSelection, computerChoice, result);
}
