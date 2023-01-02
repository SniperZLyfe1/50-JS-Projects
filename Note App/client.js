const create_note = document.querySelector('.add-new-note')
const container = document.querySelector('.note-containers')
const notification = document.querySelector('.notification')

let edit_btn = document.querySelectorAll('.edit')
let delete_btn = document.querySelectorAll('.delete')
let note_text = document.querySelectorAll('.note-text')
let copy_btn = document.querySelectorAll('.copy')


function deleteFunc(){
    delete_btn.forEach(v => {
        v.addEventListener('click', () => {
            v.closest('.container').remove()
        })
    })

}

function editFunc(){
    let disabledStatus = true;
    edit_btn.forEach(v => {
        v.addEventListener('click', () => {
            if(disabledStatus === true) {
                disabledStatus = false
            }else{
                disabledStatus = true;
            }
            v.closest('.container').querySelector('textarea').disabled = disabledStatus;
        })
    })
   
}

function copyFunc(){
    copy_btn.forEach(v => {
        v.addEventListener('click',() => {
            const nearby = v.closest('.container').querySelector('textarea')
            if(!nearby.value) return 
            nearby.select()
            navigator.clipboard.writeText(nearby.value)
            notification.classList.add('active')
            setTimeout(() => notification.classList.remove('active'),1000);
        })
    })
    
}

(function createNote(){
    create_note.addEventListener('click', () => {
        const divCreated = document.createElement('div')
        divCreated.className = 'container'
        divCreated.innerHTML = `
            <div class="green-bar">
                <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
                <button class="copy"><i class="fa-regular fa-copy"></i></button>
            </div>
            <textarea disabled class="note-text"></textarea>
        `
        container.appendChild(divCreated)

        edit_btn = document.querySelectorAll('.edit')
        delete_btn = document.querySelectorAll('.delete')
        note_text = document.querySelectorAll('.note-text')
        copy_btn = document.querySelectorAll('.copy')
        deleteFunc()
        editFunc()
        copyFunc()



    })

    
})()
