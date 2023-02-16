const gameStartOverlay = document.getElementById('game-start-text')
const gameOverOverlay = document.getElementById('game-over-text')
const gameVictoryOverlay = document.getElementById('victory-text')
const timeOverlay = document.getElementById('time-remaining')
const flipsOverlay = document.getElementById('flips')
const cards = document.querySelectorAll('.card')

let prevValue;
let statusValue = false;
let interv;
let timer = 100;
let flipsCount = 0;
let options = ['Eye','Dracula','Ghost','Pumpkin','Skull','Cauldron','Bones','Bat',
'Eye','Dracula','Ghost','Pumpkin','Skull','Cauldron','Bones','Bat']

startGame()

function startGame(){
    gameStartOverlay.addEventListener('click',() => {
        shuffle()
        timerCounter()
        gameStartOverlay.classList.remove('visible')
    })
}

function restartSettings(){
    timer = 100
    prevValue = ''
    flipsCount = 0
    flipsOverlay.innerHTML = 0
    statusValue = false
    gameStartOverlay.classList.add('visible')
    cards.forEach(card => card.classList.remove('visible','matched'))
}

gameOverOverlay.addEventListener('click',() => {
    restartSettings()
    gameOverOverlay.classList.remove('visible')
})

gameVictoryOverlay.addEventListener('click',() => {
    restartSettings()
    gameVictoryOverlay.classList.remove('visible')
})

cards.forEach(card => {
    card.addEventListener('click', () => {
        enableClicks()
        statusValue = false;
        const currentValue = card.querySelector('.card-value').src
        card.classList.add('visible')
        if(prevValue === currentValue){
            getActive(currentValue)
            getActive(prevValue)
        }

        if(statusValue === false) setTimeout(() => card.classList.remove('visible'),500)
        prevValue = currentValue
        card.style.pointerEvents = 'none'
        flipsCount++
        flipsOverlay.innerHTML = flipsCount
        victory()
    })
})


function getActive(currentVal){
    cards.forEach(card => {
        if(card.querySelector('.card-value').src === currentVal){
            card.classList.add('matched')
            card.classList.add('visible')
            card.style.pointerEvents = 'none'
            statusValue = true;
            prevValue = ''
        }
    })
}

function enableClicks(){
    cards.forEach(card => {
        card.style.pointerEvents = 'auto'
    })
}

function shuffle(){
    let shuffled = options
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
    cards.forEach((card,idx) => {
        card.querySelector('.card-value').src = `Assets/Images/${shuffled[idx]}.png`
    })
}

function timerCounter(){
    interv = setInterval(() => {
        timer--
        if(timer === 0){
            clearInterval(interv)
            gameOverOverlay.classList.add('visible')
        }
        timeOverlay.innerHTML = timer
    },1000)
}

function victory(){
    let check = true;
    cards.forEach(card => {
        if(!card.classList.contains('matched')){
            check = false;
        }
    })

    if(check === true){
        gameVictoryOverlay.classList.add('visible')
    }
}