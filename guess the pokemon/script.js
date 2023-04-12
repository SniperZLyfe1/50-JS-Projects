import { optionsArray } from "./options.js"
import { questions } from "./questions.js"

const timer = document.querySelector('.timer')
const questionAmounts = document.querySelector('.questions-amount')
const imgGuess = document.querySelector('img')
const optionsContainer = document.querySelector('.options-container')
const nextQuestionBtn = document.querySelector('.next')

let currentQuestion = 0;
let correctAmount = 0;
let time;

function createRandom(){
    timerFunc()
    let randomOption = questions[Math.floor(Math.random()*questions.length)]
    let currentOptions = []
    optionsContainer.innerHTML = ''
    imgGuess.src = `images/${randomOption.image}`;
    currentOptions.push(randomOption.correct_option)

    do{
        let random = optionsArray[Math.floor(Math.random()*optionsArray.length)]
        currentOptions.push(random)
        currentOptions = [...new Set(currentOptions)]

    }while(currentOptions.length < 4)

    currentOptions.forEach(option => {
        optionsContainer.innerHTML += `<button class="answers">${option}</button>`
    })

    document.querySelectorAll('.answers').forEach(option => option.style.pointerEvents = 'auto')


    document.querySelectorAll('.answers').forEach(option => {
        option.addEventListener('click', () => {
            if(option.innerHTML === randomOption.correct_option){
                option.classList.add('active')
                correctAmount++
            }else{
                option.classList.add('incorrect')
                document.querySelectorAll('.answers').forEach(option => {
                    if(option.innerHTML === randomOption.correct_option){
                        option.classList.add('active')
                    }
                })
            }
            document.querySelectorAll('.answers').forEach(option => {
                option.style.pointerEvents = 'none';
            })
        })
    })
}

createRandom()

nextQuestionBtn.addEventListener('click', () => {
    if(currentQuestion === 5){
        return restartGame()
    }

    if(document.querySelector('button').classList.contains('active')){
        clearInterval(time)
        currentQuestion++
        createRandom()
        questionAmounts.innerHTML = `${currentQuestion}/5`
    }
})

function restartGame(){
    alert(`You have got ${correctAmount}/5 correct!`)
    currentQuestion = 0;
    correctAmount = 0;
    clearInterval(time)
    questionAmounts.innerHTML = `${currentQuestion}/5`
    createRandom()
}


function timerFunc(){
    timer.innerHTML = '10s'
    let timerStart = 10;

    time = setInterval(() => {
        timerStart--
        timer.innerHTML = `${timerStart}s`

        if(timerStart === 0){
            clearInterval(time)
            if(currentQuestion >= 5){
                return restartGame()
            }
            currentQuestion++
            questionAmounts.innerHTML = `${currentQuestion}/5`
            createRandom()
        }
    },1000)

}