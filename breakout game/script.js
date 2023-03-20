const gameBoard = document.querySelector(".grid");

const blockPos = [
  {
    left: 10,
    top: 5
  },
  {
    left: 120,
    top: 5
  },
  {
    left: 230,
    top: 5
  },
  {
    left: 340,
    top: 5
  },
  {
    left: 450,
    top: 5
  },

  {
    left: 10,
    top: 40
  },
  {
    left: 120,
    top: 40
  },
  {
    left: 230,
    top: 40
  },
  {
    left: 340,
    top: 40
  },
  {
    left: 450,
    top: 40
  },

  {
    left: 10,
    top: 75
  },
  {
    left: 120,
    top: 75
  },
  {
    left: 230,
    top: 75
  },
  {
    left: 340,
    top: 75
  },
  {
    left: 450,
    top: 75
  }
];

function createBlocks(x, y) {
  const block = document.createElement("div");
  block.className = "block";
  block.style.left = x + "px";
  block.style.top = y + "px";
  gameBoard.appendChild(block);
}

blockPos.forEach((pos) => {
  createBlocks(pos.left, pos.top);
});

function createUser(x) {
  const player = document.createElement("div");
  player.className = "user";
  player.style.left = x + "px";
  player.style.top = "250px";
  gameBoard.appendChild(player);
}

let playerPos = 200;
createUser(playerPos);

document.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    if (playerPos >= 460) return;
    playerPos = playerPos + 20;
    document.querySelector(".user").style.left = playerPos + "px";
  }

  if (e.key === "a") {
    if (playerPos < 1) return;
    playerPos = playerPos - 20;
    document.querySelector(".user").style.left = playerPos + "px";
  }
});


function createBall(x, y) {
  const ball = document.createElement("div");
  ball.className = "ball";
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  gameBoard.appendChild(ball);
}

let [speedX, speedY] = [2, 2];
let [ballXPos, ballYPos] = [100, 100]
let score = 0;

createBall(ballXPos, ballYPos)

const int = setInterval(() => {
  if (ballXPos < 1) speedX = -speedX
  if (ballYPos < 1) speedY = -speedY

  if (ballYPos > gameBoard.clientHeight-20) {
    clearInterval(int)
  }

  if (ballXPos > gameBoard.clientWidth-20) speedX = -speedX

  let ballRect = document.querySelector('.ball').getBoundingClientRect()
  let playerRect = document.querySelector('.user').getBoundingClientRect()

  if(ballRect.bottom > playerRect.top && 
    ballRect.x + ballRect.width >= playerRect.x &&
    playerRect.x + playerRect.width >= ballRect.x 

   ){speedY = -speedY}

    document.querySelectorAll('.block').forEach(v => {
        let blockRect = v.getBoundingClientRect()
        if(ballRect.top < blockRect.bottom &&
            ballRect.x + ballRect.width >= blockRect.x &&
             blockRect.x + blockRect.width >= ballRect.x
        ){
            speedY = -speedY
            score++
            v.remove()
        }
    })
    
    ballXPos += speedX
    ballYPos += speedY

    document.getElementById('score').innerHTML = score;
    document.querySelector('.ball').style.left = ballXPos + 'px'
    document.querySelector('.ball').style.top = ballYPos + 'px'

}, 10)