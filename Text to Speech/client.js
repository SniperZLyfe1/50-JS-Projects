const speedInput = document.querySelector('input')
const playBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const textArea = document.querySelector('textarea')

let lastChar;
const msg = new SpeechSynthesisUtterance()

playBtn.addEventListener('click', () =>{
    playFunc(textArea.value)
})

pauseBtn.addEventListener('click', () => {
    pauseFunc()
})

stopBtn.addEventListener('click', () => {
    stopFunc()
})

speedInput.addEventListener('input', () => {
    stopFunc()
    playFunc(msg.text.substring(lastChar))
})

const playFunc = text => {
    if(window.speechSynthesis.speaking && window.speechSynthesis.paused){
        return window.speechSynthesis.resume()
    }
    speechSynthesis.cancel()
    msg.text = text
    msg.volume = 1;
    msg.rate = speedInput.value || 1
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg)
    textArea.disabled = true;
    msg.addEventListener('end', () => textArea.disabled = false)
    msg.addEventListener('boundary', (e) => {
        lastChar = e.charIndex
    })
}

const pauseFunc = () => {
    if(window.speechSynthesis.speaking) window.speechSynthesis.pause()
}

const stopFunc = () => {
    if(window.speechSynthesis.paused){
        window.speechSynthesis.resume()
        window.speechSynthesis.cancel()
    }
    window.speechSynthesis.cancel()
    textArea.disabled = false
}