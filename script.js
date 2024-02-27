// function getcomputerChoice
function getcomputerChoice() {
    
    // create array named computerChoices to hold type string computer choices
    const computerChoices = ["Rock", "Paper", "Scissors"];

    // Random pick element from computerChoices array
    let random = Math.floor(Math.random() * computerChoices.length);

    // assign computer choice to variable choice
    const choice = computerChoices[random]

    return choice
}


// function playerChoice

    // create string variable named playerInput with initial value of "" to hold players choice

    // prompt user to enter their choice

    // use if statement to check if user entered a valid choice

    // assign player choice to variable playerInput

    // return playerInput

