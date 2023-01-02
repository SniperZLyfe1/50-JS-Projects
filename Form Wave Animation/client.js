const email_input = document.getElementById('email')
const password_input = document.getElementById('password')

const email_label = document.getElementById('email-label')
const password_label = document.getElementById('pass-label')


email_input.addEventListener('focusin', () => {
    email_label.classList.add('active')
})

email_input.addEventListener('focusout', () => {
    email_label.classList.remove('active')
})

password_input.addEventListener('focusin', () => {
    password_label.classList.add('active')
})

password_input.addEventListener('focusout', () => {
    password_label.classList.remove('active')
})
