const numberContainer = document.querySelector('.game-container')
const findValue = document.querySelector('.find-value')
const minLabel = document.querySelector('.min')
const secLabel = document.querySelector('.sec')

let randomArr = []
let finderArr = []

while(randomArr.length < 80){
    var r = `${(Math.floor(Math.random() * 100) + 1)}`.slice(0,2).padStart(2,0);
    if(randomArr.indexOf(r) === -1) randomArr.push(r);
}

function startGame() {
  randomArr.map(num => createNumbers(num))
  findValue.innerHTML = getRandomFour()
}

startGame()

function createNumbers(val) {
  const num = document.createElement('div');
  num.innerHTML = val
  num.className = 'codes'
  numberContainer.appendChild(num)
}

const allNumbers = document.querySelectorAll('.codes')

function getRandomFour() {
   finderArr = [
    Math.floor(Math.random() * randomArr.length),
    Math.floor(Math.random() * randomArr.length),
    Math.floor(Math.random() * randomArr.length),
    Math.floor(Math.random() * randomArr.length)
  ]
  return finderArr.map(v => `<span>${`${v}`.padStart(2,0)}</span>`).join(' ')
}

let activePos = 45;
allNumbers[activePos].classList.add('active')
document.addEventListener('keydown', move)

function allCorrection() {
  let status = true
  document.querySelectorAll('.find-value span').forEach(num => {
    if (!num.classList.contains('active')) {
      status = false
    }
  })

  return status;
}

function move(e) {
  if (e.key === 'd') {
    allNumbers[activePos].classList.remove('active')
    if (activePos === allNumbers.length - 1){
      activePos = 0;
    }else{
      activePos++
    }
    allNumbers[activePos].classList.add('active')
  }
  if (e.key === 'a') {
    allNumbers[activePos].classList.remove('active')
    if (activePos === 0){
      activePos = allNumbers.length-1
    }else{
      activePos--
    }
    
    allNumbers[activePos].classList.add('active')
  }
  if (e.key === 'w') {
    allNumbers[activePos].classList.remove('active')
    if (activePos < 10){
      activePos = Number(`7${activePos}`)
    }else{
      activePos -= 10
    }
    allNumbers[activePos].classList.add('active')
  }
  if (e.key === 's') {
    allNumbers[activePos].classList.remove('active')
    if (activePos > allNumbers.length - 11){
      activePos = Number(`${activePos}`.slice(1,2))
    }else{
      activePos += 10
    }
    allNumbers[activePos].classList.add('active')
  }
  if (e.key === ' ') {
    const checkFor = allNumbers[activePos].innerHTML
    document.querySelectorAll('.find-value span').forEach(num => {
      if (num.innerHTML === checkFor) {
        num.classList.add('active')
      }
    })

    if(!finderArr.includes(checkFor)){
        allNumbers[activePos].classList.add('wrong')
        setTimeout(() => allNumbers[activePos].classList.remove('wrong'),100)
    }

    if (allCorrection()) {
      onComplete()
      document.querySelector('h3').innerHTML = 'STATUS CODE: 200'
      findValue.innerHTML = 'You have cracked the database!'
    }
  }
}

const interval = setInterval(() => {
  let firstChild = numberContainer.firstElementChild
  numberContainer.removeChild(numberContainer.firstElementChild)
  numberContainer.appendChild(firstChild)
  allNumbers[activePos].classList.remove('active')
  activePos++
  allNumbers[activePos].classList.add('active')
},2000)

let min = 12;
let sec = 60;

const minInterval = setInterval(() => {
  min--;
  minLabel.innerHTML = `${min}`.padStart(2,0)  
  if(min === 0){
    onComplete()
    document.querySelector('h3').innerHTML = 'Please Restart the App!'
    findValue.innerHTML = 'You have failed to crack the database!'
  }

  if(min <= 5){
    document.querySelector('.timer').classList.add('wrong')
  }
},6000)

const secInterval = setInterval(() => {
  sec--;
  secLabel.innerHTML = `${sec}`.padStart(2,0)  
  if(sec === 0){
   sec = 60
  }
},100)


function onComplete(){
  document.removeEventListener('keydown', move)
  clearInterval(minInterval)
  clearInterval(interval)
  clearInterval(secInterval)
}