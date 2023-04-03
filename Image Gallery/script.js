const imageContainer = document.querySelector('.image-container')
const showMoreBtn = document.querySelector('.show-more')
const search = document.querySelector('input')

const PER_PAGE = 15;
let currentPage = 1
const API_KEY = 'jHAx07M2lh8UG4u2BserwQnBmCfHVNE9rmM4xi7mnSkZsmqvwIksDULZ'
const url = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${PER_PAGE}`

const getImages = (url) => {
  fetch(url, {
    headers: { Authorization: API_KEY }
  }).then(res => res.json()).then(data => {
    data['photos'].forEach(photo => {
      imageContainer.innerHTML += `
      <div class="images" style="background-image: url('${photo['src'].large2x}');">
        <small><i class="fa-regular fa-image"></i> <span class=name>${photo.photographer}</span></small>
        <button class=download-btn>
          <i class="fa-solid fa-download"></i>
        </button>
      </div>
      `

      const downloadBtns = document.querySelectorAll('.download-btn')

      downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const url = btn.closest('.images').style.backgroundImage.slice(5, -2)
          fetch(url).then(res => res.blob()).then(file => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(file)
            a.download = new Date().getTime()
            a.click()
          }).catch(() => alert("Failed to download"))
        })
      })
    })

  })
}

getImages(url)

showMoreBtn.addEventListener('click', () => {
  currentPage++
  if (search.value === '') {
    getImages(url)
  } else {
    getImages(`https://api.pexels.com/v1/search?query=${search.value}?page=${currentPage}&per_page=${PER_PAGE}`)
  }
})

search.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    imageContainer.innerHTML = ''
    currentPage = 1;
    getImages(`https://api.pexels.com/v1/search?query=${search.value}?page=${currentPage}&per_page=${PER_PAGE}`)
  }
})