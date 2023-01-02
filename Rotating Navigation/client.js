const menuBtnOpen = document.querySelector('.btn--open')
const menuBtnClose = document.querySelector('.btn--close')
//toggle active to show up the nav
const navBar = document.querySelector('.navigation-bar');
//rotation on active class
const rotateContainer = document.querySelector('.container') 


menuBtnOpen.addEventListener('click', () => {
    toggle()
})

menuBtnClose.addEventListener('click', () => {
    toggle()
})

function toggle(){
    menuBtnOpen.classList.toggle('active')
    menuBtnClose.classList.toggle('active')
    rotateContainer.classList.toggle('active')
    navBar.classList.toggle('active')
}