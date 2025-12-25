let score = JSON.parse(localStorage.getItem('score'));

if (score === null){ // if (!score) - Because null is a falsy value
score = {
    wins: 0,
    losses:0,
    ties:0
};
localStorage.setItem('score', JSON.stringify(score));

}

updateScoreElement();

function playGame(playerMove){
score = JSON.parse(localStorage.getItem('score'));
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
    result = 'You Lose';
    } else if (computerMove === 'paper') {
    result = 'You Win';
    } else if (computerMove === 'scissors') {
    result = 'Tie';
    }
} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie';
    } else if (computerMove === 'paper') {
    result = 'You Lose';
    } else if (computerMove === 'scissors') {
    result = 'You Win';
    }
} else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You Win';
    } else if (computerMove === 'paper') {
    result = 'Tie';
    } else if (computerMove === 'scissors') {
    result = 'You Lose';
    }
}

if (result === 'You Win') {
    score.wins += 1;
} else if (result === 'You Lose') {
    score.losses += 1;
} else if (result === 'Tie') {
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score)); // (name, string)

updateResultElement(result);

updateScoreElement();

updateMoves(playerMove, computerMove);

}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function updateResultElement(resultElement) {
    document.querySelector('.js-result')
        .innerHTML = `${resultElement}`;
}

function updateMoves(playerMove, computerMove) {  // We can use here these becuase the scope is different
    document.querySelector('.js-moves')
        .innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function resetScore() {
    localStorage.removeItem('score');
    score = {
        wins: 0,
        losses:0,
        ties:0
    };
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
}