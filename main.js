let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  const option = prompt("Enter your option to play (rock, paper, scissors):");

  return option.trim().toLowerCase();
}

function getComputerChoice() {
  const option = Math.floor(Math.random() * 3);

  if(option === 0) return "rock";
  if(option === 1) return "paper";
  if(option === 2) return "scissors";
}

function playRound(human, computer) {
  if(
    human === "rock" && computer === "scissors" ||
    human === "paper" && computer === "rock" ||
    human === "scissors" && computer === "paper"
  ) {
    humanScore++;
    console.log(`Human choice: ${human} and computer choice: ${computer}, human win!. Human score: ${humanScore}.`);
  } else if(human === computer) {
    console.log(`Human choice: ${human} and computer choice: ${computer}. It's a tie.`);
  } else {
    computerScore++;
    console.log(`Human choice: ${human} and computer choice: ${computer}, computer win!. Computer score: ${computerScore}.`);
  }
}

while(true) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  if(humanScore === 3) {
    console.log(`¡Human win!, Score: ${humanScore} - ${computerScore}`);
    break;
  }

  if(computerScore === 3) {
    console.log(`Computer win!, Score: ${computerScore} - ${humanScore}`);
    break;
  }
}