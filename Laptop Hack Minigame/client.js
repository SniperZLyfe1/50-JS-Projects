const boxes = document.querySelectorAll('.box')
const innerShapes = document.querySelectorAll('.inner-shape')
const colorTexts = document.querySelectorAll('.color')
const numberTexts = document.querySelectorAll('.number')
const shapeTexts = document.querySelectorAll('.shape')
const default_Numbers = document.querySelectorAll('.inner-number')
const loader = document.querySelector('.loader')
const questionLabel = document.querySelector('.question')
const input = document.querySelector('input')
const text = document.querySelector('.texts')

const footer = document.querySelector('.footer')
const gameContainer = document.querySelector('.game-container')
const gameOverContainer = document.querySelector('.game-over-container')
const gameCompletedContainer = document.querySelector('.game-complete-container')
const startContainer = document.querySelector('.starting-container')

let runouttimer
let unique = []
let fake = []
input.disabled = true
let wrong = new Audio('sounds/wrong.mp3')
let hacksound = new Audio('sounds/dialing.mp3')
let dailing = new Audio('sounds/long-metronome.mp3')
wrong.autoplay = false
hacksound.autoplay = false
dailing.autoplay = false

function random_shapes() {
  const shapesArr = ['triangle', 'square', 'rectangle', 'circle']
  return shapesArr[Math.floor(Math.random() * shapesArr.length)]
}

function random_rgba() {
  const colorsArr = ['red', 'yellow', 'blue', 'purple', 'green', 'black', 'white', 'orange']
  return colorsArr[Math.floor(Math.random() * colorsArr.length)]
}

function random_rgba_outer() {
  const colorsArr = ['yellow', 'blue', 'purple', 'green', 'black', 'white', 'orange']
  return colorsArr[Math.floor(Math.random() * colorsArr.length)]
}

function random_numbers() {
  let arr = []
  do {
    arr.push(Math.floor(Math.random() * 9) + 1)
    unique = [...new Set(arr)]
  } while (unique.length < 4)

  let shuffle = []
  do {
    shuffle.push(unique[Math.floor(Math.random() * unique.length)])
    fake = [...new Set(shuffle)]
  } while (fake.length < 4)
}

random_numbers()

function startGame() {
  input.disabled = false
  input.focus()
  loader.classList.add('show')
  boxes.forEach(box => box.style.backgroundColor = random_rgba_outer())

  innerShapes.forEach(shape => {
    shape.classList.add(random_shapes())
    shape.classList.remove('hidden')
    if (!shape.classList.contains('triangle')) {
      shape.style.backgroundColor = random_rgba()
    }
    if (shape.classList.contains('triangle')) {
      shape.style.borderBottom = `110px solid ${random_rgba()}`
    }
  })

  colorTexts.forEach(text => {
    text.innerHTML = (random_rgba()).toUpperCase()
    text.style.color = random_rgba()
  })

  shapeTexts.forEach(text => {
    text.innerHTML = (random_shapes()).toUpperCase()
    text.style.color = random_rgba()
  })

  for (let i = 0; i < numberTexts.length; i++) {
    numberTexts[i].innerHTML = fake[i]
    numberTexts[i].style.color = random_rgba()
  }

  runouttimer = setTimeout(() => {
    gameContainer.classList.add('hidden')
    gameOverContainer.classList.remove('hidden')
    wrong.play()
  }, 10000)
}

