const good_option = document.querySelector('.good-inside-ball')
const cheap_option = document.querySelector('.cheap-inside-ball')
const fast_option = document.querySelector('.fast-inside-ball')


good_option.addEventListener('click', () => {
    good_option.classList.toggle('active')
    good_option.closest('.ball').classList.toggle('active')
})
  
cheap_option.addEventListener('click', () => {
    cheap_option.classList.toggle('active')
    cheap_option.closest('.ball').classList.toggle('active')

    if(fast_option.classList.contains('active')){
        fast_option.classList.remove('active')
        fast_option.closest('.ball').classList.toggle('active')
    }
})

fast_option.addEventListener('click', () => {
    fast_option.classList.toggle('active')
    fast_option.closest('.ball').classList.toggle('active')

    if(cheap_option.classList.contains('active')){
        cheap_option.classList.remove('active')
        cheap_option.closest('.ball').classList.toggle('active')
    }
})

