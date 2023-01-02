const xbox = document.querySelector('.xbox-container')
const ps5 = document.querySelector('.ps5-container')

xbox.addEventListener('mouseover', () => widthChange(70,30))
ps5.addEventListener('mouseover', () => widthChange(30,70))

function widthChange(x1,p1){
    xbox.style.width = `${x1}%`
    ps5.style.width = `${p1}%`
}