const checkBtn = document.querySelector('.check-word')
const refreshBtn = document.querySelector('.refresh')
const timer = document.querySelector('.timer')
const wordToGuessLabel = document.querySelector('.word-guess')
const hintLabel = document.querySelector('.word-hint')
const inputData = document.querySelector('input')

let timerInterval;

//Add more words here
const wordsList = [
  {
    word: "LION",
    hint: "King of Jungle",
  },
  {
    word: "JAVASCRIPT",
    hint: "Web Programming",
  },
  {
    word: "ADDITION",
    hint: "Process of adding numbers",
  },
  {
    word: "PACIFIC",
    hint: "Ocean name",
  },
  {
    word: "DISCORD",
    hint: "Use to communicate",
  },
]

let getRandomWord = Math.floor(Math.random() * wordsList.length)

function showWord(num) {
  wordToGuessLabel.innerHTML = (wordsList[num].word).split('').sort(() => 0.5 - Math.random()).join('');
  hintLabel.innerHTML = wordsList[num].hint;
}

showWord(getRandomWord)
startTimer()

function startTimer() {
  clearInterval(timerInterval)
  let sec = 30;
  timerInterval = setInterval(() => {
    sec--
    timer.innerHTML = `${sec}`
    if (sec === 0) {
      clearInterval(timerInterval)
      completed("Timer ran out!")
    }
  }, 1000)
}

refreshBtn.addEventListener('click', () => {
  completed()
})

checkBtn.addEventListener('click', () => {
  const inputVal = inputData.value
  if ((inputVal).toLowerCase() === (wordsList[getRandomWord].word).toLowerCase()) {
    completed("You have successfully guessed the right word!")
  } else {
    completed("You have failed to guessed the right word!")
  }
})

function completed(text) {
  if (text) {
    alert(text)
  }
  inputData.value = ""
  timer.innerHTML = 30
  getRandomWord = Math.floor(Math.random() * wordsList.length)
  showWord(getRandomWord)
  startTimer()
}