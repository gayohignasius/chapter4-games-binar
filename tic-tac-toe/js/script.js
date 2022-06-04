const box = document.querySelectorAll('.box');
const restart = document.getElementById('restart');
const cross = 'cross';
const circle = 'circle';
const disabled = 'disabled';
let isCrossPlayerTurn = false;

start();
restart.addEventListener('click', restartGame);

function start() {
  isCrossPlayerTurn = true;
  box.forEach(box => {
    const removeCrossPlayer = box.classList.remove(cross, disabled);
    const removeCirclePlayer = box.classList.remove(circle, disabled);
    box.addEventListener('click', handleClick, {once: true})
  })
}

function restartGame() {
  start();
}

function handleClick(e) {
  const boxTarget = e.target;
  const currentClass = isCrossPlayerTurn ? cross : circle;
  placeMark(boxTarget, currentClass);
  swapTurn();
}

function placeMark(box, currentClass) {
  box.classList.add(currentClass, disabled);
}

function swapTurn() {
  isCrossPlayerTurn = !isCrossPlayerTurn;
}

