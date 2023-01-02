const feedback_ico = document.querySelectorAll('.emoji')
const send_btn = document.querySelector('button')
const starting_container = document.querySelector('.container')
const secondary_container = document.querySelector('.feedback-sent')

let selected = ''

feedback_ico.forEach((ico,idx) => {
    ico.addEventListener('click', () => {
        removeActive()
        ico.classList.add('active')
        selected = ico.className.split(' ')[0]
    })
})

function removeActive(){
    feedback_ico.forEach(ico => ico.classList.remove('active'))
}

send_btn.addEventListener('click', () => {
    if(selected === '') return
    starting_container.classList.add('hidden')
    secondary_container.classList.remove('hidden')
    document.querySelector('span').innerHTML = selected[0].toUpperCase() + selected.slice(1)

})