// function getcomputerChoice
function getcomputerChoice() {
  // create array named computerChoices to hold type string computer choices
  const computerChoices = ["rock", "paper", "scissors"];

  // Random pick element from computerChoices array
  const random = Math.floor(Math.random() * computerChoices.length);

  // assign computer choice to variable choice
  return computerChoices[random];
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

const container = document.querySelector("#container");

const resultDiv = document.querySelector("#result");

const list = document.querySelector("#list");

container.addEventListener("click", (e) => {

  const li = document.createElement("li");

  // Store the result of playRound
  let result;

  switch (e.target.id) {
    case "rock":
      result = playRound("rock", getcomputerChoice());
      break;
    case "paper":
      result = playRound("paper", getcomputerChoice());
      break;
    case "scissors":
      result = playRound("scissors", getcomputerChoice());
      break;
    default:
      return;
  }
  li.textContent = result;
  list.appendChild(li);
});

function displayScore(score) {
  //TODO: Use a list to display score
  const scoreDiv = document.querySelector("#score");
  scoreDiv.textContent = score;
}

let playerScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
  const playerSelection = playerChoice();
  const computerSelection = getcomputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayScore(playerScore, computerScore);
}