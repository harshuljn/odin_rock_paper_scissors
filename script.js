let choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
	let choiceNumber = Math.floor(Math.random() * 3);
	return choices[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	let result;
	if (playerSelection == computerSelection) {
		result = "draw";
		console.log("Draw");
	} else if (
		(playerSelection == "rock" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "rock")
	) {
		result = playerSelection == "paper" ? "win" : "lose";
		console.log(`You ${result}! Paper beats Rock.`);
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "rock")
	) {
		result = playerSelection == "rock" ? "win" : "lose";
		console.log(`You ${result}! Rock beats Scissors.`);
	} else {
		result = playerSelection == "scissors" ? "win" : "lose";
		console.log(`You ${result}! Scissors beats Paper.`);
	}
	return result;
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerSelection = parseInt(
			prompt("Enter your move:\n1-Rock  2-Paper  3-Scissors")
		);
		let result = playRound(choices[playerSelection - 1], computerPlay());
		if (result == "win") {
			playerScore++;
		} else if (result == "lose") {
			computerScore++;
		}
	}
	if (playerScore > computerScore) {
		console.log("You win the series!!!");
	} else if (computerScore > playerScore) {
		console.log("You lose! Computer wins the series.");
	} else {
		console.log("Draw!");
	}
}

game();
