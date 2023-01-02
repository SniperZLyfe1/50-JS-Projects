const slides = document.querySelectorAll('.slide')
const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".prev");

slides.forEach((slide,idx) => {
    slide.style.transform = `translateX(${idx*100})%`
})

let curSlide = 0;

let maxSlide = slides.length - 1;


nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }


  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});