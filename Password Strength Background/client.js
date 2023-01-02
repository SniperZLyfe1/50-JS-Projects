const pass = document.querySelector('#password')
const image = document.querySelector('.backgroundImage')

pass.addEventListener('input',(e) => {
    let len = `${e.target.value}`.length
    image.style.filter = `blur(${20-len*2}px)`
})