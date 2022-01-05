// arrays to keep score
const playerScore = [];
const pcScore = [];



// pc election
function computerPlay(){
	// random return rock paper scissors
	const array = ['Rock', 'Paper', 'Scissors']
	const choice = array[Math.floor(Math.random()*3)];
	pcScore.push(choice);
	return choice;
	// return pcScore;
}

// player election
function playerPlay(){
	const weapon = prompt('Choose Weapon');
	playerScore.push(weapon);
	return weapon;
}

// round
function playRound(playerSelection, computerSelection){
	if (playerSelection == 'Rock' && computerSelection == 'Rock'){
		alert('Tie!');
	} else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
		alert('PC Wins!');
	} else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
		alert('Player Wins!');
	} else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
		alert('Player Wins!!');
	} else if (playerSelection == 'Paper' && computerSelection == 'Paper'){
		alert('Tie!');
	} else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
		alert('PC Wins!');
	} else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
		alert('Pc Wins!');
	} else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
		alert('Player Wins!');
	} else if (playerSelection == 'Scissors' && computerSelection == 'Scissors'){
		alert('Tie!');
	} else {
		alert('Bruh');
	}
}

// no sé si son necesarias
const pc = computerPlay();
const player = playerPlay();


playRound(player, pc);

console.log(player);
console.log(pc);
console.log(playerScore);
console.log(pcScore);

for (let round = 0; round < 6; round++){

}
