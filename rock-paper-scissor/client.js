const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissor')
const emojis = document.querySelectorAll('.emoji')
const userCount = document.querySelector('.user span')
const computerCount = document.querySelector('.computer span')
const history = document.querySelector('.history')

const choices = ['rock', 'paper', 'scissor']
let emojisData = { 'rock': 'fa-hand-back-fist', 'paper': 'fa-hand', 'scissor': 'fa-hand-scissors' }
let userWins = 0;
let computerWins = 0;

let user = ''
emojis.forEach(option => {
  option.addEventListener('click', () => {
    user = option.id
    Game(user, computerChoice())
  })
})

function Game(user, computer) {
  if (user === 'rock' && computer !== 'paper' && user === 'rock' && computer !== 'rock') {
    userWins++
    historyFunc(user, computer, 1, 0.5, 1, 0.5)
  } else if (user === 'paper' && computer !== 'scissor' && user === 'paper' && computer !== 'paper') {
    userWins++
    historyFunc(user, computer, 1, 0.5, 1, 0.5)
  } else if (user === 'scissor' && computer !== 'rock' && user === 'scissor' && computer !== 'scissor') {
    userWins++
    historyFunc(user, computer, 1, 0.5, 1, 0.5)
  } else if (user === computer) {
    historyFunc(user, computer, 0.5, 0.5, 0.5, 0.5)
  } else {
    computerWins++
    historyFunc(user, computer, 0.5, 1, 0.5, 1)
  }
  userCount.innerHTML = userWins
  computerCount.innerHTML = computerWins
}

function historyFunc(user, computer, useropacity, computeropacity) {
  let modal = `
    <div class="result-history">
        <i class="fa-solid ${emojisData[user]}" style='color:rgba(255,191,71,${useropacity}); transform:scale(${useropacity})' id=rock></i>
        <i class="fa-solid ${emojisData[computer]}" style='color:rgba(255,191,71,${computeropacity}); transform:scale(${computeropacity})' id=paper></i>
    </div>
  `
  history.insertAdjacentHTML('afterbegin', modal)
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}