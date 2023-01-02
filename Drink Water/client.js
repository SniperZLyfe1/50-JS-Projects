const small_cups = document.querySelectorAll('.small-cups')
const big_cup = document.querySelectorAll('.big-cup')
const big_cup_filled = document.querySelector('.big-cup-filled')
const big_cup_text = document.querySelector('.big-cup-liter-text')
const liter_text = document.querySelector('.liters-text')

// Small Cups Functionality
small_cups.forEach((cups,idx1) => {
    cups.addEventListener('click', () => {
        small_cups.forEach((v,idx2) => {
            idx1 >= idx2 ? v.classList.add('active') : v.classList.remove('active')
        })  
    })
})

//Big Cup Funtionality
document.body.addEventListener('click',() => {
    const activeCups = document.querySelectorAll('.small-cups.active').length
    //Filled Feature
    const increaseFilledHeight = 50.5 * activeCups
    big_cup_filled.style.height = `${increaseFilledHeight}px`
    //Move Remained Liter Text
    const increaseTextMargin = (5 * activeCups)+1
    big_cup_text.style.marginBottom = `${increaseTextMargin}0px`
    activeCups === 8 ? big_cup_text.style.opacity = 0 : big_cup_text.style.opacity = 1
    //Filled Cups Inner Text --> Percentage
    const filledCupInner = 12.5 * activeCups
    big_cup_filled.innerHTML = `${filledCupInner}%`
    //Shows how many liters amount are left
    const literRemained = 2 - (0.25*activeCups)
    liter_text.innerHTML = `${literRemained}L`
})