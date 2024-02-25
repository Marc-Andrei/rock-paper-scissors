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

function rps (playerSelection, computerSelection) {
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

function playGame () {
    let playerScore=0;
    let computerScore=0;
    let result = "";
    while (playerScore<3 && computerScore<3) {
        let pr=prompt("Rock Paper Scissors", "");
        result = rps(pr,getComputerChoice());
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

let rock="rock";
let paper="paper";
let scissors="scissors"


console.log(playGame ());


