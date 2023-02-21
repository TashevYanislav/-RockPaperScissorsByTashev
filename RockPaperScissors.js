function rockPaperScissors(playerTurn) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let computerMove = "";
    let computerRandonNum = Math.floor(Math.random() * 3) + 1;

    if (playerTurn === "r" || playerTurn === "Rock") {
        playerTurn = rock;
    }
    else if (playerTurn === "p" || playerTurn === "Paper") {
        playerTurn = paper;
    }
    else if (playerTurn === "s" || playerTurn === "Scissors") {
        playerTurn = scissors;
    }
    else {
        console.log("Invalid input. Try Again...");
        return
    }

    console.log(`You choose ${playerTurn}!`)

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

    console.log(`The computer chooses ${computerMove}!`)

    if ((playerTurn === rock && computerMove === scissors) ||
        (playerTurn === paper && computerMove === rock) ||
        (playerTurn === scissors && computerMove === paper)) {
        console.log("You win!")
    } else if ((playerTurn === rock && computerMove === paper) ||
        (playerTurn === paper && computerMove === scissors) ||
        (playerTurn === scissors && computerMove === rock)) {
        console.log("You lose!");
    } else {
        console.log("Draw!");
    }
}
rockPaperScissors("p")