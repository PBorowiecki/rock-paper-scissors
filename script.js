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

  if (playerScore == 5) {
    showResult.textContent = `Congratulations, you won! You get 5 points`;
    playerSelection = "";
    playerScore = 0;
    computerScore = 0;
    round = 1;
  } else if (computerScore == 5) {
    showResult.textContent = `Unfortunately you lost, the computer scores 5 points`;
    playerSelection = "";
    playerScore = 0;
    computerScore = 0;
    round = 1;
  }
}

const computerSelection = getComputerChoice();

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playerSelection = e.target.value;
    playRound(playerSelection, computerSelection);

    console.log(playerSelection);
  });
});
