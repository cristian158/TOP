// arrays to keep score
const playerChoice = [];
const pcChoice = [];

// i used const and didn't work
let playerScore = 0;
let pcScore = 0;

// pc election
function computerPlay(){
	// random return rock paper scissors
	const array = ['Rock', 'Paper', 'Scissors']
	const choice = array[Math.floor(Math.random()*3)];
	pcChoice.push(choice);
	return choice;
}

// player election
function playerPlay(){
	const weapon = prompt('Choose Weapon');
	playerChoice.push(weapon);
	return weapon;
}

// round
function playRound(playerSelection, computerSelection){
	if (playerSelection == 'Rock' && computerSelection == 'Rock'){
		alert('Tie!');
	} else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
		alert('PC Wins!');
		pcScore++;
	} else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
		alert('Player Wins!');
		playerScore++;
	} else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
		alert('Player Wins!!');
		playerScore++;
	} else if (playerSelection == 'Paper' && computerSelection == 'Paper'){
		alert('Tie!');
	} else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
		alert('PC Wins!');
		pcScore++;
	} else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
		alert('Pc Wins!');
		pcScore++;
	} else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
		alert('Player Wins!');
		playerScore++;
	} else if (playerSelection == 'Scissors' && computerSelection == 'Scissors'){
		alert('Tie!');
	} else {
		alert('Bruh');
	}
}


playRound(computerPlay(), playerPlay());
playRound(computerPlay(), playerPlay());
playRound(computerPlay(), playerPlay());
playRound(computerPlay(), playerPlay());
playRound(computerPlay(), playerPlay());





for (let round = 0; round < 6; round++){

}


///////////////////////////////////////////////////////////////
// When pressed 'Ok' on the prompt, result is "" in array
// When pressed 'Cancel', result is null
