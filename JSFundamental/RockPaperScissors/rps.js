function computerPlay(){
	// random return rock paper scissors
	const array = ['Rock', 'Paper', 'Scissors']
	const choice = array[Math.floor(Math.random()*3)];
	return choice;
}
console.log(computerPlay());

function playerPlay(){
	const weapon = prompt('Choose Weapon');
	return weapon;
}

playerPlay();

function playRound(playerSelection, computerSelection){

}



// lowercase user input
// 
