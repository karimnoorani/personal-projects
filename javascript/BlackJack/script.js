let userScore = 0;
const userScore_span = document.getElementById("score-number");
const card_space_one_div = document.getElementById("one");
const card_space_two_div = document.getElementById("two");
const card_space_three_div = document.getElementById("three");
const card_space_four_div = document.getElementById("four");
const control_div = document.querySelector(".controls");
const play_button = document.getElementById("play");
const replay_button = document.getElementById("replay");
const end_game_div = document.querySelector(".endgame");
const end_game_p = document.getElementById("endgame-text");
let used_cards = [];
let spaces = [card_space_one_div, card_space_two_div, card_space_three_div, card_space_four_div];
startGame();

function getRandomCard(){
	const card_value_options = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	const card_sign_options = ['C', 'D', 'H', 'S'];
	const card_value = Math.floor(Math.random() * 13);
	const card_sign = Math.floor(Math.random() * 4);
	let card = `${card_value_options[card_value]}${card_sign_options[card_sign]}`;
	return card;
}

function startGame(){
	play_button.addEventListener("click", turnClick);
	replay_button.addEventListener("click", startGame);
	let elem = document.createElement("button");
	elem.setAttribute("id", "end");
	elem.setAttribute("class", "play-end-replay");
	const stop_button = control_div.insertBefore(elem, replay_button);
	stop_button.innerHTML = "Stop";
	stop_button.addEventListener("click", endGame);
	let length = used_cards.length;
	switch(length){
		case 0:
			break;
		case 1:
			card_space_one_div.removeChild(card_space_one_div.firstChild);
			spaces[0] = card_space_one_div;
			break;
		case 2:
			card_space_one_div.removeChild(card_space_one_div.firstChild);
			card_space_two_div.removeChild(card_space_two_div.firstChild);
			spaces[0] = card_space_one_div;
			spaces[1] = card_space_two_div;
			break;
		case 3:
			card_space_one_div.removeChild(card_space_one_div.firstChild);
			card_space_two_div.removeChild(card_space_two_div.firstChild);
			card_space_three_div.removeChild(card_space_three_div.firstChild);
			spaces[0] = card_space_one_div;
			spaces[1] = card_space_two_div;
			spaces[2] = card_space_three_div;
			break;
		case 4:
			card_space_one_div.removeChild(card_space_one_div.firstChild);
			card_space_two_div.removeChild(card_space_two_div.firstChild);
			card_space_three_div.removeChild(card_space_three_div.firstChild);
			card_space_four_div.removeChild(card_space_four_div.firstChild);
			spaces[0] = card_space_one_div;
			spaces[1] = card_space_two_div;
			spaces[2] = card_space_three_div;
			spaces[3] = card_space_four_div;
			break;
		default:
			console.log('error: unkown case for switch statement');
	}
	userScore = 0;
	userScore_span.innerHTML = userScore;
	used_cards.length = 0;
	end_game_div.style.display = "None";
}

function turnClick(){
	let card = getRandomCard();
	if (used_cards.includes(card)){
		turnClick();
	}
	else{
		let length = used_cards.length;
		if (length === 4){
			endGame();
		}
		else if (length === 3){
			let next_space = spaces[length];
			spaces[length] = false;
			used_cards.push(card);
			let elem = document.createElement("img");
			elem.setAttribute("id", card)
			elem.setAttribute("src", `Card pics/${card}.png`);
			elem.setAttribute("height", "200");
			elem.setAttribute("width", "130");
			next_space.appendChild(elem);
			updateUserScore(card);
			endGame();
		}
		else{
			let next_space = spaces[length];
			spaces[length] = false;
			used_cards.push(card);
			let elem = document.createElement("img");
			elem.setAttribute("id", card)
			elem.setAttribute("src", `Card pics/${card}.png`);
			elem.setAttribute("height", "200");
			elem.setAttribute("width", "130");
			next_space.appendChild(elem);
			updateUserScore(card);
		}
	}
}

function updateUserScore(card){
	let char = card.charAt(0);
	switch(char){
		case 'A':
			userScore = userScore + 1;
			userScore_span.innerHTML = userScore;
			break;
		case '2':
			userScore = userScore + 2;
			userScore_span.innerHTML = userScore;
			break;
		case '3':
			userScore = userScore + 3;
			userScore_span.innerHTML = userScore;
			break;
		case '4':
			userScore = userScore + 4;
			userScore_span.innerHTML = userScore;
			break;
		case '5':
			userScore = userScore + 5;
			userScore_span.innerHTML = userScore;
			break;
		case '6':
			userScore = userScore + 6;
			userScore_span.innerHTML = userScore;
			break;
		case '7':
			userScore = userScore + 7;
			userScore_span.innerHTML = userScore;
			break;
		case '8':
			userScore = userScore + 8;
			userScore_span.innerHTML = userScore;
			break;
		case '9':
			userScore = userScore + 9;
			userScore_span.innerHTML = userScore;
			break;
		case '1':
		case 'J':
		case 'Q':
		case 'K':
			userScore = userScore + 10;
			userScore_span.innerHTML = userScore;
			break;
		default:
			console.log('error: not a real card');
	}
	if (userScore > 21) endGame();
}

function endGame(){
	end_game_div.style.display = "block";
	play_button.removeEventListener("click", turnClick);
	control_div.removeChild(document.getElementById("end"));
	if (userScore === 0){
		end_game_p.innerHTML = "You didn't score. Try Again";
	}
	else if (userScore > 0 && userScore < 10){
		end_game_p.innerHTML = `Meh, you got a ${userScore}`;
	}
	else if (userScore >= 10 && userScore < 15){
		end_game_p.innerHTML = `Eh, a ${userScore} is respectable`;
	}
	else if (userScore >= 15 && userScore < 21){
		end_game_p.innerHTML = `Nice. You got a ${userScore}`;
	}
	else if (userScore === 21){
		end_game_p.innerHTML = `Whoa! You got a perfect 21`;
	}
	else{
		end_game_p.innerHTML = `Oh no. You went over 21`;
	}
}