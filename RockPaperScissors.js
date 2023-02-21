function rockPaperScissors(playerTurn) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    const computerscore = 0;
    const playerScore = 0;

    let computerMove = "";
    let computerRandonNum = Math.floor(Math.random() * 3) + 1;

    if (playerTurn === "r" || playerTurn === "Rock" ||playerTurn === "rock" ) {
        playerTurn = rock;
    }
    else if (playerTurn === "p" || playerTurn === "Paper"||playerTurn ==='paper') {
        playerTurn = paper;
    }
    else if (playerTurn === "s" || playerTurn === "Scissors"||playerTurn ==="scissors") {
        playerTurn = scissors;
    }
    else {
        console.log("Invalid input. Try Again...");
        return
    }

    console.log(`%cYou choose ${playerTurn}!`,"color: purple")

    switch (computerRandonNum) {
        case 1:
            computerMove = "Rock";
            ; break;

        case 2:
            computerMove = "Paper";
            ; break;
        case 3:
            computerMove = "Scissors";
            ; break;
    }

    console.log(`%cThe computer chooses ${computerMove}!`, 'color: blue')

    if ((playerTurn === rock && computerMove === scissors) ||
        (playerTurn === paper && computerMove === rock) ||
        (playerTurn === scissors && computerMove === paper)) {
        console.log("%cYou win!",'color: green')
    } else if ((playerTurn === rock && computerMove === paper) ||
        (playerTurn === paper && computerMove === scissors) ||
        (playerTurn === scissors && computerMove === rock)) {
        console.log("%cYou lose!",'color: red');
    } else {
        console.log("%cDraw!",'color: yellow');
    }
    
}

rockPaperScissors("paper")
