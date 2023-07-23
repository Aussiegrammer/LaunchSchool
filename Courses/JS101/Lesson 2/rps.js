const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const BEAT_BY_ROCK = ['scissors', 'lizard'];
const BEAT_BY_PAPER = ['rock', 'spock'];
const BEAT_BY_SCISSORS = ['paper', 'lizard'];
const BEAT_BY_LIZARD = ['paper', 'spock'];
const BEAT_BY_SPOCK = ['scissors', 'rock'];

function prompt(message)  {
  console.log(`=> ${message}`);
}

function evaluateGame(player, opponent) {
  if ((player === 'rock' && BEAT_BY_ROCK.includes(opponent))     ||
      (player === 'paper' && BEAT_BY_PAPER.includes(opponent))   ||
      (player === 'scissors' && BEAT_BY_SCISSORS.includes(opponent))) {
    return true;
  } else return false;
}

function displayChoices(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
}

function displayWinner(player, computer) {
  if (evaluateGame(player, computer)) {
    prompt("You win!");
  } else if (evaluateGame(computer, player))  {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

gameState = true;

while (gameState) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayChoices(choice, computerChoice);
  displayWinner(choice, computerChoice);

  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    gameState = null;
  }
}