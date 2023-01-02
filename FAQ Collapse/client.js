const collapse_btn = document.querySelectorAll('button')

const btn_logo_first = `<i class="fa-solid fa-xmark"></i>`
const btn_logo_second = `<i class="fa-solid fa-chevron-down"></i>`

collapse_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.innerHTML === btn_logo_second ?  btn.innerHTML = btn_logo_first :  btn.innerHTML = btn_logo_second
        btn.closest(".freq-question").classList.toggle('active')
        btn.closest(".freq-question").querySelector('small').classList.toggle('hidden')
        btn.closest(".freq-question").querySelector('.logo-background').classList.toggle('hidden')
    })
})