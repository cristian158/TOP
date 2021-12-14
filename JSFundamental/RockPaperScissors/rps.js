function computerPlay(){
	// random return rock paper scissors
	const array = ['Rock', 'Paper', 'Scissors']
	const choice = array[Math.floor(Math.random()*3)];
	return choice;
}

function playerPlay(){
	const weapon = prompt('Choose Weapon');
	return weapon;
}

const pc = computerPlay();
const player = playerPlay();

function playRound(playerSelection, computerSelection){
	if (playerSelection == 'Rock' && computerSelection == 'Rock'){
		alert('Tie!');
	} else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
		alert('PC Wins!');
	} else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
		alert('Player Wins!');
	}
}

// if (choice == 'Rock' && weapon == 'Rock'){
// 	alert('tie');
// }

console.log(player);
console.log(pc);
// const game = 0;
// while (game )
playRound(player, pc);


/////////////////////////////////////////////////////////
// lowercase user input
// do while loop to make 5 matches to win the whole game
