const textArea = document.querySelector('textarea')
const choices = document.querySelector('.choices-container')

let splitArr = []
let count = 0;

textArea.addEventListener('keydown',(e) => {
    choices.innerHTML = ''
    splitArr = textArea.value.trim().split(',');
    splitArr.forEach(v => {
        if(v){
            const spanCreate = document.createElement('span')
            spanCreate.innerHTML = v;
            choices.appendChild(spanCreate)
        }
    })
})

document.body.addEventListener('keydown',(e) => {
    if(e.key === 'Enter' && textArea.value){
        textArea.value = ''
        textArea.blur()
        const interval = setInterval(() => {
            const spans = document.querySelectorAll('span')
            const randomNum = Math.floor(Math.random()*spans.length);
            spans[randomNum].style.backgroundColor = 'rgb(0, 72, 101)';
            count++;
            const timeout = setTimeout(() => spans[randomNum].style.backgroundColor = 'rgb(245, 159, 30)',100)

            if(count >= 20) {
                clearInterval(interval)
                clearTimeout(timeout)
                count = 0;
            }

        },100)
    }
})