const config = {
	rounds: 5,

	rules: {
		rock: {
			rock: 'tie',
			paper: 'loss',
			scissors: 'win',
		},
		paper: {
			rock: 'loss',
			paper: 'tie',
			scissors: 'win',
		},
		scissors: {
			rock: 'loss',
			paper: 'win',
			scissors: 'tie',
		},
	},

	messages: {
		tie: 'Tie!',
		win: 'Player Wins!',
		loss: 'PC Wins!',
	},
}


const main = () => {
	// arrays to keep choices made
	const playerChoiceList = []
	const pcChoiceList = []

	// counters to keep score
	// i used const and didn't work
	let playerScore = 0
	let pcScore = 0

	for (let i = 0; i < config.rounds; ++i) {
		const
			playerChoice = playerPlay(),
			computerChoice = computerPlay(),
			result = playRound(playerChoice, computerChoice)

		console.log(playerChoice, computerChoice)

		pcChoiceList.push(playerChoice)
		playerChoiceList.push(computerChoice)

		if (result == 'error') {
			alert('Bruh!')
			--i
		} else if (result == 'win')
			playerScore++
		else if (result == 'loss')
			pcScore++

		alert(config.messages[result])
	}

	if (playerScore > pcScore)
		alert('U badass!!')
	else if (playerScore < pcScore)
		alert('Randomness got u.')
	else
		alert('In the end everybody dies')

	console.log(playerChoiceList, pcChoiceList)
}

// pc election function
const computerPlay = () => {
	// random return rock paper scissors
	const array = ['rock', 'paper', 'scissors']
	const choice = array[Math.floor(Math.random()*3)]
	return choice
}

// player election function
const playerPlay = () =>
	prompt('Choose Weapon') || ''

// match
const playRound = (playerSelection, computerSelection) => {
	const result =
		(config.rules[playerSelection.toLowerCase()] || {})[computerSelection.toLowerCase()]

	if (!result)
		return 'error'

	return result
}

main()


///////////////////////////////////////////////////////////////
// ################ TO DO ################
// - simplify everything

///////////////////////////////////////////////////////////////
// ################ NOTES ################
// When pressed 'Ok' on the prompt, result is "" in array
// When pressed 'Cancel', result is null
