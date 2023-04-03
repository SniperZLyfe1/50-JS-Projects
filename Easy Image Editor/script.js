const restBtn = document.querySelector('.reset')
const selectBtn = document.querySelector('#file')
const imageContainer = document.querySelector('.image-container')
const filterOptions = document.querySelectorAll('.options')
const filterSlider = document.querySelector('.slider')
const filterName = document.querySelector('.filter-name')
const filterPercentage = document.querySelector('.filter-percentage')
const rotateLeft = document.querySelector('.rotate-left')
const rotateRight = document.querySelector('.rotate-right')
const fullRotate = document.querySelector('.full-rotate')

let filterData = {
  'brightness': 100,
  'saturate': 100,
  'invert': 0,
  'grayscale': 0,
}

function openFile() {
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    removeAllFilters()
    imageContainer.innerHTML = `<img src="${reader.result}"/>`;
    // document.querySelector('a').setAttribute('download','')
    // document.querySelector('a').setAttribute('href',reader.result)
    addFilters()
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
};

selectBtn.addEventListener('change', openFile);


filterOptions.forEach(filters => {
  filters.addEventListener('click', () => {
    removeActiveFilter()
    filters.classList.add('active')
    filterName.innerHTML = `${filters.className.split(' ')[1].slice(0, 1).toUpperCase() +
      filters.className.split(' ')[1].slice(1)
      }`
    filterSlider.value = filterData[filters.className.split(' ')[1]]
    filterPercentage.innerHTML = `${filterSlider.value}%`

  })
})

filterSlider.addEventListener('change', (e) => {
  if (!document.querySelector('img')) return
  const targetVal = e.target.value
  filterPercentage.innerHTML = `${targetVal}%`
  const currentFilter = (filterName.innerHTML).toLowerCase()
  filterData[currentFilter] = targetVal
  addFilters()
})

function removeActiveFilter() {
  filterOptions.forEach(filters => filters.classList.remove('active'))
}

function addFilters() {
  let text = ''
  for (let filter in filterData) {
    text += `${filter}(${filterData[filter]}%) `
  }
  document.querySelector('img').style.filter = text
}

function removeAllFilters() {
  removeActiveFilter()
  filterPercentage.innerHTML = `100%`
  filterOptions[0].classList.add('active')
  filterSlider.value = 100
  filterData = {
    'brightness': 100,
    'saturate': 100,
    'invert': 0,
    'grayscale': 0,
  }
}

restBtn.addEventListener('click', () => {
  removeAllFilters()
  addFilters()
})

rotateLeft.addEventListener('click', () => {
  if (!document.querySelector('img')) return
  document.querySelector('img').style.transform = 'rotate(-90deg)'
})

rotateRight.addEventListener('click', () => {
  if (!document.querySelector('img')) return
  document.querySelector('img').style.transform = 'rotate(90deg)'
})

let fullRotation = false;
fullRotate.addEventListener('click', () => {
  if (!document.querySelector('img')) return
  if (fullRotation) {
    document.querySelector('img').style.transform = 'rotate(0deg)'
    fullRotation = !fullRotation
  } else {
    document.querySelector('img').style.transform = 'rotate(180deg)'
    fullRotation = !fullRotation
  }
})
