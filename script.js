let choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
	let choiceNumber = Math.floor(Math.random() * 3);
	console.log(`Computer played ${choices[choiceNumber]}`);
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

const rock = document.querySelector("button#rock");
// console.log(rock);
const paper = document.querySelector("button#paper");
// console.log(paper);
const scissors = document.querySelector("button#scissors");
// console.log(scissors);

rock.addEventListener("click", () => playRound("rock", computerPlay()));
paper.addEventListener("click", () => playRound("paper", computerPlay()));
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));
