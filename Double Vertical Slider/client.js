const LargeText = document.querySelector('h1')
const smallText = document.querySelector('small')
const leftBackgroundColor = document.querySelector('.left-container')
const rightBackgroundImage = document.querySelector('.right-container')
const arrowDown_btn = document.querySelector('.arrow-down')
const arrowUp_btn = document.querySelector('.arrow-up')

let counter = 0;
const results = [
    {
        upperText : 'MSI',
        lowerText : 'Powered by MSI Logo',
        image : 'images/desktop_msi.jpg',
        color : 'black'
    },
    
    {
        upperText : 'Goku',
        lowerText : 'Dragon Ball Super Character',
        image : 'images/goku.jpg',
        color: 'rgba(12, 147, 238, 0.8)'
    },

    {
        upperText : 'Miles Morales',
        lowerText : 'Spider-man Multiverse Character',
        image : 'images/miles-morales.jpg',
        color : 'rgba(185, 218, 241, 0.8)'
    },

    {
        upperText : 'Sung Jinwoo',
        lowerText : 'Solo Leveling Series',
        image : 'images/solo_leveling.png',
        color: 'rgba(143, 210, 255, 0.8)'
    },

    {
        upperText : 'Spiderman',
        lowerText : 'Kid Spiderman Wallpaper',
        image : 'images/spidy.jpg',
        color: 'rgba(237, 124, 134, 0.8)'
    },

]

arrowUp_btn.addEventListener('click', () => {
    if( counter >= results.length-1) return
    counter++
    changeData()
})

arrowDown_btn.addEventListener('click', () => {
    if( counter <= 0 ) return
    counter--
    changeData()
})

function changeData(){
    LargeText.innerHTML = results[counter].upperText
    smallText.innerHTML = results[counter].lowerText
    leftBackgroundColor.style.backgroundColor = results[counter].color
    rightBackgroundImage.style.backgroundImage = `url('${results[counter].image}')`
}
