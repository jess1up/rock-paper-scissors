// Define game choices: ['rock', 'paper', 'scissors']
// Create function to get computer's random choice
// Create function to get player's choice
// Create function to play single round
// Compare choices and determine winner
// Display results
// Handle invalid inputs


const choices = [`Rock`, `Paper`, `Scissors`];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random () * 3);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let playerSelection = prompt(`Choose Rock, Paper, or Scissors:`).toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    const playerLower = playerSelection.toLowerCase();
    const computerLower = computerSelection.toLowerCase();
    
    if (playerLower === computerLower) {
        return `It's a tie!`;
    } else if (
        (playerLower === 'rock' && computerLower === 'scissors') ||
        (playerLower === 'paper' && computerLower === 'rock') ||
        (playerLower === 'scissors' && computerLower === 'paper')
    ) {
        humanScore++;
        return `You win! ${capitalizeFirst(playerSelection)} beats ${capitalizeFirst(computerSelection)}`;
    } else {
        computerScore++;
        return `You lose! ${capitalizeFirst(computerSelection)} beats ${capitalizeFirst(playerSelection)}`;
    }
}

function playGame() {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));

    if (humanScore > computerScore) {
        console.log(`You win! ${humanScore}-${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`GAME OVER! ${humanScore}-${computerScore}`);
    } else {
        console.log(`It's a tie! ${humanScore}-${computerScore}`);
    }
}