const counterDown = document.querySelector('.minus')
const counterUp = document.querySelector('.plus')
const counterShow = document.querySelector('.counter')
const colorInput = document.querySelector('.colour')
const clearBtn = document.querySelector('.clear')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

let size = 20;
let color = 'black'
let x, y;
let isPressed = false;


counterUp.addEventListener('click',increase)
counterDown.addEventListener('click',decrease)
colorInput.addEventListener('change',(e) => color = e.target.value)
clearBtn.addEventListener('click',() => ctx.clearRect(0,0,canvas.width,canvas.height))

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY
    console.log(colorInput.value)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
   if(isPressed){
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2,y2)
    drawLine(x,y,x2,y2)
    x= x2;
    y = y2;
   }
    
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}


function increase(){
    if(size >=20) return
    size++
    counterShow.innerHTML = size;
}

function decrease(){
    if(size <=1) return
    size--
    counterShow.innerHTML = size;
}