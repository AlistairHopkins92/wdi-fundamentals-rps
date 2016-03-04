////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove = "";
var computerMove = "";
var winner = "";

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    return move || getInput();

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    return move || randomPlay();

}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "draw";
    } else if  (((playerMove === 'paper')&&(computerMove === 'rock')) ||
                ((playerMove === 'scissors')&&(computerMove === 'paper')) ||
                ((playerMove === 'rock')&&(computerMove === 'scissors'))) {
        winner = 'Player';
    } else {
        winner = 'Computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}