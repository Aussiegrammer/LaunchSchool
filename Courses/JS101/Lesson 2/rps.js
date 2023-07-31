const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const CHOICE_SHORTCUTS = ['r', 'p', 'sc', 'l', 'sp', 's'];
const BEAT_BY_ROCK = ['scissors', 'lizard'];
const BEAT_BY_PAPER = ['rock', 'spock'];
const BEAT_BY_SCISSORS = ['paper', 'lizard'];
const BEAT_BY_LIZARD = ['paper', 'spock'];
const BEAT_BY_SPOCK = ['scissors', 'rock'];
const SCORE_TO_WIN = 3;

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
    choice = readline.question().toLowerCase();
  }

  while (!validatePlayerChoice(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  choice = sanitizePlayerChoice(choice);
  return choice;
}

function validatePlayerChoice(choice) {
  let validChoice = VALID_CHOICES.includes(choice);
  let validShortcut = CHOICE_SHORTCUTS.includes(choice);
  return (validChoice || validShortcut);
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

function displayRoundWinner(player, computer) {
  if (evaluateGame(player, computer)) {
    prompt("You win the round!");
  } else if (evaluateGame(computer, player))  {
    prompt("Computer wins the round!");
  } else {
    prompt("It's a tie!");
  }
}

function tallyPlayerScore(player, computer) {
  if (evaluateGame(player, computer)) {
    return  true;
  } else return false;
}

function tallyComputerScore(player, computer) {
  if (evaluateGame(computer, player)) {
    return true;
  } else return false;
}

function displayScore(playerScore, computerScore) {
  prompt(`The score is -> Player: ${playerScore} | Computer: ${computerScore}`);
}

function checkScore(score) {
  if (score >= SCORE_TO_WIN) {
    return true;
  } else {
    return false;
  }
}

function displayGrandWinner(playerScore, computerScore) {
  if (checkScore(playerScore)) {
    prompt("You win the game!");
  } else if (checkScore(computerScore)) {
    prompt("Computer wins the game!");
  }
}

function checkGameOver(playerScore, computerScore) {
  if (checkScore(playerScore)) {
    return true;
  } else if (checkScore(computerScore)) {
    return true;
  } else {
    return false;
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

function runRounds() {
  let playerScore = 0;
  let computerScore = 0;

  while (true) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    displayChoices(playerChoice, computerChoice);
    displayRoundWinner(playerChoice, computerChoice);

    if (tallyPlayerScore(playerChoice, computerChoice)) {
      playerScore++;
    } else if (tallyComputerScore(playerChoice, computerChoice)) {
      computerScore++;
    }

    displayScore(playerScore, computerScore);

    displayGrandWinner(playerScore, computerScore);
    printLine();
    if (checkGameOver(playerScore, computerScore)) break;
  }
}

function runGame() {
  printLine();
  while (true) {
    runRounds();
    if (playAgainPrompt() === 'n') break;
    clearScreen();
  }
}

clearScreen();
welcomeMessage();
runGame();