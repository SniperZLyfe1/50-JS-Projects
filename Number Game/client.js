const container = document.querySelector('.container')
const level = document.querySelector('.level')
const gameContainer = document.querySelector('.main-container')
const startContainer = document.querySelector('.start_screen')

//DO NOT CHANGE
let counter = 1;
let boxNumbers = 1;
let boxes = 2;
let currentLevel = 1;

function moveBox(speedX,speedY){
    let x = Math.trunc(Math.random()*720)
    let y = Math.trunc(Math.random()*520)
    const box = document.createElement('div')
    box.className = 'box'
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
    box.innerHTML = boxNumbers
    box.style.pointerEvents = 'none'
    container.appendChild(box)
    const interval = setInterval(() => {
        if(x < 0) speedX = -speedX
        if(y < 0) speedY = -speedY
    
        if(x > 720) speedX = -speedX
        if(y > 520) speedY = -speedY
           
        x += speedX
        y += speedY

        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    },30);

    boxNumbers++
    setTimeout(() => {
        box.style.pointerEvents = 'auto'
        box.style.color = '#093251'
    }, 5000);

    box.addEventListener('click', () => {
        if(+box.innerHTML === counter){
            box.remove()
            clearInterval(interval)
            counter++
        }else{
            boxes = 2;
            currentLevel = 1;
            clearInterval(interval)
            startGame()
        }

        if(counter > boxes){
            currentLevel++;
            boxes++
            startGame()
        }
    })
}

function startGame(){
    container.innerHTML = ''
    level.innerHTML = currentLevel
    counter = 1;
    boxNumbers = 1;
    for(let i = 0; i < boxes;i++){
        moveBox(5,5)
    }       
}

setTimeout(() => {
    startContainer.classList.add('hidden')
    gameContainer.classList.remove('hidden')
    startGame()
},5000)
