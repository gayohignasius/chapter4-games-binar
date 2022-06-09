const playerOption = document.querySelectorAll('.playerOption');
const computerOption = document.querySelectorAll('.computerOption');

class Player {
  constructor(name, opt) {
    this.name = name;
    this.opt = opt;
  }

  get getName() {
    return this._name;
  }
  set setName(newName) {
    newName = newName.trim();
    if (newName === '') {
        throw 'The name cannot be empty';
    }
    this._name = newName;
  }
  get getOpt() {
    return this.opt;
  }
  set setOpt(opt) {
    opt = opt.value;
    if (opt === '') {
        throw 'The option cannot be empty';
    }
    this.opt = opt;
  }
}

function startGame() {
  playerOption.forEach(opt => {
    // opt.addEventListener('click', handleClick, { once: true });
    opt.addEventListener('click', handleClick);
  });
  
}
function handleClick(e) {
  const player1 = new Player();
  const computer = new Player();
  
  const playerTargetOption = e.target;
  player1.name = 'Player 1';
  player1.opt = playerTargetOption.innerHTML;
  console.log(player1);
  
  const arrayListOption = [];
  computerOption.forEach(opt => {
    const computerListOption = opt.innerHTML;
    arrayListOption.push(computerListOption);
  });

  const computerTargetOption = getComputerOption(arrayListOption);
  computer.name = 'Computer'
  computer.opt = computerTargetOption;
  console.log(computer);

}

function getComputerOption(list) {
  const computerOpt = list[Math.floor(Math.random() * list.length)];
  return computerOpt;
}

startGame();
