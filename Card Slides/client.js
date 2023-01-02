const container = document.querySelector('.container')


// Add images/Text here
const images = [
    {
        img: 'images/solo_leveling.png',
        text: 'Solo Leveling'
    },

    {
        img: 'images/goku_ultrainstant.jpg',
        text: 'Goku DBZ'
    },

    {
        img: 'images/miles-morales.jpg',
        text: 'Spiderman Miles Morale'
    },

    {
        img: 'images/sum1g.png',
        text: 'SumSum Wallpaper'
    },

    {
        img: 'images/spidy.jpg',
        text: 'Mini Spiderman'
    }
]

for(let i = 0; i < Object.keys(images).length; i++){
    const createElement = document.createElement('div');
    createElement.className = 'box';
    container.appendChild(createElement)
}

const slides = document.querySelectorAll('.box')

let count = 0;

slides.forEach(slide => {
    slide.style.backgroundImage = `url(${images[count]['img']})`;
    slide.innerHTML = `<h1>${images[count]['text']}</h1>`
    count++;
})


slides.forEach(v => {
    v.addEventListener('mouseenter', () => v.classList.add('active'))
    v.addEventListener('mouseleave', () => v.classList.remove('active'))
})