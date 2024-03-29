// function getcomputerChoice
function getcomputerChoice() {
  // create array named computerChoices to hold type string computer choices
  const computerChoices = ["rock", "paper", "scissors"];

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
    continue; // skip the rest of the code in the loop and move back to the beginning
  }

  return playerInput;
}
function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You won!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You won!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You won!";
  } else {
    result = "You lost!";
  }
  return result;
}

// set number of rounds to play
const rounds = 5;

// keep track of the number of rounds played
let round = 1;

// prompt user to play again
while (round <= rounds) {
  // call playerChoice and getcomputerChoice functions
  const playerSelection = playerChoice();
  const computerSelection = getcomputerChoice();
  const result = playRound(playerSelection, computerSelection);

  console.log(result);

  // increment the round counter
  round++;
}

// prompt user to enter their choice again
playerInput = playerChoice();
