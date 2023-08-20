function getComputerChoice() {
  const sign = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * sign.length);
  return sign[index];
}

const playerSelection = prompt(
  "What is your choice?",
  "rock, paper, scissors"
).toLowerCase();
