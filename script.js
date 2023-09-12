const btns = [...document.querySelectorAll("button")];
const showResult = document.querySelector(".show-result");

function getComputerChoice() {
  const sign = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * sign.length);
  return sign[index];
}

let playerSelection = "";

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissors"
  ) {
    if (playerSelection == computerSelection) {
      showResult.textContent = "Draw!";
    } else if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ) {
      showResult.textContent = `You win, ${playerSelection} beat ${computerSelection}!`;
    } else {
      showResult.textContent = `You lose, ${computerSelection} beat ${playerSelection}!`;
    }
  } else {
    alert("Incorrect value. Choose rock, paper or scissors");
  }
}

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playerSelection = e.target.value;
    playRound(playerSelection, computerSelection);
    getComputerChoice();
    console.log(playerSelection);
  });
});
