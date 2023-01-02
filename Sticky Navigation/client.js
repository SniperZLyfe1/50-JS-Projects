const nav = document.querySelector('nav')

document.addEventListener('scroll', (e) => {
    scrollY >= 500 ? nav.classList.add('active') : nav.classList.remove('active')
})