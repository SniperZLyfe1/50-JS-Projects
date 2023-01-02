const input = document.querySelector('input')
const todo_container = document.querySelector('.todo-list')
const notification = document.querySelector('.notification')

let todoCounter = 0;
const maxTodos = 10;
let savedTodoArr = []

getSavedTodo()

input.addEventListener('keydown', (e) => {

    if(todoCounter >= maxTodos && e.key === 'Enter'){
        notification.classList.add('show')
        setTimeout(() => notification.classList.remove('show'),500)
    }
    if(e.key === 'Enter' && e.target.value && todoCounter < maxTodos){
        createTodo(e.target.value)
        savedTodoArr.push(e.target.value)
        localStorage.setItem('myTodo',JSON.stringify(savedTodoArr))
        e.target.value = ''  
    }
})

function createTodo(data){
    const todo = document.createElement('div')
    todo.className = 'todo'
    todo.innerHTML = data
    todo_container.appendChild(todo)
    todoCounter++
    todo.addEventListener('mousedown', (e) => {

        if(e.button === 0)  todo.classList.toggle('completed')
        if(e.button === 2)  {
            todo.remove()
            todoCounter--
            savedTodoArr.splice(savedTodoArr.indexOf(todo.innerHTML),1)
            localStorage.setItem('myTodo',JSON.stringify(savedTodoArr))
        }
    })
}

window.addEventListener('contextmenu', function (e) { 
    e.preventDefault(); 
}, false);


function getSavedTodo(){
    const mytodo = JSON.parse(localStorage.getItem('myTodo'))
   
    if(mytodo){
        mytodo.forEach(todo => createTodo(todo))
    }
}