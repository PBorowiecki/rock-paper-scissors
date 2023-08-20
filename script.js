function getComputerChoice() {
  const sign = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * sign.length);
  return sign[index];
}

const playerSelection = prompt(
  "What is your choice?",
  "rock, paper, scissors"
).toLowerCase();

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissors"
  ) {
    if (playerSelection == computerSelection) {
      alert("Draw!");
    } else if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ) {
      alert(`You win, ${playerSelection} beat ${computerSelection}!`);
    } else {
      alert(`You lose, ${computerSelection} beat ${playerSelection}!`);
    }
  } else {
    alert("Incorrect value. Choose rock, paper or scissors");
  }
}

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