function toStart() {
  startContainer.classList.add('hidden')
  gameContainer.classList.remove('hidden')
  dailing.play()
  for (let i = 0; i < default_Numbers.length; i++) {
    default_Numbers[i].innerHTML = unique[i]
  }

  setTimeout(() => {
    default_Numbers.forEach(number => number.classList.add('hidden'))
    dailing.pause()
    footer.classList.remove('hidden')
    startGame()
  }, 5000)

  let question = ['COLOR TEXT', 'SHAPE', 'SHAPE COLOR', 'SHAPE TEXT', 'NUMBER COLOR',
    'SHAPE BACKGROUND COLOR']

  let selected_One = unique[Math.floor(Math.random() * unique.length)]
  let selected_Two = unique[Math.floor(Math.random() * unique.length)]
  let question_One = question[Math.floor(Math.random() * question.length)]
  let question_Two = question[Math.floor(Math.random() * question.length)]
  let answers = ''

  questionLabel.innerHTML = `${question_One} (${selected_One}) AND ${question_Two} (${selected_Two}) `

  setTimeout(() => {
    default_Numbers.forEach(num => {
      if (num.innerHTML === `${selected_One}`) {
        //Color Text
        if (question_One === question[0]) {
          answers += num.closest('.box').querySelector('.inner-shape .color').innerHTML + ' '
        }
        //Shape
        if (question_One === question[1]) {
          answers += num.closest('.box').querySelector('.inner-shape').className.split(' ')[1] + ' '
        }
        //Shape Color --- PROBLEM HERE
        if (question_One === question[2]) {
          if (num.closest('.box').querySelector('.inner-shape').classList.contains('triangle')) {
            answers += num.closest('.box').querySelector('.inner-shape').style.borderBottom.split(' ')[2] + ' '
          }
          if (!num.closest('.box').querySelector('.inner-shape').classList.contains('triangle')) {
            answers += num.closest('.box').querySelector(`.inner-shape`).style.backgroundColor + ' '
          }
        }
        //SHape Text
        if (question_One === question[3]) {
          answers += num.closest('.box').querySelector('.inner-shape .shape').innerHTML + ' '
        }
        //Number Color
        if (question_One === question[4]) {
          answers += num.closest('.box').querySelector('.inner-shape .number').style.color + ' '
        }
        //Shape background Color
        if (question_One === question[5]) {
          answers += num.closest('.box').style.backgroundColor + ' '
        }
      }
    })

    default_Numbers.forEach(num => {
      if (num.innerHTML === `${selected_Two}`) {
        //Color Text
        if (question_Two === question[0]) {
          answers += num.closest('.box').querySelector('.inner-shape .color').innerHTML + ' '
        }
        //Shape
        if (question_Two === question[1]) {
          answers += num.closest('.box').querySelector('.inner-shape').className.split(' ')[1] + ' '
        }
        //Shape Color --- PROBLEM HERE
        if (question_Two === question[2]) {
          if (num.closest('.box').querySelector('.inner-shape').classList.contains('triangle')) {
            answers += num.closest('.box').querySelector('.inner-shape').style.borderBottom.split(' ')[2] + ' '
          }
          if (!num.closest('.box').querySelector('.inner-shape').classList.contains('triangle')) {
            answers += num.closest('.box').querySelector(`.inner-shape`).style.backgroundColor + ' '
          }
        }
        //SHape Text
        if (question_Two === question[3]) {
          answers += num.closest('.box').querySelector('.inner-shape .shape').innerHTML + ' '
        }
        //Number Color
        if (question_Two === question[4]) {
          answers += num.closest('.box').querySelector('.inner-shape .number').style.color + ' '
        }
        //Shape background Color
        if (question_Two === question[5]) {
          answers += num.closest('.box').style.backgroundColor + ' '
        }
      }
    })
    console.log(answers)
  }, 6000)

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.toLowerCase() === answers.slice(0, -1).toLowerCase()) {
        clearTimeout(runouttimer)
        gameCompletedContainer.classList.remove('hidden')
        gameContainer.classList.add('hidden')
      } else {
        clearTimeout(runouttimer)
        wrong.play()
        gameOverContainer.classList.remove('hidden')
        gameContainer.classList.add('hidden')
      }
    }
  })

}

function startHack() {
  hacksound.play()
  setTimeout(() => text.innerHTML = 'BYPASSING SECURITY...', 2000)
  setTimeout(() => text.innerHTML = 'ACCESS CODE FLAGGED; REQUIRE HUMAN CAPTCHA INPUT...', 4000)
  setTimeout(() => {
    hacksound.pause()
    toStart()
}, 6000)
}

document.querySelector('.start').addEventListener('click', () => {
    document.querySelector('.start').classList.add('hidden')
    startHack()
})

document.querySelector('.retry').addEventListener('click', () => location.reload())
document.querySelector('.connect').addEventListener('click', () => location.reload())
