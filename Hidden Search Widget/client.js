const inputEl = document.querySelector('.input-container');
const searchEl = document.querySelector('.search-btn')

searchEl.addEventListener('click', () => {
        inputEl.value = ''
        inputEl.classList.toggle('notActive')
        searchEl.classList.toggle('notActive')

        if(!inputEl.classList.contains('notActive')) inputEl.focus()  

})