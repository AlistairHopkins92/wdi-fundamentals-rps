////////////////////////////////////////////////
/*              Provided Code                 */
////////////////////////////////////////////////
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
/*            My Code begins Now              */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // A function that takes input from the user and turns it into a move
    return move || getInput();
}

function getComputerMove(move) {
    // A function that takes the random function and turns it into a move
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
    while ((playerWins < 5) && (computerWins < 5)){
        var playerMove =  getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
            if (winner === 'Player'){
                playerWins++;
                console.log("You have chosen " + playerMove + " and the computer chose " + computerMove + " so Player wins.");
            } else if (winner === 'Computer') {
                computerWins++;
                console.log("You have chosen " + playerMove + " and the computer chose " + computerMove +" so the computer wins.");
            } else {
                console.log("You have chosen " + playerMove + " and the computer chose " + computerMove + " so it's a draw.");
            }
            console.log("Player- " + playerWins + "  Computer- " + computerWins + '\n' );
    }
    console.log("The first to 5 Final Score:");
    return [playerWins, computerWins];
}

playToFive();