const inner_image = document.querySelector('.image-show')
const outer_image = document.querySelector('.image-container')

const prev_btn = document.querySelector('.prev')
const next_btn = document.querySelector('.next')

// Insert Images here -->
const images = {
    1: 'images/goku_ultrainstant.jpg',
    2: 'images/miles-morales.jpg',
    3: 'images/solo_leveling.png',
    4: 'images/spidy.jpg',
    5: 'images/summit1g.png'
}

let count = 1;

prev_btn.addEventListener('click', () => {
    if(count <=1) return
    count--
    inner_image.style.backgroundImage = `url(${images[count]})`
    outer_image.style.backgroundImage = `url(${images[count]})`
})

next_btn.addEventListener('click', () => {
    if(count >= Object.keys(images).length) return
    count++
    inner_image.style.backgroundImage = `url(${images[count]})`
    outer_image.style.backgroundImage = `url(${images[count]})`
})

