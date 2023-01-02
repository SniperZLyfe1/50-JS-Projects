const count = document.querySelector('.count');
const imageContainer = document.querySelector('.container');
const full_counter = document.querySelector('.counter')


let counter = 0;
let counter_blur = 0;
let image_blur = 100;

function reload(){
    const inter = setInterval(() => {
        counter++
        counter_blur +=0.04
        image_blur--;

        count.innerHTML = counter;
        full_counter.style.filter = `blur(${counter_blur}px)`
        imageContainer.style.filter = `blur(${image_blur}px)`

        if(counter >= 100)  {
            clearInterval(inter)
            full_counter.style.opacity = '0'
        }
    }, 50);
}

reload()