const event_key = document.querySelector('.event-key-div');
const event_keyCode = document.querySelector('.event-keycode-div');
const event_code = document.querySelector('.event-code-div')

document.body.addEventListener('keydown',(e) =>{
    event_key.innerHTML = e.key
    event_keyCode.innerHTML = e.keyCode;
    event_code.innerHTML = e.code
})