function game() {
  playerWins = 0
  computerWins = 0


  console.log(playRound());
  if (result === "player wins") {
    playerWins++;
}
  else if(result === "computer wins") {
    computerWins++;
  }
  console.log(playRound());
  if (result === "player wins") {
    playerWins++;
}
  else if(result === "computer wins") {
    computerWins++;
  }
  console.log(playRound());
  if (result === "player wins") {
    playerWins++;
}
  else if(result === "computer wins") {
    computerWins++;
  }
  console.log(playRound());
  if (result === "player wins") {
    playerWins++;
}
  else if(result === "computer wins") {
    computerWins++;
  }
  console.log(playRound());
  if (result === "player wins") {
    playerWins++;
}
  else if(result === "computer wins") {
    computerWins++;
  }

if (playerWins > computerWins) {
    over = `Player WINS with ${playerWins} over computer's ${computerWins}`;
}
else if (playerWins < computerWins) {
    over = `Player LOSES with ${playerWins} under computer's ${computerWins}`;
}

else {
    over = "It's a draw"
}

return alert(over);

}



function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 10);
  if (randomChoice < 3) {
    choice = 'rock';
  }
  else if(randomChoice >= 3 && randomChoice <= 7) {
    choice = 'paper';
  }
  else {
    choice = 'scissors';
  }
return choice;

}


function playerPick() {
    choice = prompt("What is your choice? Rock, Paper, or Scissors?")
    choice = choice.toLowerCase()
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
}
     
    else {
      choice = prompt("That is not a valid choice! Pick again");
}
  return choice;
}

function playRound() {

  const playerSelection = playerPick();
  const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
    result = "draw"
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
    result = "computer wins"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "player wins"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "computer wins"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "player wins"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "computer wins"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "player wins"
    }
  return result;
}

game();





