const textContainer = document.querySelector('.container')
const input = document.querySelector('input')

const text = 'We Love Programming'
let counter = 0;
let speed = input.value;
let interval;

function intervalText(){
    interval = setInterval(() => {
        createdFunc(text[counter])
        counter++
        if(counter > text.length){
            counter = 0;
            textContainer.innerHTML = ''
        }
    }, 1000/speed);
}

function createdFunc(txt){
    const span_created = document.createElement('span')
    span_created.innerHTML = txt
    textContainer.appendChild(span_created)
}

intervalText()

input.addEventListener('input', (e) => {

    speed = e.target.value;
    counter = 0;

    if(e.target.value === ''){
        clearInterval(interval)
        textContainer.innerHTML = ''
    }else{
        clearInterval(interval)
        textContainer.innerHTML = ''
        intervalText()
    }
})