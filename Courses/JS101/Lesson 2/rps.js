const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const CHOICE_SHORTCUTS = ['r', 'p', 'sc', 'l', 'sp', 's'];
const BEAT_BY_ROCK = ['scissors', 'lizard'];
const BEAT_BY_PAPER = ['rock', 'spock'];
const BEAT_BY_SCISSORS = ['paper', 'lizard'];
const BEAT_BY_LIZARD = ['paper', 'spock'];
const BEAT_BY_SPOCK = ['scissors', 'rock'];

function prompt(message)  {
  console.log(`=> ${message}`);
}

function clearScreen() {
  console.clear();
}

function welcomeMessage() {
  prompt("Welcome to Rock, Paper, Scissors! (Feat. Lizard & Spock!)");
}

function printLine() {
  prompt('--------------------------------------');
}

function getPlayerChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  if (choice === 's') {
    prompt("Did you mean (sc)issors or (sp)ock?");
    choice = readline.question();
  }

  while (!validatePlayerChoice(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  choice = sanitizePlayerChoice(choice);
  return choice;
}

function validatePlayerChoice(choice) {
  if ((VALID_CHOICES.includes(choice)) ||
      (CHOICE_SHORTCUTS.includes(choice))) {
    return true;
  } else {
    return false;
  }
}

function sanitizePlayerChoice(choice) {
  if (CHOICE_SHORTCUTS.includes(choice)) {
    return VALID_CHOICES.find(element => element.includes(choice));
  } else return choice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function evaluateGame(player, opponent) {
  if ((player === 'rock' && BEAT_BY_ROCK.includes(opponent))     ||
      (player === 'paper' && BEAT_BY_PAPER.includes(opponent))   ||
      (player === 'lizard' && BEAT_BY_LIZARD.includes(opponent)) ||
      (player === 'spock' && BEAT_BY_SPOCK.includes(opponent))   ||
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

function tallyScore(player, computer, playerScore, computerScore) {
  if (evaluateGame(player, computer)) {
    return playerScore++;
  } else if (evaluateGame(computer, player)) {
    return computerScore++;
  }
}

function playAgainPrompt() {
  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function runGame() {
  printLine();

  while (true) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    displayChoices(playerChoice, computerChoice);
    displayWinner(playerChoice, computerChoice);

    printLine();

    if (playAgainPrompt() === 'n') break;
    clearScreen();
  }
}

clearScreen();
welcomeMessage();
runGame();

