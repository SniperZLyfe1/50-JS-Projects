const container = document.querySelector('.container')

const fetchImage  = () => {
    const rand = Math.trunc(Math.random()*1000)+100
    const API = `http://source.unsplash.com/random/${rand}x${rand}`
    const createImg = document.createElement('img')
    createImg.src = API
    container.appendChild(createImg)
}


for(let i = 0; i < 12; i++){
    fetchImage()
}