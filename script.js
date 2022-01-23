let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	let choiceNumber = Math.floor(Math.random() * 3);
	document.querySelector(
		"#computer"
	).textContent = `Computer played ${choices[choiceNumber]}`;
	return choices[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	const results = document.querySelector("#results");
	let result;
	if (playerSelection == computerSelection) {
		result = "draw";
		results.textContent = "Draw";
	} else if (
		(playerSelection == "rock" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "rock")
	) {
		result = playerSelection == "paper" ? "win" : "lose";
		results.textContent = `You ${result}! Paper beats Rock.`;
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "rock")
	) {
		result = playerSelection == "rock" ? "win" : "lose";
		results.textContent = `You ${result}! Rock beats Scissors.`;
	} else {
		result = playerSelection == "scissors" ? "win" : "lose";
		results.textContent = `You ${result}! Scissors beats Paper.`;
	}
	return result;
}

const rock = document.querySelector("button#rock");
const paper = document.querySelector("button#paper");
const scissors = document.querySelector("button#scissors");

function displayResult(result) {
	playerScore = 0;
	computerScore = 0;
	const h1 = document.querySelector("h1");
	h1.textContent = result;
}

function playGame(playerMove) {
	document.querySelector("h1").textContent = "";
	let result = playRound(playerMove, computerPlay());
	if (result == "win") {
		playerScore++;
		if (playerScore == 5) {
			displayResult("WIN");
		}
	} else if (result == "lose") {
		computerScore++;
		if (computerScore == 5) {
			displayResult("LOSE");
		}
	}
	console.log(`${playerScore}:${computerScore}`);
}

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));
