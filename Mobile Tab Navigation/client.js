const btn_El = document.querySelectorAll('li')
const img = document.querySelector('img')

const images = {
    "About Us" : 'images/about-us.jpg',
    "Blog" : 'images/blog.jpg',
    "Work" : 'images/work.jpg',
    "Home" : 'images/home.jpg'
}

btn_El.forEach(el => {
    el.addEventListener('click', () => {
        removeColor()
        el.style.color = 'purple'
        const first = el.innerHTML.slice(el.innerHTML.indexOf('</i>'))
        const second = first.slice(first.indexOf(' ')).trim()
        img.src = images[second]
    })
})

function removeColor(){
    btn_El.forEach(el => el.style.color = 'rgb(101, 101, 101)')
}