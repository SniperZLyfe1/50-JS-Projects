const clipboard = document.querySelector('.clipboard')
const show_password = document.querySelector('.password-input-show')
const generate_password = document.querySelector('.generate')

//Password Cases
const password_length = document.querySelector('#pass-value')
const lowercase_box = document.querySelector('#lowercase-value')
const numbers_box = document.querySelector('#numbers-value')
const symbols_box = document.querySelector('#symbols-value')

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let final_password = ''

function lowercaseFunc(){
    let lower = false;
    if(lowercase_box.checked){
        const rand = Math.trunc(Math.random()*alphabet.length)
        lower = alphabet[rand].toLowerCase()
    }
    return lower
}

function numbersFunc(){
    let numbers = false;
    if(numbers_box.checked){
        const rand = Math.trunc(Math.random()*9)
        numbers = rand
    }
    return numbers
}

function symbolsFunc(){
    let symbols = false;
    if(symbols_box.checked){
        const symbolChars = '!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~'.split('')
        const rand = Math.trunc(Math.random()*symbolChars.length)
        symbols = symbolChars[rand]
    }
    return symbols
}

function passwordFunc(){
    final_password = ''

    for(let i = 0; i < password_length.value; i++){
        const rand = Math.trunc(Math.random()*alphabet.length)
        final_password += alphabet[rand]
    }

    if(lowercaseFunc()){
        for(let i = 0; i < password_length.value/4; i++){
            const rand = Math.trunc(Math.random()*final_password.length)
            const index = final_password[rand]
            final_password = final_password.replace(index,lowercaseFunc())
        }
    }

    if(numbersFunc()){
        for(let i = 0; i < password_length.value/4; i++){
            const rand = Math.trunc(Math.random()*final_password.length)
            const index = final_password[rand]
            final_password = final_password.replace(index,numbersFunc())
        }
    }

    if(symbolsFunc()){
        for(let i = 0; i < password_length.value/4; i++){
            const rand = Math.trunc(Math.random()*final_password.length)
            const index = final_password[rand]
            final_password = final_password.replace(index,symbolsFunc())
        }
    }

    show_password.value = final_password
}

generate_password.addEventListener('click', () => {
    passwordFunc()
})

clipboard.addEventListener('click', () => {
   if(!show_password.value) return 
   show_password.select()
   navigator.clipboard.writeText(show_password.value)
   alert("Copied the text to clipboard")
})