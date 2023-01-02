const x_mark = document.querySelector('.x-mark')
const show_mark = document.querySelector('.show-mark')

x_mark.addEventListener('click', () => toggle())
show_mark.addEventListener('click', () => toggle())

function toggle(){
    document.querySelector('nav').classList.toggle('hidden')
    document.querySelector('ul').classList.toggle('hidden')
    document.querySelector('.show-mark').classList.toggle('hidden')
}