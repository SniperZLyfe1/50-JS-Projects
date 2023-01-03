const container = document.querySelector('.container')
const start_screen = document.querySelector('.start-screen')
const scoreClass = document.querySelector('h2')

const easy = document.querySelector('.easy')
const intermediate = document.querySelector('.intermediate')
const hard = document.querySelector('.hard')
const score = document.querySelector('.score')

//Do not Change
let selected = []
let selectedFinal;
let fail_counts = 0;
let success_counts = 0;
let score_counter = 0;
let guessAmount;
let level;
let levelDifficuly;
let grid_items;
let failAmount;
let wrongAudio = new Audio('sounds/wrong.mp3')


easy.addEventListener('click', () => {
    container.classList.remove('hidden')
    start_screen.classList.add('hidden')
    scoreClass.classList.remove('hidden')
    container.className = 'container'
    level = 20;
    levelDifficuly = 5;
    failAmount = 2;
    mainGame()
})

intermediate.addEventListener('click', () => {
    container.classList.remove('hidden')
    start_screen.classList.add('hidden')
    scoreClass.classList.remove('hidden')
    container.className = 'container intermediate'
    level = 49;
    levelDifficuly = 7;
    failAmount = 5;
    mainGame()
})

hard.addEventListener('click', () => {
    container.classList.remove('hidden')
    start_screen.classList.add('hidden')
    scoreClass.classList.remove('hidden')
    container.className = 'container hard'
    level = 100;
    failAmount = 8;
    levelDifficuly = 10;
    mainGame()
})
function mainGame(){
    container.innerHTML = ''

    for(let i = 0; i < level;i++){
        const grid = document.createElement('div')
        grid.className = 'container-item'
        container.appendChild(grid)
    }
    grid_items = document.querySelectorAll('.container-item')

    getData(levelDifficuly)

    grid_items.forEach((items,idx) => {
        items.addEventListener('click', () => {
            if(selectedFinal.includes(idx)){
                items.style.backgroundColor = 'white'
                items.style.pointerEvents = 'none'
                selectedFinal.splice(selectedFinal.indexOf(idx),1)
                success_counts++
            }else{
                items.style.backgroundColor = 'red'
                items.style.pointerEvents = 'none'
                fail_counts++
               }
            fail_success_func()
        })
    })
}

function getData(guess){
    selected = []
    selectedFinal = []
    guessAmount = guess
    grid_items.forEach(items => {
        items.style.backgroundColor = '#175381'
        items.style.pointerEvents = 'none'
    })

    do{
        selected.push(Math.trunc(Math.random()*grid_items.length))
    }while([...new Set(selected)].length < guess)

    selectedFinal = [...new Set(selected)]
    selectedFinal.forEach(num => grid_items[num].style.backgroundColor = 'white')
    setTimeout(() => selectedFinal.forEach(num => grid_items[num].style.backgroundColor = '#175381'), 5000);
    setTimeout(() => grid_items.forEach(items => items.style.pointerEvents = 'auto'), 5000);
}

function fail_success_func(){
    if(fail_counts >= failAmount){
        container.classList.add('hidden')
        start_screen.classList.remove('hidden')
        scoreClass.classList.add('hidden')
        fail_counts = 0
        success_counts = 0
        score_counter = 0
        wrongAudio.play()
    }

    if(success_counts >= guessAmount){
        fail_counts = 0
        success_counts = 0
        score_counter++;
        score.innerHTML = score_counter
        getData(levelDifficuly)
    }
}