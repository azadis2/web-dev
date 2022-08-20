let yourScore = 0;
let computerScore = 0;
let i = 0;
let speed = 50;

const buttons = document.querySelectorAll('rps');
document.getElementById('rps').value = 'rock';




// randomHand should give us either Rock, Paper or scissors on a purely random basis
function randomHand(){
    // returns a random number between 0 to 2
    randomNum = Math.floor(Math.random() * 3 )

    if (randomNum == 0) {
        return "Rock";
    } else if (randomNum == 1) {
        return "Paper";
    } else if (randomNum == 2){
        return "Scissors";
    }
}
function playRound(value) {
    let playerSelection = value.toLowerCase();
    result = "";
    
    let computerSelection = randomHand().toLowerCase();
    result = `<h1><br>Computer chose ${computerSelection[0].toUpperCase() + computerSelection.slice(1) } <br></h1>`
    if (yourScore == 5 && computerScore != 5) {
        result +=(`<br> Congrats you win the game!`)
        yourScore = 0
        computerScore = 0
        document.getElementById('result').innerHTML = result;
        return;
    } else if (computerScore == 5 && yourScore != 5) {
        result +=(`<br>You lost this game!`)
        yourScore = 0
        computerScore = 0
        document.getElementById('result').innerHTML = result;
        return ;
    }
    

    if (playerSelection === computerSelection) {
        result += (`<h3>Your Score: ${yourScore} <br> Computer's Score: ${computerScore}</h3>`)
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection ==="paper")) {
        if (computerScore > 5 || yourScore > 5) {
            computerScore = 0;
            yourScore = 0;
        } else {
            yourScore += 1;
            result += (`<h3>Your Score: ${yourScore} <br> Computer's Score: ${computerScore}</h3>`)
        }
    
    } else{
        
        if (computerScore > 5 || yourScore > 5) {
            computerScore = 0;
            yourScore = 0;
        } else {
            computerScore += 1;
            result += (`<h3>Your Score: ${yourScore} <br> Computer's Score: ${computerScore}</h3>`)
        } 
    }
    document.getElementById('result').innerHTML = result;
    return;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
})








