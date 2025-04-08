function $(e) { return document.querySelector(e) };

const hScore = $(".human-score");
const cScore = $(".computer-score");
const buttons = $(".buttons");
const restartBtn = $(".restart-btn");
const context = $(".context");
const overlay = $(".overlay");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

buttons.addEventListener("click", (e) => {
  const humanChoice = e.target.value;
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
});

restartBtn.addEventListener("click", () => {
  window.location.reload();
});

function playRound(human, computer) {
  if(
    human === "rock" && computer === "scissors" ||
    human === "paper" && computer === "rock" ||
    human === "scissors" && computer === "paper"
  ) {
    humanScore++;
    isWinner();
    hScore.textContent = humanScore;
    context.textContent = `Human choice: ${human} and computer choice: ${computer}, human win!.`;
  } else if(human === computer) {
    context.textContent = `Human choice: ${human} and computer choice: ${computer}. It's a tie.`;
  } else {
    computerScore++;
    isWinner();
    cScore.textContent = computerScore;
    context.textContent = `Human choice: ${human} and computer choice: ${computer}, computer win!.`;
  }
}

function isWinner() {
  if(humanScore === 3) {
    overlay.style.display = "flex";
  }

  if(computerScore === 3) {
    overlay.style.display = "flex";
  }
}