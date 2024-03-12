function getComputerChoice (){
    let randomChoice=Math.floor(Math.random()*3);
    if (randomChoice===0) {
        return rock;
    }
    else if (randomChoice ===1) {
        return paper;
    }
    else{
        return scissors;
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==="rock") {
        if (computerSelection===rock) {
            return "Tie!";
        }
        else if (computerSelection===paper) {
            return "You lose! Paper beats Rock";
        }

        else {
            return "You win! Rock beats Scissors";
        }
    }

    else if (playerSelection==="paper") {
        if (computerSelection===rock) {
            return "You win! Paper beats Rock!";
        }
        else if (computerSelection===paper){
            return "Tie!";
        }
        else {
            return "You lose! Scissors beats Paper!";
        }
    }

    else if (playerSelection==="scissors") {
        if (computerSelection===rock) {
            return "You lose! Rock beats Scissors";
        }
        else if (computerSelection===paper) {
            return "You win! Scissors beats Paper!";
        }
        else {
            return "Tie!"
        }

        
    }

    else {
        return "Please enter Rock Paper or Scissors"
    }


}

/*function playGame () {
    let playerScore=0;
    let computerScore=0;
    let result = "";
    while (playerScore<3 && computerScore<3) {
        let pr=prompt("Rock Paper Scissors", "");
        result = playRound(pr,getComputerChoice());
    if (result.includes("win")=== true) {
        playerScore+=1;
        console.log ("win");
    }

    else if (result.includes("lose")=== true) {
        computerScore+=1;
        console.log ("lose");

    }

    else if (result.includes("Tie")=== true) {
        console.log ("Tie!");
    }

    else {
        console.log ("Invalid value");
    }


}
return "Player Score: " + playerScore + " Computer Score: " + computerScore;   
}
*/

function updateScore (result) {
    
    winnerDiv.textContent = "";
    if (result.includes("win")) {
        playerScore+=1;
    }

    else if (result.includes("lose")) {
        computerScore+=1;

    }
    playerDiv.textContent = `Player score: ${playerScore}`;
    computerDiv.textContent = `Computer score: ${computerScore}`;
    if (playerScore>4) {
        winnerDiv.textContent = "You win!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore > 4) {
        winnerDiv.textContent = "You lose!";
        playerScore = 0;
        computerScore = 0;
    }
}
    

let rock="rock";
let paper="paper";
let scissors="scissors"
let playerScore=0;
let computerScore=0;

const buttons = document.querySelectorAll("button");
const currentResult = document.querySelector(".result");
const playerDiv = document.querySelector(".playerScore");
const computerDiv = document.querySelector(".computerScore");
const winnerDiv = document.querySelector(".winner");
for (btn of buttons) {
    btn.addEventListener("click", e => {
        currentResult.textContent = playRound(e.target.textContent, getComputerChoice());
        updateScore(currentResult.textContent);
    });
}





