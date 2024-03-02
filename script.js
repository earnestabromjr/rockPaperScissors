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
  if (playerSelection === computerSelection) {
    const result = "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    const result = "You won!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    const result = "You won!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    const result = "You won!";
  } else {
    const result = "You lost!";
  }
  return result;
}

const playerSelection = playerChoice();
const computerSelection = getcomputerChoice();
let amountOfRounds = 5;
for (let i = 0; i < amountOfRounds; i++) {
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
}
