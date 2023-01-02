const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll', (e) => {
    const scrollPos = this.innerHeight / 5* 4
    boxes.forEach(box => {
        const boxPosY = box.getBoundingClientRect().top
        console.log(`Box Bottom = ${boxPosY} Window Bottom = ${scrollPos}`);

        if(boxPosY < scrollPos){
            box.classList.add('active')
        }else{
            box.classList.remove('active')
        }
    })
})


