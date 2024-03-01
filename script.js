// function getcomputerChoice
function getcomputerChoice() {
  // create array named computerChoices to hold type string computer choices
  const computerChoices = ["Rock", "Paper", "Scissors"];

  // Random pick element from computerChoices array
  const random = Math.floor(Math.random() * computerChoices.length);

  // assign computer choice to variable choice
  const choice = computerChoices[random];

  return choice;
}

function playerChoice() {
  // prompt user to enter their choice
  let playerInput = prompt("Please enter your choice: ");
  playerInput = playerInput.toLowerCase();
  // use if statement to check if user entered a valid choice
  while (
    playerInput !== "rock" &&
    playerInput !== "paper" &&
    playerInput !== "scissors"
  ) {
    alert("Please enter a valid choice");
    return playerInput;
  }

  return playerInput;
}

function playRound(playerSelection, computerSelection) {
  for (let i = 0; i < 5; i++) {
    if (playerSelection === computerSelection) {
      alert("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      alert("You won!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      alert("You won!");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      alert("You won!");
    } else {
      alert("You lost!");
    }
  }
}

const playerSelection = playerChoice();
const computerSelection = getcomputerChoice();
