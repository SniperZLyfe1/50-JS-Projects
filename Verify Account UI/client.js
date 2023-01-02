const inputs = document.querySelectorAll('input')

inputs[0].focus()

inputs.forEach(v => {
    v.addEventListener('keyup',(e) =>{
        const data = e.target.value
        if(data && v.nextElementSibling) v.nextElementSibling.focus()
        if(e.key === 'Backspace' && v.previousElementSibling) {
            v.previousElementSibling.focus()
            v.previousElementSibling.value = ''
        }

    })
})