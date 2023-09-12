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

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playerSelection = e.target.value;
    console.log(playerSelection);
  });
});
