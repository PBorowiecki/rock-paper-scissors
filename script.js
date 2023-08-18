function getComputerChoice() {
  const sign = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * sign.length);
  return sign[index];
}
