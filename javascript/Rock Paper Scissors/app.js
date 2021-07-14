let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter){
	switch(letter){
		case "r":
			return "rock";
			break;
		case "p":
			return "paper";
			break;
		case "s":
			return "scissors";
			break;
		default:
			return "invalid"
	}
}

function win(user, computer){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore; 
	result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + " and you win";
}

function lose(user, computer){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore; 
	result_p.innerHTML = convertToWord(computer) + " beats " + convertToWord(user) + " and you lose";
}

function draw(user){
	result_p.innerHTML = "You both picked " + convertToWord(user) + " and it is a tie"
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		default:
			draw(userChoice);
	}
}

function main(){
	rock_div.addEventListener('click', function() {
		game("r")
	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})
}

main();