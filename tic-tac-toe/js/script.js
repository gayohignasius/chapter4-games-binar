const box = document.querySelectorAll('.box');
const restart = document.querySelector('.restart');
const cross = 'cross';
const circle = 'circle';
const disabled = 'disabled';
const gameOverElement = document.querySelector('.game-over');
const gameOverText = document.querySelector('.game-over-text');
let isCrossPlayerTurn = false;

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

start();
restart.addEventListener('click', start);

function start() {
  isCrossPlayerTurn = true;
  box.forEach(box => {
    const removeCrossPlayer = box.classList.remove(cross, disabled);
    const removeCirclePlayer = box.classList.remove(circle, disabled);
    box.addEventListener('click', handleClick, { once: true });
    gameOverElement.classList.remove('visible');
  })
}

function restartGame() {
  start();
}

function handleClick(e) {
  const boxTarget = e.target;
  const currentClass = isCrossPlayerTurn ? cross : circle;
  placeMark(boxTarget, currentClass);
  if (checkWinning(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurn();
  }
}

function placeMark(box, currentClass) {
  box.classList.add(currentClass, disabled);
}

function swapTurn() {
  isCrossPlayerTurn = !isCrossPlayerTurn;
}

function checkWinning(currentClass) {
  return winningCombination.some(comb => {
    return comb.every(id => {
      return box[id].classList.contains(currentClass);
    })
  })
}

function endGame(draw) {
  if (draw) {
    gameOverText.innerText = "Draw!"
  } else {
    gameOverText.innerText = `Player ${isCrossPlayerTurn ? cross : circle} wins!`;
  }
  gameOverElement.classList.add('visible');
  if (gameOverElement) {
    box.forEach(box => {
      box.removeEventListener('click', handleClick);
    })
  }
}

function isDraw() {
	return [...box].every(box => {
    return box.classList.contains(cross) || box.classList.contains(circle);
	})
}