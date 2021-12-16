// no sé si son necesarias
const pc = computerPlay();
const player = playerPlay();

// arrays to keep score
// how to push result to arrays and keep them
const playerScore = [];
const pcScore = [];

// pc election
function computerPlay(){
	// random return rock paper scissors
	const array = ['Rock', 'Paper', 'Scissors']
	const choice = array[Math.floor(Math.random()*3)];
	pcScore.push(choice);
	// return choice;
	// return pcScore;
}

// player election
function playerPlay(){
	const weapon = prompt('Choose Weapon');
	playerScore.push(weapon);
	return weapon;
}



function playRound(playerSelection, computerSelection){
	if (playerSelection == 'Rock' && computerSelection == 'Rock'){
		alert('Tie!');
	} else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
		alert('PC Wins!');
	} else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
		alert('Player Wins!');
	} else {
		alert('Bruh');
	}
}


const pc1 = computerPlay();
const player1 = playerPlay();




// arrays!!!





console.log(player);
console.log(pc);
console.log(player1);
console.log(pc1);

playRound(player, pc);
playRound(player1, pc1);
// function game(){
// }
// game();
/////////////////////////////////////////////////////////
// lowercase user input
// do while loop to make 5 matches to win the whole game
