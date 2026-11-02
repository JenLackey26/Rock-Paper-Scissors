//connect JS to HTML elements
const gameForm = document.querySelector("#gameForm");
const userChoice = document.querySelector("#userChoice");
const results = document.querySelector("#results");
const playAgainArea = document.querySelector("#playAgain");

//computer randomly chooses rock, paper, or scissors
const getComputerChoice = () => {
	const choices = ["rock", "paper", "scissors"];

	const randomNumber = Math.floor(Math.random() * 3);

	return choices[randomNumber];
};

//determines who wins
const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return "It's a tie!";
	}

	if (
		(userChoice === "rock" && computerChoice === "scissors") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissors" && computerChoice === "paper")
	) {
		return "You win!";
	}

	return "You lose!";
};

//display the game results
const displayResults = (userChoice, computerChoice, result) => {
	results.innerHTML = `
    <h2>Game Results</h2>
    <p>Your choice: ${userChoice}</p>
    <p>Computer's choice: ${computerChoice}</p>
    <h3>${result}</h3>
  `;
};

//give the player the option to play again
const playAgain = () => {
	playAgainArea.innerHTML = `
    <h3>Would you like to play again?</h3>
    <button id="yesButton" type="button">Yes, play again!</button>
    <button id="noButton" type="button">No, I'm finished!</button>
  `;

	//if the player chooses Yes
	document.querySelector("#yesButton").addEventListener("click", () => {
		playAgainArea.innerHTML = "";
		results.innerHTML = "";
		userChoice.value = "rock";
	});

	//if the player chooses No
	document.querySelector("#noButton").addEventListener("click", () => {
		playAgainArea.innerHTML = "<h2>Thanks for playing! Goodbye!</h2>";
		gameForm.querySelector("button[type='submit']").disabled = true;
		userChoice.disabled = true;
	});
};

//listens for the player submitting the form
gameForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const playerChoice = userChoice.value;

	const computerChoice = getComputerChoice();

	const result = determineWinner(playerChoice, computerChoice);

	displayResults(playerChoice, computerChoice, result);

	console.log("Your choice:", playerChoice);
	console.log("Computer's choice:", computerChoice);
	console.log("Winner:", result);

	playAgain();
});
