//refactor code to be more efficient by using objects to group variables
const playerOne = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

const playerTwo = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset')
const selectWinningScore = document.querySelector('#playingto')


let winningScore = 3;
let isGameOver = false

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true
      //style for winner and has-text-danger
      player.display.classList.add('has-text-success')
      opponent.display.classList.add('has-text-danger')
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

playerOne.button.addEventListener('click', function () {
  updateScores(playerOne, playerTwo)
})

playerTwo.button.addEventListener('click', function () {
  updateScores(playerTwo, playerOne)
})

selectWinningScore.addEventListener('change', function () {
  //note that this.value is taken from the value attribute of option in the html
  winningScore = parseInt(this.value);
  reset();
})

resetButton.addEventListener('click', reset)

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('has-text-success', 'has-text-danger')
  p2Display.classList.remove('has-text-success', 'has-text-danger')
  p1Button.disabled = false;
  p2Button.disabled = false;
}