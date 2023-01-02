const boxes = document.querySelectorAll('.box');
const image = document.querySelector('.fill')

image.addEventListener('dragstart', dragStart)
image.addEventListener('dragend',dragEnd)

boxes.forEach(box => {
    box.addEventListener('dragenter',dragEnter)
    box.addEventListener('dragover',dragOver)
    box.addEventListener('dragleave',dragLeave)
    box.addEventListener('drop',drop)
})


function dragStart() {
}


function dragEnd(e) {
    e.preventDefault()
 
    
}

function dragEnter(e) {
    e.preventDefault()
}


function dragOver(e) {
   e.preventDefault()
}

function dragLeave() {
}

function drop() {
    this.append(image)
}


