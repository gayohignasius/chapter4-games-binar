const playerOption = document.querySelectorAll('.playerOption');
const computerOption = document.querySelectorAll('.computerOption');
const middle = document.getElementById('middle');
const resultCSS = middle.getElementsByClassName('versus');
const restart = middle.getElementsByClassName('restart-button');
const arrayListOption = ['✊', '🖐', '✌'];

class Player {
  constructor(name, opt) {
    this.name = name;
    this.opt = opt;
  }


  get getName() {
    return this.name;
  }
  set setName(newName) {
    newName = newName.trim();
    if (newName === '') {
        throw 'The name cannot be empty';
    }
    this.name = newName;
  }
  get getOpt() {
    return this.opt;
  }
  set setOpt(option) {
    if (option === '') {
        throw 'The option cannot be empty';
    }
    this.opt = option;
  }

  static getComputerOption() {
    const computerOpt = arrayListOption[Math.floor(Math.random() * arrayListOption.length)];
    return computerOpt;
  }

  static getResult(playerOpt, computerOpt, playerName, computerName) {
    if (playerOpt == computerOpt) return this.result = 'DRAW';
    if (playerOpt == '✊' ) return this.result = (computerOpt == '✌') ? `${playerName.toUpperCase()} <br> WIN` : `${computerName.toUpperCase()} <br> WIN`;
    if (playerOpt == '🖐') return this.result = (computerOpt == '✊') ? `${playerName.toUpperCase()} <br> WIN` : `${computerName.toUpperCase()} <br> WIN`;
    if (playerOpt == '✌') return this.result = (computerOpt == '🖐') ? `${playerName.toUpperCase()} <br> WIN` : `${computerName.toUpperCase()} <br> WIN`;
  }

}
class Player1 extends Player {
  constructor(name, opt) {
    super(name, opt);
  }

  get getName() {
    return this.name;
  }
  set setName(newName) {
    newName = newName.trim();
    if (newName === '') {
        throw 'The name cannot be empty';
    }
    this.name = newName;
  }
  get getOpt() {
    return this.opt;
  }
  set setOpt(option) {
    if (option === '') {
        throw 'The option cannot be empty';
    }
    this.opt = option;
  }
}
class Computer extends Player {
  constructor(name, opt) {
    super(name, opt);
  }

  get getName() {
    return this.name;
  }
  set setName(newName) {
    newName = newName.trim();
    if (newName === '') {
        throw 'The name cannot be empty';
    }
    this.name = newName;
  }
  get getOpt() {
    return this.opt;
  }
  set setOpt(option) {
    if (option === '') {
        throw 'The option cannot be empty';
    }
    this.opt = option;
  }
}

function startGame() {
  restart.item(0).style.opacity = '0';
  computerOption.forEach(opt => {
    opt.classList.remove('selected');
  })

  playerOption.forEach(opt => {
    opt.addEventListener('click', handleClick);
  });
  
}

function handleClick(e) {
  const player1 = new Player1();
  const computer = new Computer();
  
  const playerTargetOption = e.target;
  player1.setName = 'Player 1';
  player1.setOpt = playerTargetOption.innerHTML;
  console.log(player1);
  
  let i = 0;
  let computerTargetOption;
  const computeTime = new Date().getTime();

  setInterval(() => {
    if (new Date().getTime() - computeTime > 1000) {
      clearInterval;
      return;
    }
    computerTargetOption = Player.getComputerOption();
    if (i == arrayListOption.length) i = 0;
  }, 100);
  
  setTimeout(async () => {
    computer.setName = 'Com';
    computer.setOpt = computerTargetOption;
    console.log(computer);
    
    for (let index = 0; index < computerOption.length; index++) {
      computerOption.item(index).classList.remove('selected');
      if (computerOption.item(index).innerHTML == computer.getOpt) {
        const element = computerOption.item(index);
        element.classList.add('selected');
      }
    }

    const result = await Player.getResult(player1.getOpt, computer.getOpt, player1.getName, computer.getName);
    

    resultCSS.item(0).style.color = 'white';
    resultCSS.item(0).style.backgroundColor = '#4C9654';
    resultCSS.item(0).style.fontSize = '38px';
    resultCSS.item(0).style.borderRadius = '10px';
    resultCSS.item(0).style.width = '270px';
    resultCSS.item(0).style.height = '160px';
    resultCSS.item(0).style.display = 'flex';
    resultCSS.item(0).style.justifyContent = 'center';
    resultCSS.item(0).style.alignItems = 'center';
    resultCSS.item(0).style.textAlign = 'center';
    resultCSS.item(0).style.transform = 'rotate(-10deg)';
    resultCSS.item(0).innerHTML = result;

    restart.item(0).style.opacity = '100';
    restart.item(0).addEventListener('click', startGame);
  }, 1000);
  
}

startGame();
