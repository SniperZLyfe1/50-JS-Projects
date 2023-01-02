const songsBtn = document.querySelectorAll('.sound')
let song_name = '';

songsBtn.forEach(song=>{
    song.addEventListener('click', () => {
        if(song_name !== '') song_name.pause()
        let toLower = song.innerHTML;
        song_name = new Audio(`sounds/${toLower.toLowerCase()}.mp3`)
        song_name.play()
    })
})


