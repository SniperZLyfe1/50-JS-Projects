const upperEL = document.querySelector('.upper')
const lowerEL = document.querySelector('.lower')
const primaryContainer = document.querySelector('.navigation-container')
const redDiv = document.querySelector('.red-bar')
const blackDiv = document.querySelector('.black-bar')
const openBtn = document.querySelector('.open-menu')
const closeBtn = document.querySelector('.close-menu')


openBtn.addEventListener('click' ,() => {
    openBtn.classList.add('hidden')
    setTimeout(() => blackDiv.style.width = '33%',0 )
    setTimeout(() => redDiv.style.width = '32%',500 )
    setTimeout(() => primaryContainer.style.width = '30%',700 )
    setTimeout(() => {
        upperEL.classList.remove('hidden')
        lowerEL.classList.remove('hidden')
    },1000)
})

closeBtn.addEventListener('click',() => {
    setTimeout(() => blackDiv.style.width = '0%',700 )
    setTimeout(() => redDiv.style.width = '0%',500 )
    setTimeout(() => primaryContainer.style.width = '0%',0 )
    upperEL.classList.add('hidden')
    lowerEL.classList.add('hidden')
    setTimeout(() => openBtn.classList.remove('hidden'),1000 );
})

