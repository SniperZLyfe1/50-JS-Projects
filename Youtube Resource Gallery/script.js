const search = document.querySelector('input')
const saveBtn = document.querySelector('button')
const videoContainer = document.querySelector('.video-container')
const showcaseVideo = document.querySelector('.showcase')

let allVideos = JSON.parse(localStorage.getItem("names")) || []

if(allVideos){
    addVideo()
}

saveBtn.addEventListener('click', () => {
    if(!search.value) return
    if(allVideos.includes(search.value)) return alert('Video already Added to the List')
    const url = search.value;
    allVideos.unshift(url)
    localStorage.setItem("names", JSON.stringify(allVideos));
    addVideo()
    search.value = ''
})

function addVideo(){
    videoContainer.innerHTML = ''

    allVideos.map(id => {
        const modal = `
            <div class="grid-item">
                <img src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" alt=${id}/>
                <span class="remove-key">REMOVE</span>
            </div>
         `
         videoContainer.innerHTML += modal;
    })

    const removeAll = document.querySelectorAll('.remove-key')
    const images = document.querySelectorAll('img')

    removeVideo(removeAll)

    images.forEach(image => {
        image.addEventListener('click', () => {
            document.documentElement.scrollTop = 0
            document.documentElement.style.overflow = 'hidden'
            const url = image.getAttribute('alt').slice(0,-1)
            setTimeout(() => {
                showcaseVideo.innerHTML = `<iframe src="https://www.youtube.com/embed/${url}"></iframe>`
            },500)
            
            showcaseVideo.classList.add('active')

        })
    })
}

function removeVideo(removeAll){
    removeAll.forEach(remove => {
        remove.addEventListener('click', () => {
           const getIndex = remove.closest('.grid-item').querySelector('img').getAttribute('alt').slice(0,-1)
            const currentIndex = allVideos.indexOf(getIndex)
            allVideos.splice(currentIndex,1)
            localStorage.setItem("names", JSON.stringify(allVideos));
            addVideo()
        })
        
    })
}

showcaseVideo.addEventListener('click',() => {
    document.documentElement.style.overflow = 'auto'
    showcaseVideo.innerHTML = ''
    showcaseVideo.classList.remove('active')
})
