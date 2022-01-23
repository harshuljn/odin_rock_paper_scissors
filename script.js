let choices = ["Rock", "Paper", "Scissors"];

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

rock.addEventListener("click", () => playRound("rock", computerPlay()));
paper.addEventListener("click", () => playRound("paper", computerPlay()));
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));
