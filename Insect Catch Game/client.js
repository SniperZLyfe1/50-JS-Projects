const time = document.querySelector('.time')
const score = document.querySelector('.score')
const play_btn = document.querySelector('.play-btn')
const insectsImg = document.querySelectorAll('.choose-insect-btn')
const notification = document.querySelector('.notification')

const logo_screen = document.querySelector('.logo-screen')
const insec_selection_screen = document.querySelector('.insect-selection-screen')
const time_score_container = document.querySelector('.time-score-div')
const game_container = document.querySelector('.game-container')

let chosenInsec = ''
let your_score = 0

play_btn.addEventListener('click', () => {
    logo_screen.classList.add('hidden')
    insec_selection_screen.classList.remove('hidden')
})

insectsImg.forEach(insec => {
    insec.addEventListener('click', () => {
        chosenInsec = insec.closest('.choose-insect-btn').querySelector('img').src
        insec_selection_screen.classList.add('hidden')
        time_score_container.classList.remove('hidden')
        game_container.classList.remove('hidden')
        setTimeout(() => createInsec(chosenInsec),1000)
        timer()
    })
})

function createInsec(imgSrc){
    const left = Math.trunc(Math.random()*85)+1
    const top = Math.trunc(Math.random()*100)+1
    const insec = document.createElement('img')
    insec.src = imgSrc
    insec.style.left = `${left}%`
    insec.style.top = `${top}%`
    game_container.appendChild(insec)
    setTimeout(() => insec.classList.add('scale',100))

    insec.addEventListener('click', () => {
        insec.remove()
        your_score++
        score.innerHTML = `Score: ${your_score}`
        createInsec(chosenInsec)
        setTimeout(() => createInsec(chosenInsec),1000)
        if(your_score > 20) notification.classList.add('show')
        
    })
}

function timer(){
    let seconds = 0;
    let minutes = 0;

    setInterval(() =>{
        seconds++;
        if(seconds === 60){
            seconds = 0
            minutes++
        }
        let timing = `${minutes}`.padStart(2,0) + ':'+`${seconds}`.padStart(2,0);
        time.innerHTML = `Time: ${timing}`

    },1000)
}