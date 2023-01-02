const progress_bar = document.querySelectorAll('.progress')
const line_progress = document.querySelector('.line-progress')

//btn
const prev_btn = document.querySelector('.prev')
const next_btn = document.querySelector('.next')

//Counters
let progress_counter = 0;
let line_counter = 0;


//Next Btn Functionality
next_btn.addEventListener('click', () => {
  if (progress_counter >= progress_bar.length - 1) next_btn.disabled = true;

  progress_counter++;

  if (progress_counter > 1) {
    line_counter += 90
    line_progress.style.width = `${line_counter}px`
  }

  prev_btn.disabled = false;

  progress_bar.forEach((bar, idx) => {
    if (idx < progress_counter) bar.classList.add('active')
  })

})

//Previous Btn Functionality
prev_btn.addEventListener('click', () => {
  if (progress_counter <= 1) {
    prev_btn.disabled = true;
    line_counter = 0;
    progress_counter = 0;
  } else {
    line_counter -= 90
    progress_counter--;
  }

  next_btn.disabled = false;

  if (progress_counter <= progress_bar.length - 1) line_progress.style.width = `${line_counter}px`

  progress_bar.forEach((bar, idx) => {
    if (idx >= progress_counter) bar.classList.remove('active')
  })
})