const grid_container  = document.querySelector('.container')

function createSquares(amount){
    for(let i = 0; i < amount; i++){
        const square = document.createElement('div')
        square.className = 'squares'
        grid_container.appendChild(square)
    }
}

createSquares(800)

const allSquares = document.querySelectorAll('.squares')

allSquares.forEach(sq => {
    sq.addEventListener('mouseover', () => {
        sq.style.backgroundColor = getRandomColor()
        setTimeout(() => sq.style.backgroundColor = 'rgb(52, 52, 52)',1000)
    })
})

function getRandomColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb
}