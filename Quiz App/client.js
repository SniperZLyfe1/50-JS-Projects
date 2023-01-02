const question = document.querySelector('.question')
const submit_btn = document.querySelector('.submit')
const answers_container = document.querySelector('.answers')
const correctSpan = document.querySelector('span')
const primaryContainer = document.querySelector('.container')
const secondaryContainer = document.querySelector('.review-container')
const restart = document.querySelector('.reload')
let selectedAnsContainer;

let questionCount = 0;
let correctAnswersCount = 0;
let correctedArr = []
let yourArr = []

const questions = [
    {
        question : 'Which language runs in a web browser',
        answers : ['Java','C','Python','Javascript'],
        correct: 'Javascript'
    },
    {
        question : 'What does CSS stand for',
        answers : ['Central Style Sheets','Cascading Style Sheets','Cascading Simple Sheets','Cars SUVs Sailboats'],
        correct: 'Cascading Style Sheets'
    },
    {
        question : 'What does HTML stand for?',
        answers : ['Hypertext Markup Language','Hypertext Markdown Language','Hyperloop Machine Language','Helicopters Terminals Motorboats Lamborginis'],
        correct: 'Hypertext Markup Language'
    },
    {
        question : 'What year was Javascript launched?',
        answers : ['1996','1995','1994','none of the above'],
        correct: '1996'
    },
]

questions.forEach(v => {
    correctedArr.push(v.correct)
})

function getData(){
    question.innerHTML = questions[questionCount].question
    questions[questionCount].answers.forEach(v=>{
        const created = document.createElement('div')
        created.className = 'ans'
        created.innerHTML = v;
        answers_container.appendChild(created)
    })

    selectedAnsContainer = document.querySelectorAll('.ans')

    selectedAnsContainer.forEach(v => {
        v.addEventListener('click',() => {
            removeActive()
            v.classList.add('active')
        })
    })
}

getData()

submit_btn.addEventListener('click', () => {
    selectedAnsContainer.forEach(v=>{
        if(v.classList.contains('active')){
            yourArr.push(v.innerHTML)
        }
        })

    if(questionCount >= questions.length-1){
        console.log(yourArr)
        questionCount = 0
        review()
        return    
    }
    
    questionCount++;
    answers_container.innerHTML = ''
    getData()
})

function review(){
    primaryContainer.classList.add('hidden')
    secondaryContainer.classList.remove('hidden')

    for(let i = 0 ; i < correctedArr.length; i++){
       if(yourArr[i] === correctedArr[i]) correctAnswersCount++
    }

    correctSpan.innerHTML = correctAnswersCount
}

function removeActive(){
    selectedAnsContainer.forEach(v => v.classList.remove('active'))
}

restart.addEventListener('click', () => {
    primaryContainer.classList.remove('hidden')
    secondaryContainer.classList.add('hidden')
    answers_container.innerHTML = ''
    correctAnswersCount = 0;
    yourArr = []
    questionCount = 0;
    getData()
})