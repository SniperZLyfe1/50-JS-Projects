const container = document.querySelector('.container')
const clicked = document.querySelector('.like-counter')

let timeClicked = 0;
container.addEventListener('dblclick', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const span_created = document.createElement('span');
    span_created.innerHTML = `<i class="fa-solid fa-heart"></i>`
    span_created.className = 'heart'
    span_created.style.top = `${y}px`
    span_created.style.left = `${x}px`
    container.appendChild(span_created)
    setTimeout(() => span_created.remove(),600)
    timeClicked++
    clicked.innerHTML = timeClicked

})