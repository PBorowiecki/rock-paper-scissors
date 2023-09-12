const btns = [...document.querySelectorAll("button")];
const showResult = document.querySelector(".show-result");
const scoreboard = document.querySelector(".scoreboard");

function getComputerChoice() {
  const sign = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * sign.length);
  return sign[index];
}

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let round = 0;

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissors"
  ) {
    if (playerSelection == computerSelection) {
      showResult.textContent = "Draw!";
      round++;
    } else if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ) {
      showResult.textContent = `You win, ${playerSelection} beat ${computerSelection}!`;
      playerScore++;
    } else {
      showResult.textContent = `You lose, ${computerSelection} beat ${playerSelection}!`;
      computerScore++;
    }
  } else {
    alert("Incorrect value. Choose rock, paper or scissors");
  }
  scoreboard.textContent = `Round: ${round} - Player: ${playerScore} - Computer: ${computerScore}`;
}

const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playerSelection = e.target.value;
    playRound(playerSelection, computerSelection);
    // getComputerChoice();
    console.log(playerSelection);
  });
});
